---
slug: Office Hours 2023-07-07
title: Office Hours 2023-07-07
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- first [reusable workflows](https://github.com/eclipse-tractusx/sig-infra) are available (for the time being only for TRG quality checks)
  add revision "@main" to use always the latest version automatically
- Reminder to set [proper](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-04/) CPU limits on the clusters (especially DEV). See the [CPU Quota Panel](https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now&viewPanel=8) which is part of this general [dashboard](https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now) as reference
  unit for CPU fragments are the so called millicores, which means 1000m = 1 full CPU

### Security

- Veracode checks are mostly green currently - congratulations to the teams
- creating new applications via GitHub Actions is no longer supported. Please contact Security team, if you need a new application
- please delete old/orphaned applications in veracode to keep the overview manageable

### FOSS

- Tractus-X Release 3.1 successful, with minor remarks only
  - unfortunately some DEPENDENCIES files were not completely up-to-date - please automate/take care of it more careful
- There are still some uninitialized repositories in Tractus-X. Please make sure to add at least the mandatory legal documentation
- [TRG 7.07](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-07) will be improved soon to clarify if which parts of documentation have to use either CC-BY-4.0 or Apache-2.0 license
- Registration for [EclipseCon 2023](https://www.eclipsecon.org/2023/registration) is now open.

## Open discussions

- Backup solution: currently there is no solution; Mathias will try the suggested solution using a init container for pgdump
- Distributed Tracing: System team is going to evaluate [Grafana Tempo](https://grafana.com/oss/tempo/)
- Access to Maven packages on GitHub: Don't use your PAT in GitHub workflows.
  - consider using the EF's [Sonatype Nexus](https://repo.eclipse.org/) to publish these packages. Please refer to [EDC's worksflow](https://github.com/eclipse-tractusx/tractusx-edc/blob/main/.github/workflows/publish-maven.yaml) how to sign and publish a file there.
  - Do not forget to add the legal information/attributions to all published packages
  - Alternatively it is possible to set up a GitHub App that allows to trigger one workflow from another. (only within an organization)

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/CXDevSecOps%20Office%20Hours-20230707_120342-Meeting%20Recording.mp4?csf=1&web=1&e=AkaDMH).
