---
slug: Office Hours 2023-05-12
title: Office Hours 2023-05-12
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- Our Support process is moving to [GitHub issues](https://github.com/eclipse-tractusx/sig-infra/issues/new/choose)
- Example for fixing bugs, after baseline for release is set (after e2e tests)
  - DAPS registration service 2.0.2 has been cleared in e2e tests
  - new bugfix release after e2e tests [v2.0.7](https://github.com/eclipse-tractusx/daps-registration-service/releases/tag/v2.0.7) with QG fixes created
  - v2.0.2 will be added to the [overarching release notes](https://github.com/eclipse-tractusx/tractus-x-release/blob/main/CHANGELOG.md)

### Security

- Still budget left for external penetration tests
- Idea: maybe use it to test a whole network setup instead of standalone apps

### FOSS

- Reminder and shoutout to become an official Eclipse Tractus-X contributor
  - Every committer can grant you this role
  - Will grant triage permissions on GitHub
  - What you can do with it: ask for review (assign), approve reviews or request changes, edit labels on issues
- Reminder: Try to avoid 2 EF accounts. If you created a second one by accident, contact EMO to delete the unnecessary one
  - Reminder: open PRs frequently and early to avoid IP issue pileup at the EF. Especially shortly before our Release. This could risk our release

## Open discussions

- Shoutout to [nektos/act](https://github.com/nektos/act) -> Test your GitHub actions locally. Avoids push + test; push + test ping-pong
- Discussed GitHub Notification configuration -> Auto-watch setting could be a good candidate to disable.

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared+Documents%2FCX-CoP+DevSecOps%2FOffice_Hours_Regular_Recordings%2F20230512_DevSecOps+Business+Hours-Recording.mp4&referrer=Teams.TEAMS-WEB&referrerScenario=teamsSdk-openFilePreview&referrer=Teams.TEAMS-WEB&referrerScenario=p2p_ns-bim&web=1).
