---
slug: Office Hours 2023-05-05
title: Office Hours 2023-05-05
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- New shared repo [eclipse-tractusx/e2e-testing](https://github.com/eclipse-tractusx/e2e-testing). To sync efforts for test automation
- Reminders:
  - Check out the [TRG proposals] on 4.x TRGs regarding container images and provide feedback
  - Q&A session prior to PI planning next Wednesday -> Happy to discuss topics there
  - Check out Architects Day recordings in case you missed the live call [here](https://confluence.catena-x.net/pages/viewpage.action?spaceKey=PL&title=6th+Architects%27+Day+04.05.2023)

### Security

- Penetration tests are proceeding with small finding
- Contact the security team if there is code that wasn't tested
- Check Veracode and GitGuardian regularly for vulnerabilities

### FOSS

- Eclipse chat also offers a [room for License compliance](https://chat.eclipse.org/#/room/#eclipsefdn.ip-license-compliance:matrix.eclipse.org)
- Some orphaned repos without legal docs where found -> already clarified in the session, that they will be deleted
- [EclipseCon 2023](https://www.eclipsecon.org/2023) happening in October. Talks from Catena-X/Tractus-X community appreciated.
  - Also, there is a dedicated automotive day planned -> Get in contact with Björn or Evelyn, if you want to present a technical deep dive
- TRGs 7.x are going live next week prior to PI planning

## Open discussions

- Is it possible to create custom Grafana dashboards on our envs
  - YES, please get in contact with the System Team (either CoP or Sigi (PO) directly)
  - Potential workflow, Team get's admin permissions; creates Dashboard; exports; PR to include in our IaC setup
- Are Security/Legal/TRG requirements also applicable for sample code
  - Depends on the form (repo vs. snippet vs. running app)
  - In case of doubt -> get in contact with us
- Workflow for 3rd party library checks on PR
  - If PR contains DEPENDENCIES, that are restricted and do not have IP issue number assigned, ask a committer to create the IP issues for you
  - IP issues are linked in PR comment, so the product team can track them (look out for 'Help wanted' labels)
  - After issues are closed and all deps approved -> re-run dash to update DEPENDENCIES
  - PR can be merged
  - Edge case: IP ticket takes long time to close -> You can merge the PR, if at least the IP issue number is present in the DEPENDENCIES file. __BUT__: you must not create a release with restricted libs

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x01200075F4DD2D705FA349B372CD3378FD1093&sortField=Modified&isAscending=false&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230505%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&viewid=a90239a2%2D4eb1%2D446e%2D9246%2Daedc18ebdc75&parent=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings).
