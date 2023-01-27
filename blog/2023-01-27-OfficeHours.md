---
slug: Office Hours 2023-01-27
title: Office Hours 2023-01-27
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- Documentation Updates
  - new TRGs has been released: [TRG 2.04 - Leading product repository](https://eclipse-tractusx.github.io/docs/release/trg-2/trg-2-4).
- updated GitHub Checks page
  - failed checks now include a folded menu with detailed information: [GitHub Check page](https://tractusx-gh-org-checks.core.demo.catena-x.net/)
  - more checks will be included soon

### Security

- External pentesting for IRS, EDC and Trace-X is well on it's way: [External Penetration Testing Overview](https://confluence.catena-x.net/display/cxsecurity/External+Penetration+Testing)
- Security Overview for our FOSS Products: [Products Security Overview](https://confluence.catena-x.net/pages/viewpage.action?pageId=55002308)
- GitGuardian colleagues will join the office hour on 03 February

### FOSS

- General [Eclipse Tractus-X status](https://confluence.catena-x.net/display/CF/Status+Prep+and+Migration+to+Eclipse+Foundation) update
- Eclipse Foundation's IP Team has switched from IPzilla to [Gitlab Issues](https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues?search=automotive.tractusx&sort=created_date&state=all)
  - current issues have been migrated
- Update copyright headers of all files to 2023.
  - Hint: ranges in copyright headers are represented by a comma and not by hyphen<br />E.g.: 2020,2023 means from 2020 to 2023.

### Release Management

- Release 3.0
  - [TRG 5.08 - Product Helm Chart](https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-8) is now mandatory for "Release 3.0" products.
    - `helm test` will test deployability only - no business logic
  - Release 3.0 only contains FOSS components, so there will be no End-to-End tests.
  - An application overview of pre-prod can be found on the [application dashboard](https://app.pre-prod.demo.catena-x.net/).

## Open discussion

- Current [Spring Framework Vulnerability](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-1000027)
  - some teams struggle with mitigaton/fixing as it requires a major version upgrade of the framework.
  - If an upgrade is not possible (soon) please get in contact with [security team](https://confluence.catena-x.net/display/cxsecurity/Who-is-Who+Security) to check if your code is affected.
- Whom to contact to get your product release 3.0 ready:
  - [System team](https://confluence.catena-x.net/display/ARTI/The+System+Team) via the [CX - CoP DevSecOps](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380) Teams Channel
  - [Security team](https://confluence.catena-x.net/display/cxsecurity/Who-is-Who+Security)
  - [FOSS team](https://confluence.catena-x.net/pages/viewpage.action?pageId=54986488)

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230127_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=hdiPGJ).
