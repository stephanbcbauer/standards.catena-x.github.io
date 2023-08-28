---
slug: Office Hours 2023-08-25
title: Office Hours 2023-08-25
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- ArgoCD update 2.6 → 2.7 in preparation. If your interested in what's
  new: [https://www.youtube.com/watch?v=00KxYdJKrSo](https://www.youtube.com/watch?v=00KxYdJKrSo)
- Repetition and pointing to
  - [Release Guideline Checks Dashboard](https://eclipse-tractusx.github.io/sig-release/)
  - [TRG 5.11 - Upgradeability](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-11) (Prerelease state)
  - Contribute to [e2e Helm Chart](https://github.com/eclipse-tractusx/e2e-testing)

### Security

- License for Invicty. Please contact Security Team (Lokesh Gujre or Piotr Stys) in case of new apps needs to be
  scanned.

### FOSS

During the QG Checks a couple of things poped up:

- Commit messages/PR Description  
  Please do not reference closed systems like Catena-X Consortia Jira Tickets. The content is no public accessible but
  only for consortia members. Please be descriptive in your Commit messages and Pull Request descriptions.
- Do not invent new legal documentation (e.g. `COPYRIGHT.md`), please
  follow [TRG 7.01 - Legal Documentation](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-01)
- Documentation and licensing  
  Be careful with licensing your documentation (e.g. content of `/docs` folder in product repositories). There is no
  requirement to change the licensing of documentation to e.g. Creative Commons, there has been some confusion about in
  the
  past. [TRG 7-06 - Legal notice for end user content](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-06/)
  contains an example how to add a notice section.
- HasiCorp moved from Mozilla Public License v2.0 (MPL 2.0) to the Business Source License (BSL, or BUSL) v1.1 for
  future releases of all products and several libraries. Please
  use [this GH Discussion](https://github.com/eclipse-tractusx/sig-infra/discussions/233) to give feedback if your
  product has dependencies to HashiCorp products or not.

## Open discussions

- Test automation on environments: Consortia vs Helm test + kind
- Upgradability of Postgresql Helm Charts
- How to get support

## Session recording

- You can find the recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230824_DevSecOps-Office-Hour.mp4?csf=1&web=1&e=eFWQxO).
