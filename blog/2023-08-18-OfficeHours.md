---
slug: Office Hours 2023-09-18
title: Office Hours 2023-09-18
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

### QG 4 checks ongoing

- Be extra aware of the new TRGs, like legal docs for distribution for example
- KIT reviews -> uncertainties regarding association vs Tractus-X  -> We will define better guidance for next release

### Security

- Updated [SECURITY.md](https://github.com/eclipse-tractusx/.github/blob/main/SECURITY.md) file
- Please update your Security.md file in your repositories accordingly

### FOSS

#### Legal Info for distribution

- Put your distribution in a dedicated folder inside the image, that is not
- COPY the License file to that dedicated folder
- ALSO include the License to your distribution if possible (like META-INF for .jar files)

#### Clarification: Legal notice for /docs

- Every .md file under /docs directory (+ INSTALL.md) should contain the Notice section as stated in [TRG 7.01](https://eclipse-tractusx.github.io/docs/release/trg-7/trg-7-01#notice-file)

#### HashiCorp switches to BSL

- NOT A OSS LICENSE see [here](https://spdx.org/licenses/BUSL-1.1.html)
- Until further notice, no upgrades of HashiCorp tools to versions under [BSL](https://www.hashicorp.com/license-faq#products-covered-by-bsl)
- Tractus-X [discussion](https://github.com/eclipse-tractusx/sig-infra/discussions/233)

## Open discussions

- Different Results between Dash Maven vs. Dash Java
- Discussion on KIT Licenses (Apache 2.0 vs. CC-BY)
- Goal for Eclipse Tractus-X Community Days

## Session recording

- was broken this time, you can find the transkription [here](https://bcgcatenax.sharepoint.com/:w:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230818_DevSecOps%20Business%20Hours-Transkript.docx?d=w7cd30dd438694b3a8371bd9589606ce0&csf=1&web=1&e=Wzkj1s).
