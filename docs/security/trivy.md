---
sidebar_position: 2
---

# Trivy

We <b>can containers</b> with Trivy.

If you have any questions, please contact us <i>dl_CoP_IT_Security@catena-x.net</i>

Add the following GitHub action <i>trivy.yml</i> to your repository workflows.

In order for Trivy to scan the correct GitHub packages, they must be specified in the action.

Integration steps per GitHub package:

1. Copy job <i>analyze-\<REPLACE-ME container name\></i>

2. Replace the name of the job with the name of the GitHub package - <span style="color:green">green box</span>.

3. Replace <i>image-ref</i> with the <span style="color:yellow">yellow box</span> of the GitHub package.

:::info

In order to always scan the latest GitHub package, a tag (<span style="color:red">red box</span>) must be set for the packages and specified in the <i>image-ref</i>.

:::

```yaml
# Depending on the location of your Docker container
# you need to change the path to the specific Docker registry.
#
name: "Trivy"

on:
  push:
    branches: [main]
  # pull_request:
  # The branches below must be a subset of the branches above
  # branches: [ main ]
  # paths-ignore:
  #   - "**/*.md"
  #   - "**/*.txt"
  schedule:
    # Once a day
    - cron: "0 0 * * *"
  workflow_dispatch:
  # Trigger manually

jobs:
  analyze-config:
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Run Trivy vulnerability scanner in repo mode
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: "config"
          # ignore-unfixed: true
          exit-code: "1"
          hide-progress: false
          format: "sarif"
          output: "trivy-results1.sarif"
          severity: "CRITICAL,HIGH"

      - name: Upload Trivy scan results to GitHub Security tab
        uses: github/codeql-action/upload-sarif@v1
        if: always()
        with:
          sarif_file: "trivy-results1.sarif"

  analyze-<REPLACE-ME container name>:
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # It's also possible to scan your private registry with Trivy's built-in image scan.
      # All you have to do is set ENV vars.
      # Docker Hub needs TRIVY_USERNAME and TRIVY_PASSWORD.
      # You don't need to set ENV vars when downloading from a public repository.
      # For public images, no ENV vars must be set.
      - name: Run Trivy vulnerability scanner
        if: always()
        uses: aquasecurity/trivy-action@master
        with:
          # Path to Docker image
          image-ref: "<REPLACE-ME container name>"
          format: "sarif"
          output: "trivy-results2.sarif"
          exit-code: "1"
          severity: "CRITICAL,HIGH"

      - name: Upload Trivy scan results to GitHub Security tab
        if: always()
        uses: github/codeql-action/upload-sarif@v1
        with:
          sarif_file: "trivy-results2.sarif"
```
