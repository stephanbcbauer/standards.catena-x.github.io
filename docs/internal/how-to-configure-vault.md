---
title: How to setup Hashicorp Vault
---

This how-to will guide you through the deployment and configuration of Hashicorp Vault

# Create an AKS cluster for vault

[Create AKS cluster with Terraform](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/01_core_cluster)

- main.tf contains resorces that will be created
- variables.tf contains all parameters of the resources (e.g. environment name, vm size, node count)
- environments/*.tfvard contains variables that are specific to the environment, and override the ones in variables.tf

[Resources](https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/01_core_cluster/main.tf)

[Vault cluster settings](https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/01_core_cluster/environments/vault.tfvars)

[AKS cluster default values](https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/01_core_cluster/variables.tf)

[More information on AKS cluster creation](https://catenax-ng.github.io/docs/internal/how-to-setup-aks-cluster-via-terraform)

# Deploy Vault

[ArgoCD application](https://github.com/catenax-ng/k8s-cluster-stack/blob/main/environments/core/applications/vault-application.yaml)

[Helm chart](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/apps/vault)

# Initialization and first time unseal is manual action (for now)

## Get the kube config of the vault cluster

```
az login --use-device-code --tenant <tenant_id>
az account set <subscripition_id>
az aks get-credentials --admin --resource-group cx-vault-rg --name cx-vault-aks-services --file $HOME/.kube/cx-vault-admin
```

## Initialize one of the vault instances and save the root token and unseal keys

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault operator init`

## Login with the root token

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault login`

## Unseal the first instance by running the following command three times

Each time provide a different unseal key out of the five that are generated during initialization

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault operator unseal`

##Display the status of the first instance and note the internal url / ip address of the first node that will be the leader

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault status`

If the initialization and unseal were successful, you will see the following status

  ...
  Initialized              true
  Sealed                   false
  ...

## Join the other (two) instances as followers to the first insance

Provide the vault root token when prompted

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault login`

Join the first instance using its internal url or ip address

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault operator raft join http://vault-0.vault-internal:8200`

Check the status of the follower instances

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault status`

In case sealed is true, then unseal them as well, again run the command three times providing three different unseal keys out of the five

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault operator unseal`

Once all instances have been unsealed, no further unseal will be necessary, as Azure keyvault will take care of it.

# Configure vault secret engines, teams, policies, policy assignments, authentication

## Clone GitHub repository k8s-cluster-stack

`git clone https://github.com/catenax-ng/k8s-cluster-stack.git`

## Get the approle ID and approle secret ID from Azure Keyvault cx-vault-unseal secrets using Azure CLI

```
az login --use-device-code --tenant <Tenant ID>
az account set <Subscription ID>
az keyvault secret show --vault-name cx-vault-unseal --name vault-approle-id | jq '.value'
az keyvault secret show --vault-name cx-vault-unseal --name vault-approle-secret-id | jq '.value'
```

## Get the approle ID and approle secret ID from Azure Keyvault cx-vault-unseal secretsfrom the Azure portal

[Approle ID](https://portal.azure.com/#@catenax.onmicrosoft.com/asset/Microsoft_Azure_KeyVault/Secret/https://cx-vault-unseal.vault.azure.net/secrets/vault-approle-id)

[Approle secret ID](https://portal.azure.com/#@catenax.onmicrosoft.com/asset/Microsoft_Azure_KeyVault/Secret/https://cx-vault-unseal.vault.azure.net/secrets/vault-approle-secret-id)

## Teams, secret engines, policies, policy assignments and autentication is configured using Terraform

(update link once merged to main)

[Terraform code](https://github.com/catenax-ng/k8s-cluster-stack/blob/feature/A1ODT-520-vault-policy-housekeeping/terraform/02_vault/main.tf)

```
cd k8s-cluster-stack/terraform/02_vault
terraform init
terraform plan -var='login_approle_role_id=${APPROLE_ID}' -var='login_approle_secret_id=${APPROLE_SECRET_ID}' -out .terraform/vault.tfplan
terraform apply ".terraform/vault.tfplan"
```
