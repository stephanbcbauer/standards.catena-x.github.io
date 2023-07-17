---
slug: Office Hours 2023-07-14
title: Office Hours 2023-07-14
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- Keep in mind, that resources at Eclipse Foundation (IP-Team), System-Team and Security-Team will have only limited resources available during holiday season (August 2023).
- Reminder to set [proper](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-04/) CPU limits on the clusters (especially Beta, Dev). See the [CPU Quota Panel](https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now&viewPanel=8) which is part of this general [dashboard](https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now) as reference
  unit for CPU fragments are the so called millicores, which means 1000m = 1 full CPU

### Security

- Friendly Reminder: Please look at VeraCode
- Security assessments ongoing

> **Announcement** VeraCode presentation session is planned for the Friday 21.7.2023

### FOSS

- Presentation from [Paul](https://github.com/paullatzelsperger) "How to use a reusable [Workflow](https://github.com/eclipse-edc/.github/blob/main/.github/workflows/dependency-check.yml) for gradle Dash Licence Check"

```yaml
jobs:
 check:
  uses: eclipse-edc/.github/.github/workflows/dependency-check.yml@main
```

- Reminder from [Evelyn](https://github.com/evegufy)  "How to use a reusable [Workflow](https://github.com/eclipse-tractusx/sig-infra/blob/main/.github/workflows/reusable-dependencies-dotnet.yaml) for dotnet / yarn Dash Licence Check"

### Test-Managment

- Info from Test Management Feature Freeze on INT Environment 24.07.23 - 16.8.23
  - Contact: Rainer Herger, Peter Volk, Bernd Rothbrust

## Open discussions

- Feedback and Live Demo to VeraCode [issue](https://github.com/eclipse-tractusx/sig-infra/issues/165)
- Contact person for ArgoCD / INT Environment shared to the [CoP DevSecOps MS Teams channel](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380)
- Feedback to [TRG 5.09](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-09/) about Helm Testing

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/Shared%20Documents/Forms/AllItems.aspx?OR=Teams%2DHL&CT=1689595535113&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIxNDE1LzIzMDYwNDAxMTc3IiwiSGFzRmVkZXJhdGVkVXNlciI6ZmFsc2V9&sortField=Modified&isAscending=false&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FMicrosoftTeams%2Dvideo%20%286%29%2Emp4&viewid=a90239a2%2D4eb1%2D446e%2D9246%2Daedc18ebdc75&parent=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings).
