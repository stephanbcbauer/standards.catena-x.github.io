---
slug: Office Hours 2023-05-26
title: Office Hours 2023-05-26
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- Former PRE-PROD environment/cluster will be sun downed and a new STABLE environment/cluster will be available.
  Availability is planned for week of may, 29th.
- GH Action Minutes in Catenax-NG organization ran into limitation. There are no more minutes available this month, as
  of 1st of June GH Workflows will be functioning again.
- New GH Support Process is used, but we have a couple of hints:
  - Please identify yourself, either on your GH profile page or in the issue itself. In general everyone with a GH
    account is able to create a support issue and in some cases we've to validate if the request itself is valid. It
    helps a lot to know who is opening the request to verify.
  - Be careful with sensitive data, like email addresses, provided in issues. When you request to onboard a new
    developer to our Catenax-ng organization. It's sufficient to provide the GH account name, there is no need for any
    email-address. Keep in mind, that these issues are public and can be read from everyone, even spam-bots.
- E2E-Testing Helm Chart: We encourage you to contribute to
  this [e2e-testing repository](https://github.com/eclipse-tractusx/e2e-testing/tree/main/charts/umbrella
  ). The goal of this repository is to have an umbrella Helm chart to install a Catena-X/Tractus-X Network with all
  required components with one single Helm chart.
- ArgoCD has been updated to version 2.6.8 today in the morning.

### Security

- Well known penetration testing are ongoing.
- Security Assessment has started with a couple of products/components, mainly focused on migration DAPS → SSI.
- Short live demo of a GH workflow using several open-source security scanning tools within one workflow. Goal is to
  have/provide a security scanning without using commercial products and to support open-source tools.

### FOSS

- Frequent reminder for:
  - Update upstream EF repositories on a regular basis (which will keep the PR small)
  - Update dependencies on a regular basis and open required IP issues in a timely manner to avoid lack of time in the
    end of a PI when release cycle starts again.

## Open discussions

- Follow-up discussion about the live demo security team provided about aims and goals.
- Discussion about How to work with EF repositories without being a Committer  
  This topic has been also discussed on our [mailing list](https://accounts.eclipse.org/mailing-list/tractusx-dev). It
  is impossible to commit to EF repositories/branches without being a committer. It has been also discussed with EF, and
  there is no way. So best practice is to fork the repository, create a branch where you can add your changes/code/etc.
  and open a PR from this branch to the upstream repository. Please avoid to merge the branch inside of the fork to the
  forks main branch. It's recommended to have a branch (main) which represents the current state of the upstream at any
  time.
- Discussion about opening IP checks when PR contains more than 1000 lines of changed code, even if the changes only
  belong to changed/added documentation. In the end, it's up to the committer to decide. If only documentation is added
  in a PR with more than 100 lines of changes, then of course opening a IP check can be omitted.
- Some team is working on GH Action/Workflow to automatically handle changed dependencies and running EF dash tool.
  There will be a demo in one of the next office hours to present the results.

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230526%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview).
