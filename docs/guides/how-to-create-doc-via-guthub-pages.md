---
title: How To Create Documentation via GitHub Pages
/slug: how-to-create-doc-via-guthub-pages
---

This is a short guide on how to create GitHub Pages and how to get them published. If you want to add some documentation for a Catena-X project/product, please follow the below mentioned steps.

## General information

- The documentation web site (this site itself) is built with [Docusaurus2](https://docusaurus.io/), a modern static website generator.
- To start developing your own pages, you should first install the Docusaurus development server by installing nodejs, for further information please visit following pages:
  - [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - [https://nodejs.org/de/download/](https://nodejs.org/de/download/)
- The Documentation is written as a markdown file.
- We use markdownlint in a pre-commit hook.
  - [How to configure markdown rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
- Contributions are done via pull request.
- Please follow the style we are already using in the existing pages.

## Step by Step Description

Within the Catena-X GitHub organization, the repository "_catenax-ng.github.io_" can be found here:
[https://github.com/catenax-ng/catenax-ng.github.io](https://github.com/catenax-ng/catenax-ng.github.io)

:::caution
If there are any issues with wrong/outdated links, the later deployment via github action will fail. To reduce the feedback loop, build and lint it locally (step 4 and 5) before pushing.
:::

:::tip
Start the  Docusaurus server (step 6) in an own instance of your git bash/command line.
The pages then will automatically be rendered and reloaded in your browser.
:::

1. Create a new branch
2. Pull the repo.
3. Create your pages.
4. Check them by running `npm run build`.
5. Check them by running `npm run lint`.
6. Check them by starting the development server with `npm start`, your default browser then should automatically start with [http://localhost:3000](http://localhost:3000).
7. Add your changes.
8. Commit your changes.
9. Push your changes.
10. Create a pull request.
11. Merge into main branch after a colleague from the DevSecOps team approved.
12. The page(s) will be deployed through github actions and get visible for public.