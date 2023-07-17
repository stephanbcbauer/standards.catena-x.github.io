---
slug: Office Hours 2023-03-24
title: Office Hours 2023-03-24
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- We're planning to upgrade Argo CD in the near future
  - New version will introduce bigger restructuring in Argo CDs plugin implementation
  - We do not expect any impact on existing applications
  - We'll post updates to the CoP, as soon we start upgrading DEV, INT, PRE-PROD and BETA
- IRS is the first Temurin based product on [DockerHub](https://hub.docker.com/r/tractusx/irs-api)!
  - Learning: Use absolute URLs to point to files and logos, since it would be rendered on DockerHub otherwise
  - ```apk upgrade``` to fix the previously existing CVE is no longer necessary
  - Altering the image on top of just copying the .jar file should be avoided, so the Temurin used library annotations are correct

### Security

- Overview of Pen-Testing executions: [https://confluence.catena-x.net/display/cxsecurity/External+Penetration+Testing](https://confluence.catena-x.net/display/cxsecurity/External+Penetration+Testing)
- Clarification: Security assessments have to be done on every release, even if there are no changes to the app

### FOSS

- Reminder: Try to frequently contribute back to eclipse-tractusx instead of working on forks until next release
  - Background: Big contributions require a similar IP issue like the initial contribution. [EF handbook](https://www.eclipse.org/projects/handbook/#ip-project-content)
  - Smaller PRs are easier to review for committers that are not part of your team
  - Well structured PRs are perfect for potential committer nomination

## Open discussions

- Issues with multiple Eclipse Foundation accounts:
  - If you have multiple accounts by accident (i.e. private + company mail), please delete the one you are not using.
    Usually the private one, since you need the company address in your commits for copyright reasons
  - Deletion request can be sent to [privacy@eclipse.org](mailto:devsecops@catena-x.net). Best from the Email address you want the account to be deleted
- New products directly starting in eclipse-tractusx
  - If you have no code published yet, you can directly start contributing
  - If you already have initial code, you are allowed to push directly, but have to immediately open the initial contribution IP issue afterwards
  - How to cleanup container images, that are no longer needed (i.e. build for container scanning)
    - suggestion: [https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FCXDevSecOps%20Office%20Hours%2D20230324%5F124644%2DMeeting%20Recording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview).
