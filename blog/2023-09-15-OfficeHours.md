---
slug: Office Hours 2023-09-15
title: Office Hours 2023-09-15
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- k8s cluster version 1.26.6 updated on all environments except stable environment is on tested release version 1.25.6
- Reminder Ressource Limits for application pods see [Grafana](https://grafana.int.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now)
- FYI: PostgreSQL update available you should have version 15.x.x and regards to [TRG 5.07](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-07) needs an update
- Mermaid and PUML reusable workflow was generated, open for discussion see [GitHub discussion](https://github.com/eclipse-tractusx/sig-infra/discussions/19)

#### Update Stable Environment

- Demo Deployment on Stable Environment
- Stable Environment CleanUp all former projects were removed
- [Helm Chart Repo](https://eclipse-tractusx.github.io/charts/dev) changed for Stable Environment
- App deployment on STABLE is only possible using the released Helm Charts from our Helm repository.

### Security

- CVE Version information updated, see [Veracode](https://analysiscenter.veracode.com/auth/index.jsp#AnalyticsMyOrgDashboards)
- Proposed Toolchain Security Tools are announced in [Issue](https://github.com/eclipse-tractusx/sig-security/issues/9)

### FOSS

- [Tom Meyer](https://projects.eclipse.org/user/17829) is committer now for Eclipse Tractus-X! Congratulations!
- Release 23.09 was done - Thank you for the great work please Check Out the [Release Notes](https://github.com/eclipse-tractusx/tractus-x-release/blob/main/CHANGELOG.md)
- All Tags in the Changelog should be found in [Eclipse Tractus-X Tags](https://github.com/eclipse-tractusx/tractus-x-release/releases/tag/23.09)
- If TRG´s are not aligned feel free to open PR´s against it. example aligned versions we use for our applications

## Open discussions

- Recommendations for Load Testing Tools were requested (Background: We used Gatling but the gatling-charts-highcharts maven dependency is not open source)
- Usage of the `sig-release` Repo for Release Management of Release 23.12 was discussed and agreed
- Hints for releasing your helm charts and containers were requested and which workflow other products has in place

## Session recording

- You can find the
  recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230915%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4).
