---
slug: Office Hours 2022-11-25
title: Office Hours 2022-11-25
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

__DevSecOps:__

- please check your used Github Actions for (security) updates and deprecation warnings regularly. E.g. the v1 version of the [CodeQL Action](https://github.blog/changelog/2022-04-27-code-scanning-deprecation-of-codeql-action-v1/) will not work anymore in a few days.
- Central Tractus-X helm repositories have been prepared: [Dev](https://eclipse-tractusx.github.io/charts/dev/) / [Stable](https://eclipse-tractusx.github.io/charts/stable/)

__Security:__

- Github Actions for __checkout__ and __upload-sarif__ have to updated to the latest version du to a security issue.
  - Security team will create PRs to the project repos for KICS and Trivy as they use those actions

__FOSS:__

- project move to Tractus-X is mostly done
- committers are urged to participate on new elections

## Open discussions

- Release Management expects that releases are pushed to Tractus-X repositories
  - for the time being it is accepted to still use Catenax-ng Docker images.
- use the __chart-releaser__ action to publish your helm repository via Github pages.

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20221125%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview)
