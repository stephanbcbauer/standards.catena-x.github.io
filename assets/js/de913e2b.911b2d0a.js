"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[9395],{240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(5893),i=t(1151);const l={title:"How to be part of the Release Umbrella Helm Chart","/slug":"how-to-be-part-of-release-umbrella-helm"},r=void 0,o={id:"guides/Helm/how-to-be-part-of-release-umbrella-helm",title:"How to be part of the Release Umbrella Helm Chart",description:"This guide describes how a product team can be part of the Release Umbrella Helm chart via pull request in",source:"@site/docs/guides/Helm/how-to-be-part-of-release-umbrella-helm.md",sourceDirName:"guides/Helm",slug:"/guides/Helm/how-to-be-part-of-release-umbrella-helm",permalink:"/docs/guides/Helm/how-to-be-part-of-release-umbrella-helm",draft:!1,unlisted:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/Helm/how-to-be-part-of-release-umbrella-helm.md",tags:[],version:"current",frontMatter:{title:"How to be part of the Release Umbrella Helm Chart","/slug":"how-to-be-part-of-release-umbrella-helm"},sidebar:"tutorialSidebar",previous:{title:"Helm Chart",permalink:"/docs/guides/Helm/helmchart"},next:{title:"How To Define Helm Chart Dependencies",permalink:"/docs/guides/Helm/how-to-helm-dependency"}},s={},c=[{value:"General information",id:"general-information",level:2},{value:"How to include product in the umbrella chart",id:"how-to-include-product-in-the-umbrella-chart",level:2},{value:"Add application as a dependency",id:"add-application-as-a-dependency",level:2},{value:"Update application chart version",id:"update-application-chart-version",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This guide describes how a product team can be part of the Release Umbrella Helm chart via pull request in\nthe ",(0,a.jsx)(n.a,{href:"https://github.com/catenax-ng/catena-x-release",children:"catena-x-release"})," repository. It also explains how an already added\nsubchart version can be upgraded."]}),"\n",(0,a.jsx)(n.h2,{id:"general-information",children:"General information"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["There is a ",(0,a.jsx)(n.a,{href:"https://github.com/catenax-ng/catena-x-release",children:"Github repository"})," that is containing a single umbrella\nHelm chart."]}),"\n",(0,a.jsx)(n.li,{children:"The repository is responsible for collecting the Helm charts of each product team that are part of the release as a\ndependency."}),"\n",(0,a.jsxs)(n.li,{children:["This way the deployment of the whole stack can be done with a single ",(0,a.jsx)(n.code,{children:"helm install"})," command or a single ArgoCD\napplication."]}),"\n",(0,a.jsxs)(n.li,{children:["One unified ",(0,a.jsx)(n.em,{children:"values.yaml"})," contains the whole configuration of the software stack"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-include-product-in-the-umbrella-chart",children:"How to include product in the umbrella chart"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["For a team to be able to be part of the umbrella Helm chart, they already need to have their product published to a Helm\nchart. It can be done for example with the ",(0,a.jsx)(n.a,{href:"/docs/guides/Helm/how-to-release-a-helm-chart",children:"helm-chart-releaser Github Action"})," that\nturnes the repository into a public Helm chart."]})}),"\n",(0,a.jsx)(n.p,{children:"If a product team wants to include their application within the umbrella Helm chart, they can do it by as the following:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Clone ",(0,a.jsx)(n.a,{href:"https://github.com/catenax-ng/catena-x-release",children:"catena-x-release"})," repository"]}),"\n",(0,a.jsx)(n.li,{children:"Create new branch from main"}),"\n",(0,a.jsxs)(n.li,{children:["Edit the ",(0,a.jsx)(n.em,{children:"Chart.yaml"})," file, add the application's Helm chart as a\ndependency ",(0,a.jsx)(n.a,{href:"#add-application-as-a-dependency",children:"based on this guide"})]}),"\n",(0,a.jsx)(n.li,{children:"Add a condition, so it's deployment can be optional"}),"\n",(0,a.jsx)(n.li,{children:"Commit & push changes"}),"\n",(0,a.jsx)(n.li,{children:"Open pull request"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After these steps are completed, the System Team will review the request. If every check passes, the changes will be\nmerged back to the main branch and the Umbrella Helm chart will be rebuilt (now including the new application)."}),"\n",(0,a.jsx)(n.h2,{id:"add-application-as-a-dependency",children:"Add application as a dependency"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"It is important to introduce a condition to the dependency, so it can be turned off optionally."})}),"\n",(0,a.jsxs)(n.p,{children:["Here is a look at the ",(0,a.jsx)(n.em,{children:"Chart.yaml"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v2\nname: cxcore\ndescription: A Helm containing all core components of the Catena-X Automotive network\n\ntype: application\n\nversion: 0.1.1\n\nappVersion: "release-2.0"\n\ndependencies:\n  - name: product-1\n    version: 1.4.1\n    condition: product-1.enabled\n    repository: https://catenax-ng.github.io/product-repo-1/\n  - name: product-2\n    version: 1.0.0\n    condition: product-2.enabled\n    repository: https://catenax-ng.github.io/product-2/\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"If a team edits this file, they need to add a new block inside dependencies:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"  - name: product-3\n    version: 1.0.5\n    condition: product-3.enabled\n    repository: https://catenax-ng.github.io/product-3/\n\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"How to set values:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"name"}),":",(0,a.jsx)(n.br,{}),"\n","The name of the chart"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"version"}),":",(0,a.jsx)(n.br,{}),"\n","The chart version of the application, that can be found in the ",(0,a.jsx)(n.em,{children:"Chart.yaml"})," file's version variable in the\napplication's Helm chart"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"condition"}),":",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"product-name.enabled"})," \u2192 This is required, so the application deployment can be skipped optionally when the umbrella\nchart is deployed"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"repository"}),":",(0,a.jsx)(n.br,{}),"\n","The url, where the ",(0,a.jsx)(n.em,{children:"index.yaml"})," of the Helm chart can be found."]}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"update-application-chart-version",children:"Update application chart version"}),"\n",(0,a.jsx)(n.p,{children:"If a product team has released a new chart version in their repository, the change should be reflected in the umbrella\nHelm chart as well. To do so, the process is the following:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"New chart version is released in the product's repository"}),"\n",(0,a.jsxs)(n.li,{children:["Clone ",(0,a.jsx)(n.a,{href:"https://github.com/catenax-ng/catena-x-release",children:"catena-x-release"})," repository"]}),"\n",(0,a.jsx)(n.li,{children:"Create new branch from main"}),"\n",(0,a.jsxs)(n.li,{children:["Edit the ",(0,a.jsx)(n.em,{children:"Chart.yaml"})," file, change the version of the application dependency to the released chart version"]}),"\n",(0,a.jsx)(n.li,{children:"Commit & push changes"}),"\n",(0,a.jsx)(n.li,{children:"Open pull request"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After these steps are completed, the System Team will review the request. If every check passes, the changes will be\nmerged back to the main branch and the Umbrella Helm chart will be rebuilt (now including the new chart version of the\napplication)."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(7294);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);