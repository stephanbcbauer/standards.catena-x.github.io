---
sidebar_position: 4
---

# Things to request

We provide a standard set of resources you can request. 
Please create a ticket within our Jira with this template and fill it out based on the information from the specific resource you want.


## User invitation to the catenax-ng GitHub organization

If you need access to repositories inside the catenax-ng organization or you want to use ArgoCD for deploying an application
on one of the demonstrator environments, you need to request an invitation to the catenax-ng GitHub organization.

For that we need the following information from you:

- GitHub account name
- Name of someone who can 'vouche' for you to be part of Catena-X (i.e. your PO)

Once you are part of the organization, you can be invited to teams by maintainers of the different product teams.
If there is no team inside the organization for your product yet, you can request that too.


## GitHub team in catenax-ng

GitHub teams are used to grand multiple user access to the same resources. Teams are also used to grand access
to projects in ArgoCD and secrets in Vault. Usually each Catena-X product team will have one team in the catenax-ng GitHub organization.

If you want to request a team, we will need the following information from you:

- Product team name
- List of GitHub user accounts, that we initially invite to the team and grand maintainer privileges for the team.

The initially invited people will be granted maintainer access to the team. Every additional team member can then be invited by 
one of the maintainers.


## GitHub repository in catenax-ng

If you need to collaborate on source-code, you can request a repository in the catenax-ng GitHub organization.
You can request as many repositories as you need for your team.
We offer these repositories during the transition phase from the catenax oganization to proper open-source repositories
in the eclipse foundation. After moving your repositories to eclipse foundation, you can still use catenax-ng for deployment 
specific configuration of the demonstrator environments.

To request a repository please use the [CoP Channel](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380)
and provide us with the following information:

- Name of the repository
- GitHub team(s), that should get access to the repository

If you need additional help or advice on how to structure your repository after the transition from catenax, just reach out to us.


## General consulting requests

We are happy to help you out on several topics regarding DevSecOps. The following sections describe some of the most common
cases. In any case, you need help, feel free to get in contact with us through the [CoP Channel](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380).


### Onboarding to Catena-X demonstrator environments (ArgoCD, Vault, etc.)

If you are not yet familiar with the setup of our demonstrator environments or the tools running on it, we will guide you
through the onboarding in a hands-on session. Just get in contact with us, and we will schedule this meeting.


### Setting up helm charts for your application

We highly encourage you to create a helm chart for your application. This will make it easy for you to deploy your application
to the demonstrator environments and will also help other teams, that depend on your application to integrate against your app.

We can help you to create the helm chart, but before you get in contact with us, also check out the existing guide [here](kubernetes-basics/helm.md).
