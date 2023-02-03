---
slug: Office Hours 2023-02-03
title: Office Hours 2023-02-03
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- Stack Updates:
  - ArgoCD has been updated to v2.4.22
  - ArgoCD Vault Plugin (AVP) has been updated to v1.13.1

    If you experience any issues using the AVP, please get in contact with system team. Most likely the problem is
    related to a missing `vault-secret` in your project related namespace and can be fixed easily.

- Loki is available in our environments.
  There has been a Grafana Dashboard deployed to all environments called _Logging_.
  Grafana can be accessed per Environment using one of these URLs (use _Sign in with GitHub_ for login):
  - [https://grafana.dev.demo.catena-x.net](https://grafana.dev.demo.catena-x.net)
  - [https://grafana.int.demo.catena-x.net](https://grafana.int.demo.catena-x.net)
  - [https://grafana.beta.demo.catena-x.net](https://grafana.beta.demo.catena-x.net)
  - [https://grafana.pre-prod.demo.catena-x.net](https://grafana.pre-prod.demo.catena-x.net)

- Upcoming Release 3:
  - We are involved in QG4 and QG5 and accompany product teams to get their products ready for release 3.
  - Pre-Prod environment has been cleaned up. All products deployed for Release 2/2.1 in October/December 2022 where
    removed from PRE-PROD environment.

### Security

- External PenTest has been started for IRS
- Veracode:
  If you encounter no SCA findings in Veracode, please get in contact
  with [Security Team](https://confluence.catena-x.net/display/cxsecurity/Who-is-Who+Security). Having no SCA findings
  is not expected and should be clarified with Security Team.
- GitGuardian gave a brief overview about its product in a 10-minute presentation.

### FOSS

- General [Eclipse Tractus-X status](https://confluence.catena-x.net/display/CF/Status+Prep+and+Migration+to+Eclipse+Foundation)
update

- Welcome our new committer: Gabor Almádi

## Open discussion

Community discussion about best practices for

- Image tagging and which image should be tagged with latest (latest released image vs. latest build image (
  currently tagged only tagged with _main_). Discussed different approaches, from developer sight and OPs sight.
- Off-boarding Eclipse  
  Is there an off-boarding process if a developer (in this Eclipse Committer) leaves the Catena-X/Eclipse-Tractus-X
  project?
  - In general, Eclipse Tractus-X Project Leads (Daniel Miehle/ Björn Roy) can easily revoke Committer permissions.
  - This shall never happen without knowledge to the Committer.
  - For off-boarding, get in contact with the Committer and one of the project leads to clarify revoking the committer
    rights.
  - It would be also very polite to announce this to our dev mailing list to let the other committers know.
- Is there a default for projects repos structure (having a mono repo vs. split up to several repos (frontend, backend,
  charts, ...))
  - Currently, there is no recommendation, and it's up to the developers how to organize their repo(s).
  - Our TRGs tries to follow for what you have decided. If there is more than one repo, than we expect a so-called
    leading repository, which points out to all repos associated to the product.
  - Anglika: The barrier should be as low as possible to get an idea if there is only one, or more repos.
- How to contribute to [eclipse-tractusx.github.io](https://eclipse-tractusx.github.io)?
  - There are discussion in background about organizing the website.
  - Best approach is to work on a branch, or, if your are not a committer, fork the repo, and contribute to upstream
    providing pull requests.

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230203_DevSecOPs%20Business%20Hours-Recording.mp4?csf=1&web=1&e=IJnVb8).
