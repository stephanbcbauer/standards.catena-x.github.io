---
slug: Office Hours 2023-08-04
title: Office Hours 2023-08-04
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- New support issue template: "Create Tracuts-X repo"
  - Self-service offered by EF available in [.eclipsefdn repo](https://github.com/eclipse-tractusx/.eclipsefdn)
  - System team can take over the necessary PRs for you
- Sneak Peek: We are building a product focussed release guidelines check dashboard
  - Groups repositories to products based on `.tractusx` metadata file
  - Planned to run regularly (maybe weekly + on demand) and hosted as GitHub pages
  - Already seeing some missing or mis-configured metadata files. Keep an eye on your issues, as we will report it that way
- Loki not available on DEV and INT
  - Ran out of disk space
  - We are working on it, but are currently short on capacity. Hope to resolve it soon

### Security

- Expired Veracode token renewed
  - Renewal only happened in Tractus-X
  - Veracode support won't continue for -ng repos -> Tractus-X is leading
  - Tractus-X workflows should work as before again
- Reminder: Please check your Veracode vulnerability reports and fix findings
  - Currently, multiple affected repos
  - Findings on 3rd party libs can occur, even if you did not change your code

### FOSS

- No presence.

## Open discussions

- Current state of API versioning
  - Open alignment meeting indicated, that some teams are working on it
  - Discussion in the meeting on different approaches
  - Collaboration on that topic appreciated. Potential sync via mailing list / GitHub discussions / following Office Hours
- Clarification regarding QG4 process
  - System team will walk through all products mentioned by Releaase Management as "to be released"
  - We are using an issue template that references all of our release Guidelines
  - If there are findings to a specific guideline, a dedicated issue will be opened on the affected repo
  - After all the checks passed, it is made sure, that the proper git tag and GitHub release is or has been created

## Session recording

- tbd
