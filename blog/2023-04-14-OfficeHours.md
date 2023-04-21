---
slug: Office Hours 2023-04-14
title: Office Hours 2023-04-14
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- no update

### Security

- no update

### FOSS

- Overview of upcoming FOSS TRGs:
  - TRG 7.07 Legal information for cryptography
  - TRG 7.08 Recurring activities (like updating licence headers to the current year)
- Reminder of TRG 7.02 [License and Copyright header](https://eclipse-tractusx.github.io/docs/release/trg-0/trg-7-02) as there were multiple PRs with incomplete licence information
  - Use proper templating for licence headers to prevent this in future
  - Ensure a proper SPDX licence identifier to enable automatic scanning
  - if there are multiple contributors do not squash the commits to preserve the git history
  - proposal for a licence header checker as github action
    - or even a general checker (action) to include features like automatic dependency file check (courtesy of IRS team)
    - input/contributions from all product teams are welcome

## Open discussions

- Helm upgrade (without vault) will generate secrets even if they exist already, e.g. db passwords. - Evelyn Gurschler is preparing a fix and will announce it in the CoP Channel
- (digital twin) registry is now publicly available as in Tractus-X as [sldt-digital-twin-registry](https://github.com/eclipse-tractusx/sldt-digital-twin-registry)
- deprecated [provider-backend-service](https://github.com/catenax-ng/catenax-at-home/pkgs/container/catenax-at-home%2Fprovider-backend-service) is still used by multiple teams. - Max Wesener will contact EDC team and give an update next office hours
- Current security issue in Springboot. All teams should upgrade to v3.0.5
- Network policies are available and can be used. Siegfried Kiermeyer offered help to review them
- the Veracode secret in Tractus-X has been duplicated with the "ORG_" prefix to align it with Catena-X NG
- There are no Veracode/Sonarcloud checks for external forks (workflow has no access to the organization secrets here)
  - workflows should exclude these runs to avoid failed runs or switch in these cases to FOSS tools like Trivy
  - Security team will discuss this in their next meeting
- A new section for small code snippets will be added to the homepage

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230407_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=axvUmG).
