---
sidebar_position: 2
---

# Things to request

We provide a standard set of resources you can request. Please create a issue within our GitHub repository within `eclipse-tractusx/sig-infra` with our
[GitHub issue templates](https://github.com/eclipse-tractusx/sig-infra/issues/new/choose) and fill it out based on the information from the specific resource you want.

some suggestions:

- User invitation to the catenax-ng GitHub organization
- Complete onboarding of a new product
- Fork of eclipse-tracutsx repo to catenax-ng
- Request a new demo - environment

:::tip

We highly recommend you to use one of our [GitHub issue templates](https://github.com/eclipse-tractusx/sig-infra/issues/new/choose)
and fill out the requested information within the template.

:::

## General consulting requests

We are happy to help you out on several topics regarding DevSecOps. The following sections describe some of the most
common cases. In any case, you need help, feel free to get in contact with us through
the [CoP Channel](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380).

## System / Security Team Board

If you want to know your Issue status please have look under our GitHub Project Board
[The System Team / Security Support](https://github.com/orgs/eclipse-tractusx/projects/9/views/1)

## Request databases and other Azure services

Currently, we do not offer azure services as we try to provide a cloud agnostic platform stack. Please try to use a helm
dependency for services you require.

We will provide azure services soon but only for critical / central services.

## Request access / setup SonarCloud

Currently, SonarCloud is NOT mandatory for Release 1. VeraCode is. If you want to use SonarCloud right now, you can
request scanning of **public** repositories (**private** are not supported!).

Please use the Security [GitHub issue template](https://github.com/eclipse-tractusx/sig-infra/issues/new?assignees=the-tatanka&labels=security&template=security-support-request.md&title=)
for SonarCloud support.

## Request assistance from Security team

The Catena-X Security expert team is happy to provide assistance with all security related topics. Exemplary requests
are:

- Security risk assessment (RRA, Threat modeling, Code reviews)
- Pentesting
- Veracode (initial setup, GitHub integration, Jira integration)
- Trivy
- KICS
- Gitguardian
- Invicti

Please use the Security [GitHub issue template](https://github.com/eclipse-tractusx/sig-infra/issues/new?assignees=the-tatanka&labels=security&template=security-support-request.md&title=).

## Onboarding to Catena-X demonstrator environments (ArgoCD, Vault, etc.)

If you are not yet familiar with the setup of our demonstrator environments or the tools running on it, we will guide
you through the onboarding in a hands-on session. Just get in contact with us, and we will schedule this meeting.

## Setting up helm charts for your application

We highly encourage you to create a helm chart for your application. This will make it easy for you to deploy your
application to the demonstrator environments and will also help other teams, that depend on your application to
integrate against your app.

We can help you to create the helm chart, but before you get in contact with us, also check out the existing
guide [here](guides/Helm/helmchart.md).

## Graphical Support Workflow

![Administration](assets/graphical-support-workflow.png)
