---
slug: Office Hours 2023-06-02
title: Office Hours 2023-06-02
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- The new [STABLE environment](https://home.stable.demo.catena-x.net/) is available.
- Reminder to set [proper](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-04/) CPU and MEM limits on DEV (et al.) cluster. See the [CPU Quota Panel](https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now&viewPanel=8) which is part of this general [dashboard](https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now) as reference

### Security

- Security assessments are still ongoing, currently SSI
- scan tools: no update yet

### FOSS

- New [TRG 7.05](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-05) - 'Legal information for distributions' has been released
- New [TRG 7.06](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-06) - 'Legal notice for end user content' has been released
  - Including shared [frontend assets](https://www.npmjs.com/package/cx-portal-shared-components) by the Portal Team
- Friendly reminder for:
  - Update upstream EF repositories on a regular basis (which will keep the PR small)
  - Update dependencies on a regular basis and open required IP issues in a timely manner to avoid lack of time in the end of a PI when release cycle starts again.
- Next [Eclipse Office hour](https://www.eclipse.org/projects/calendar/#office-hours) will take place Thursday, 8th June 2023
- EclipseCon 2023 [Call for Proposals](https://www.eclipsecon.org/2023/cfp) (submission deadline: 16th June 2023)

## Open discussions

- Reminder to please vote on a [common drawing tool](https://github.com/eclipse-tractusx/sig-infra/discussions/19)
- Reminder to [check the PRs](https://github.com/eclipse-tractusx/e2e-testing/pulls) on the e2e-testing repository
- The (updated) helm testing action is currently defaulting to an very old Kubernetes version (1.21) - Evelyn will create a PR enabling to specify the version (the impatient can peek into [their dev workflow](https://github.com/eclipse-tractusx/portal-cd/blob/0bdbda19b44661d82934ac1ebf092ef01c1737fe/.github/workflows/portal-chart-test.yaml#L39))
- [Deprecation](https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/) of 'set-output' + 'save-state' in GitHub Actions as of 1st June 2023
- Upload of images to [Tractus-X's DockerHub](https://hub.docker.com/u/tractusx) is only possible via workflow runs on Tractus-X repositories. Please see [TRG 4.05](https://eclipse-tractusx.github.io/docs/release/trg-4/trg-4-05) for reference.

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230602%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DELECTRON&referrerScenario=teamsSdk%2DopenFilePreview).
