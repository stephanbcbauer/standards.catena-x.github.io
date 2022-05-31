---
title: How to integrate Veracode to your JIRA project
---

## About the Veracode JIRA plugin

Veracode provides a [plugin](https://docs.veracode.com/r/4ULk2mjyYUeYb8xd_2nDVw/yoWnZ5~NZchnoLXNqtavrQ) for JIRA, which automatically creates a JIRA ticket for security flaws which Veracode identifies in your application.

## How can I start using this plugin?

The JIRA plugin is managed by the [Catena-X Security Team](https://confluence.catena-x.net/display/cxsecurity/Who-is-who+Security). In order to use the plugin you must meet the following requirements:

### Prerequisites

1. You've set up your application in Veracode.
2. You've set up a project in JIRA, where the tickets for the security flaw will be created.

### Remarks

1. Don't change the Veracode plugin settings, this will affect other projects.
2. Only Findings that are breaking the Policy(severity high and very high) will be imported.

### Steps

1. Contact **mohamed.belkhiria@mhp.com** or **christian.winnen@mhp.com** to request the activation of the automatic imports of the Veracode Findings into your Jira project.
2. Provide in the Email the **Project Name** in Jira and **optionally a Team member** for the issues assignment (This team member will be automatically assigned to all the Findings imported from Veracode).
3. The Security Team takes care of the plugin settings. The Findings will be imported at a prescheduled day and hour

## After the Integration

The Findings imports are scheduled daily at 17:30.
If desired, after the integration, test issues could be sent to the Jira project in order to familiarize with the Veracode Findings.

### Finding types

Different Finding types will be imported as different Backlogs

1. **Jira Type “Bug”**:
A ticket of type “bug” is created for each flaw found in a Scan. Contains CWE ID as label.

2. **Jira Type “Story”**: A ticket of type “story” is created for each Software component with vulnerabilities (High or Critical)  from the SCA.

3. **Jira Type “Subtask”**: A subtask is created for each CVE of a Software component. It is created under the story of the respective component which contains this CVE. The CVE and/or CWE number is set as a label.
