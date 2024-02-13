---
slug: Office Hours 2022-12-02
title: Office Hours 2022-12-02
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

__DevSecOps:__

- ArgoCD v2.4 has been deployed to alle environments. Initial issues have been fixed.
- New [TRG 5.06](https://catenax-ng.github.io/docs/trg/trg-5/trg-5-6) regarding chart dependencies has been released
  - first alignment to postgres v14.5.0 (= chart v11.x)
- [TRG 4.01](https://eclipse-tractusx.github.io/docs/release/trg-4/trg-4-1/) and [TRG 5.01](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-1/) are now mandatory and will raise "red flags" in the release management
  - especially do __not__ use the latest tag of your Docker images in the helm charts

__Security:__

- An overview of the security tooling can be found in the Catenax-ng documentation.
- Please merge the PRs created by security team regarding "fix security config"

__FOSS:__

- at least one committer of each team shall join the office hour
- The recordings of the EclipseCon 2022 can now be found on [YouTube](https://www.youtube.com/playlist?list=PLy7t4z5SYNaRoQ4o40i6zfD0ZuoenX7ph)

## Open discussions

- Please consider starting your new projects directly in Tractus-X
  - The getting started guide will be expanded and updated accordingly
- Docker images which are build and pushed to Catenax-ng shall be marked as "for demo purposes only", e.g. "The referenced container images are for demonstration purposes only."
- The ArgoCD [notification service for MS Teams](https://argocd-notifications.readthedocs.io/en/stable/services/teams/) is not available yet. Please get in contact with the MS Teams Admins as we currently do not have any MS Teams Apps.
- a blocker appointment will be send for (potential) discussion overtime

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20221202%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview)
