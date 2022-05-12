---
title: How to setup and AKS cluster via terraform
---

This how-to will guide you through the deployment and configuration of Hashicorp Vault

#Create an AKS cluster for vault
All AKS clusters are created using Terraform
https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/01_core_cluster
The vault cluster settings are controlled through the environments Terraform variables
https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/01_core_cluster/environments/vault.tfvars
Some default values can be found in the core cluster variables (can be overridden in the environment)
https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/01_core_cluster/variables.tf

For more information on how to create an AKS cluster, please see the documentation
https://catenax-ng.github.io/docs/internal/how-to-setup-aks-cluster-via-terraform

#Vault is deployed as an ArgoCD application
https://github.com/catenax-ng/k8s-cluster-stack/blob/main/environments/core/applications/vault-application.yaml

#Automatic unseal with Azure Keyvault is preconfigured
https://github.com/catenax-ng/k8s-cluster-stack/blob/main/apps/vault/values.yaml

#Initialization and first time unseal is manual action (for now)

##Get the kube config of the vault cluster
```
az login --use-device-code --tenant 495463c3-0991-4659-9cc5-94b4a3f7b1d6
az account set 899135fc-19c6-47cb-82f1-0230af7b99b5
az aks get-credentials --admin --resource-group cx-vault-rg --name cx-vault-aks-services --file $HOME/.kube/cx-vault-admin
```
##Initialize one of the vault instances and save the root token and unseal keys
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault operator init`

##Login with the root token
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault login`

##Unseal the first instance by running the following command three times
Each time provide a different unseal key out of the five that are generated during initialization
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault operator unseal`

##Display the status of the first instance and note the 
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault status`

If the initialization and unseal were successful, you will see the following status
...
Initialized              true
Sealed                   false
...

##Join the other two instances as followers to the first insance
Provide the vault root token when prompted
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault login`
Join the first instance using its internal url or ip address
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault operator raft join http://vault-0.vault-internal:8200`
Check the status of the follower instances
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault status`
In case sealed it true, then unseal them as well, again running the command three times providing three different unseal keys out of the five
`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault operator unseal`

Once all instances have been unsealed, no further unseal will be necessary, as Azure keyvault will take care of it.

#Configure vault secret engines, teams, policies, policy assignments, authentication

##Clone GitHub repository k8s-cluster-stack
`git clone https://github.com/catenax-ng/k8s-cluster-stack.git`

##Get the approle ID and approle secret ID from Azure Keyvault cx-vault-unseal secrets using Azure CLI
```
az login --use-device-code --tenant 495463c3-0991-4659-9cc5-94b4a3f7b1d6
az account set 899135fc-19c6-47cb-82f1-0230af7b99b5
az keyvault secret show --vault-name cx-vault-unseal --name vault-approle-id | jq '.value'
az keyvault secret show --vault-name cx-vault-unseal --name vault-approle-secret-id | jq '.value'
```
##Get the approle ID and approle secret ID from Azure Keyvault cx-vault-unseal secretsfrom the Azure portal
https://portal.azure.com/#@catenax.onmicrosoft.com/asset/Microsoft_Azure_KeyVault/Secret/https://cx-vault-unseal.vault.azure.net/secrets/vault-approle-id
https://portal.azure.com/#@catenax.onmicrosoft.com/asset/Microsoft_Azure_KeyVault/Secret/https://cx-vault-unseal.vault.azure.net/secrets/vault-approle-secret-id

##Teams, secret engines, policies, policy assignments and autentication is configured using Terraform
(update link once merged to main)
https://github.com/catenax-ng/k8s-cluster-stack/blob/feature/A1ODT-520-vault-policy-housekeeping/terraform/02_vault/main.tf
```
terraform init
terraform plan -var='login_approle_role_id=${APPROLE_ID}' -var='login_approle_secret_id=${APPROLE_SECRET_ID}' -out .terraform/vault.tfplan
terraform apply ".terraform/vault.tfplan"
```

