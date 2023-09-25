---
slug: Office Hours 2023-09-22
title: Office Hours 2023-09-22
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps / System-Team

- **Kubernetes Stack Updates**
  - ArgoCD has been updated from 2.6 to 2.7 on all environments
  - Kube Prometheus Stack (Grafana, Prometheus) has been updated to v51.02 on all environments
- **Stable deployment**  
  If you face issues deploying your Applications to the STABLE environment please refer
  to [this Thread in our DevSecOps CoP Channel](https://teams.microsoft.com/l/message/19:9a3c4a05a3514d07b973c13e7b468709@thread.tacv2/1694764464843?tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380&groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&parentMessageId=1694764464843&teamName=Communities%20of%20Practices&channelName=CX%20-%20CoP%20DevSecOps&createdTime=1694764464843&allowXTenantAccess=false)
  for known issues. In case of additional questions feel free to contact System Team.  
  Please don't forget to document any additional configuration steps in
  the [Stable 3.2 - Playbook General MS Teams channel](https://teams.microsoft.com/l/channel/19%3awLi7FH4X8ruG89sVauZfx67lp2GsrMOZep5jA_b85lQ1%40thread.tacv2/General?groupId=bd3cce6a-8c62-47de-a4e7-4dc996ddf365&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380).
  In case you can not access the channel, please get in contact with Markus Billich.
- **TRG proposal: TRG 1.04 Diagrams as Code**  
  Call for participation for this TRG:
  - [Discussion](https://github.com/eclipse-tractusx/sig-infra/discussions/19)
  - [PullRequest](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/pull/401)

### Security

- CVE Version moved from 2 to 3. Please check your applications in Veracode, they might have changed from green to red.

### FOSS

- **Failing ECA Checks**  
  In case of failing ECA checks when opening PRs to Eclipse-Tractusx, please check
  our [FAQ](https://eclipse-tractusx.github.io/docs/dev_faq/#the-eca-check-is-failing-while-merging-a-pr-what-to-do),
  especially point 3.
- **Committer Elections**  
  Currently there are 2 elections ongoing for Tomazs Barwicki and Christoph Jung. Please get in contact with FOSS in
  case you want to propose a committer and start an election. This is an offer to you to provide good content in the
  proposal.
- **Save the dates**
  - EclipseCon 2023, 16. - 19. Oct. 2023, Ludwigsburg (Germany)
  - Eclipse-TractusX Community Days, 7. - 8. Dec. 2023, Munich (Germany)

## Open discussions

- Discussion about how to improve Kubernetes Pod readiness probes
- Eclipse Dash License Tool used as maven plugin facing certificate issues
- EDC implementation questions

## Session recording

- You can find the
  recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/Office%20Hour%2022.09.23.mp4?csf=1&web=1&e=jjOU4f&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19)
