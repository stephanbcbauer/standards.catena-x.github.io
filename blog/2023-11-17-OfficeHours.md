---
slug: Office Hours 2023-11-17
title: Office Hours 2023-11-17
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

- Idea that System Team Office Hour will become more open - Please follow upcoming mailing list infos and [Eclipse Matrix Chat](https://chat.eclipse.org/#/room/#tractusx:matrix.eclipse.org) discussions

### DevSecOps / System-Team

- _Info_: Quality Gate  (QG) issues from System Team will come soon
- _Info_: We are going to deploy [Kyverno](https://kyverno.io/) to our clusters. Goal: Verify Release Guidelines at deploy time; Warnings at first; might be enforced in future
- _Info_: sig-infra Support issue template "[Add me as Tractus-X project contributor](https://github.com/eclipse-tractusx/sig-infra/issues/new?assignees=&labels=support&projects=&template=support-add-project-contributor.md&title=New+Tractus-X+project+contributor)" onboard a new user to our Eclipse Foundation can be handled by **any** committer depending on who was mentioned
- PostgresSQL Alignment required feedback - Please join the [discussion](https://github.com/eclipse-tractusx/sig-infra/discussions/308)
- Package manager upgrades in Dockerfiles are a "no-go" see [TRG 4.2](https://eclipse-tractusx.github.io/docs/release/trg-4/trg-4-02)
- Trivy workflow failing on HIGH findings see [here](https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmessage%2F19%3Ameeting_NTQxZjkzNTQtYTc4MC00NzQ3LWE2N2YtMzQ5YzMyM2E1MzMw%40thread.v2%2F1700223757067%3Fcontext%3D%257B%2522contextType%2522%253A%2522chat%2522%257D&type=message&deeplinkId=216bcb26-39f8-480d-9952-bee5e7cdf145&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true)
- HashiCorp Vault tokens for EDC deployments --> Please use the Argo CD Vault plugin mechanism.

### Security

- Alternative to Invicti dynamic scanning with [OWASP ZAP](https://www.zaproxy.org/) in elaboration
- GitGuardian secret scanning was done and security team get aware of HashiCorp Vault tokens problematic
  - will be a meeting in place on January 2024 and technique will be presented
- QG Process is ongoing
- Token discussions will be supported by Security Team. If there are questions, please contact them under [sig-security repo](https://github.com/eclipse-tractusx/sig-security/issues/new/choose)

### FOSS

- Congrats to [Andrea Bertagnolli](https://github.com/ndr-brt). He was successfully elected to be a committer in the [Eclipse Tractus-X project](https://projects.eclipse.org/projects/automotive.tractusx)
- YouTube Videos from [EclipseCon](https://www.youtube.com/@EclipseFdn) are available
  - 🌟 [Sebastian](https://github.com/SebastianBezold) from our System Team - [Whale Care 101 – How We Organize A 200+ Devs Project](https://www.youtube.com/watch?v=eMK1qU-VFWM)
  - 🌟 [Evelyn](https://github.com/evegufy) from our Portal Team [Charting new data spaces with Catena-X](https://www.youtube.com/watch?v=76maum1I2aw)
  - 🌟 [Angelika](https://github.com/AngelikaWittek) and her college Lina - [Open Source distributions in a cloud-native world from a technical to a legal point of view](https://youtu.be/EVg9aP_toG4?si=a6GBgfQT7Ak4Nhrm)
- Tractus-X Community Days tickets are sold out - Please put yourself on [waiting list](https://www.eventbrite.com/e/first-eclipse-tractus-x-community-days-tickets-721974885317?aff=oddtdtcreator)
- List of Committers & Contributors in [confluence](https://confluence.catena-x.net/pages/viewpage.action?pageId=69406871) (only available for consortia members)- Please fill out your information if you want to be listed public

## Open discussions

- little [pandoc](https://github.com/eclipse-tractusx/SSI-agent-lib/tree/main/docs) intro from [Boris](https://github.com/borisrizov-zf) to generate `pdf` files
- question from [Mathias](https://github.com/matbmoser) what if Trivy Workflow fails --> raise a support issue against the [sig-security repo](https://github.com/eclipse-tractusx/sig-security/issues/new/choose)
- question from [Mathias](https://github.com/matbmoser) does someone have also MIW 403 Errors in their EDCs in INT --> checkout our [Eclipse Matrix Chat](https://chat.eclipse.org/#/room/#tractusx:matrix.eclipse.org)
- question from [Tom](https://github.com/tom-rm-meyer-ISST) to [TRG 7.05 - Legal information](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-05) --> put the Licence file on root level of your repository
- question from [Tom](https://github.com/tom-rm-meyer-ISST) licence information and how to storage for your application --> check out [TRG 7.07](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-07/) and [TRG 7.08](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-08/)

## Session recording

- You can find the recording [HERE](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?sw=bypass&bypassReason=abandoned&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FOffice%20Hour%2017%2E11%2E2023%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview)
