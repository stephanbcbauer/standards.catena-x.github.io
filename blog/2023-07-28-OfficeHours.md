---
slug: Office Hours 2023-07-28
title: Office Hours 2023-07-28
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- Infra components upgrades:

  - Kube prometheus stack upgraded to 48.2.0 (from 47.0.0) on all environments.
    - Changelog [v48.2.0](https://github.com/prometheus-community/helm-charts/releases/tag/kube-prometheus-stack-48.2.0)

  - Cert-manager upgraded to 1.12.2 (from 1.10.0) on all environments.
    - Changelog [v1.12.2](https://cert-manager.io/docs/release-notes/release-notes-1.12/)

  - Ingress-nginx upgraded to 4.7.1 (from 4.5.2) on all environments.
    - Changelog [v4.7.1](https://github.com/kubernetes/ingress-nginx/releases/tag/controller-v1.8.1)

- GitHub Action Minutes hit Quota Limit (catenax-ng org), workflows will not be executed until end of the month.

- Reminder on efficient usage/request of kubernetes' clusters CPU/Mem resources. Currently disproportion between really utilized resources vs allocated is very high what causes capacity constraints.

### Security

- Veracode token expired. The token is used for GitHub Actions. Upload and scan feature doesn't work currently, expected to fix within a week.
- Request to check Veracode finding since many SCA findings are present. It's recommended to update dependencies.

### FOSS

- No presence.

## Open discussions

- Question arised about reviewing open IP issue for Digital Twin Registry application. Advised that Eclipse Foundation needs to review that, as it's not DevOps scope. With regards to PR review, it was stated that every committer can review PR. In general two step approach is followed, first legal stuff is verified and then application related by a team member.
- Question on rejected PR due to Eclipse Foundation Agreement, specifically what is the way to find who from involved committers doesn't have it valid/signed off. Normally it should be visible on a detailed page. For the given case seems like on of the member didn't sign it, name was given in the communication.

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230728_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=h8tfgU)
