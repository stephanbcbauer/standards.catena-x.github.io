"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[647],{4298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(5893),i=n(1151);const a={title:"How to deploy an application on 'Hotel Budapest'"},s=void 0,c={id:"guides/ArgoCD/how-to-deploy-an-application",title:"How to deploy an application on 'Hotel Budapest'",description:'This guide is a small "how-to" about deploying applications with ArgoCD.',source:"@site/docs/guides/ArgoCD/how-to-deploy-an-application.md",sourceDirName:"guides/ArgoCD",slug:"/guides/ArgoCD/how-to-deploy-an-application",permalink:"/docs/guides/ArgoCD/how-to-deploy-an-application",draft:!1,unlisted:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/ArgoCD/how-to-deploy-an-application.md",tags:[],version:"current",frontMatter:{title:"How to deploy an application on 'Hotel Budapest'"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/guides/ArgoCD/ArgoCDbasics"},next:{title:"How To Use Vault Secrets With ArgoCD",permalink:"/docs/guides/ArgoCD/howto-use-vault-secrets-with-argocd"}},r={},l=[{value:"Specify application metadata",id:"specify-application-metadata",level:2},{value:"Specify Git repository URL containing your helm chart",id:"specify-git-repository-url-containing-your-helm-chart",level:2},{value:"Specify destination namespace",id:"specify-destination-namespace",level:2},{value:"Specify helm values for your deployment",id:"specify-helm-values-for-your-deployment",level:2},{value:"Sync your application resources",id:"sync-your-application-resources",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'This guide is a small "how-to" about deploying applications with ArgoCD.\nFollowing prerequisites have to be met:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You need to be member of the ",(0,o.jsx)(t.a,{href:"https://github.com/catenax-ng",children:"catenax-ng GitHub organization"})," and\na ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/catenax-ng/teams",children:"product team"})]}),"\n",(0,o.jsxs)(t.li,{children:["Your application's docker images need to be accessible","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["as public ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/catenax-ng/packages",children:"package on GitHub"})," ..."]}),"\n",(0,o.jsxs)(t.li,{children:["or on ",(0,o.jsx)(t.em,{children:"cxtsiacr.azurecr.io"})," -> not recommended, since no scans can be done on these images"]}),"\n",(0,o.jsxs)(t.li,{children:["or as private ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/catenax-ng/packages",children:"package on GitHub"})," -> ",(0,o.jsx)(t.a,{href:"../how-to-prepare-a-private-repo",children:"How to Access a Private Repo and a Private Package/Image"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["If your GitHub repository is set to private, you first have to process the steps documented\nhere: ",(0,o.jsx)(t.a,{href:"../how-to-prepare-a-private-repo",children:"prepare for private repos"})]}),"\n",(0,o.jsx)(t.li,{children:"An ArgoCD project needs to be created by the DevSecOps team for you."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If these prerequisites are met, you can log in to ArgoCD with your GitHub account\nhere: ",(0,o.jsx)(t.a,{href:"https://argo.int.demo.catena-x.net/applications",children:"https://argo.int.demo.catena-x.net/"})]}),"\n",(0,o.jsx)(t.h2,{id:"specify-application-metadata",children:"Specify application metadata"}),"\n",(0,o.jsxs)(t.p,{children:["After logging in to ArgoCDs UI, you'll see an overview of all already existing Applications. To create a new one, click\nthe\n",(0,o.jsx)(t.em,{children:"NEW APP"})," button on the top left. You'll need to choose an application name, which is used to display the application on\nArgoCD's application overview. Also, you have to select the project that was created for your team, since this will be\nthe\nonly one that your user has privileges for to create applications. The following example shows, how the UI for creating\nan\napplication looks like:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Add application metadata",src:n(5581).Z+"",width:"1398",height:"646"})}),"\n",(0,o.jsxs)(t.p,{children:["Beside application name and project, the attribute ",(0,o.jsx)(t.em,{children:"sync policy"})," is interesting to choose carefully. There are two\noptions\n",(0,o.jsx)(t.em,{children:"Manual"})," and ",(0,o.jsx)(t.em,{children:"Automatic"}),". The ",(0,o.jsx)(t.em,{children:"Manual"})," sync policy means, that you are in full control of when kubernetes resources you\ndefined\nin your GitHub repository are being created. ",(0,o.jsx)(t.em,{children:"Automatic"})," on the other hand tells ArgoCD to watch your Git repository.\nOn a regular basis, it checks for changes in the git history and will auto-apply the resources if there are any."]}),"\n",(0,o.jsx)(t.h2,{id:"specify-git-repository-url-containing-your-helm-chart",children:"Specify Git repository URL containing your helm chart"}),"\n",(0,o.jsxs)(t.p,{children:["Scrolling to the next section of the ",(0,o.jsx)(t.em,{children:"NEW APP"})," dialog, you'll find the source attributes. This is where you define the\nURL to your Git repository and also the revision. The revision is usually set to ",(0,o.jsx)(t.em,{children:"HEAD"}),", since you want to deploy the\nlatest\nversion of your application. You could also choose a specific branch or even a specific tag, when you change the\ndropdown at the end of the revision row from ",(0,o.jsx)(t.em,{children:"Branches"})," to ",(0,o.jsx)(t.em,{children:"Tags"}),". This option can be useful for integration\nenvironments,\nwhere you want to provide other teams with specific stable versions of your app."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"HINT:"})," If you are using private repositories and cannot set it to public, get in contact with the DevSecOps team,\nand we will\nconfigure repository access for ArgoCD"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Specify application source",src:n(3911).Z+"",width:"1511",height:"421"})}),"\n",(0,o.jsx)(t.p,{children:"We highly encourage you, to specify your application deployments as a helm chart. Thereby the repository and path\ncombination\nshould point to the location of your helm chart.\nArgoCD also supports you by scanning the repository once you entered the repository URL and auto-suggests a path with\nvalid deployment specifications."}),"\n",(0,o.jsx)(t.h2,{id:"specify-destination-namespace",children:"Specify destination namespace"}),"\n",(0,o.jsxs)(t.p,{children:["The next section of settings is about the destination. The destination is the kubernetes cluster and namespace, that\nArgoCD\nshould deploy your application to. On Hotel Budapest you are only allowed to deploy applications to the cluster, ArgoCD\nis running on.\nTo specify that cluster, choose ",(0,o.jsx)(t.code,{children:"https://kubernetes.default.svc"})," as the cluster URL."]}),"\n",(0,o.jsxs)(t.p,{children:["As namespace, you need to specify one, that is assigned to your project that you selected previously in the application\nmetadata.\nEach product team usually has one project assigned and each project is allowed to use one namespace. The name of the\nnamespace\nis usually ",(0,o.jsx)(t.code,{children:"product-<team-name>"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"If you are unsure, what your assigned namespace is, you can either ask the DevSecOps team, or look at ArgoCDs Setting>\nProjects\npage. There you will find your project and the associated namespaces."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Specify destination namespace",src:n(5590).Z+"",width:"1135",height:"301"})}),"\n",(0,o.jsx)(t.h2,{id:"specify-helm-values-for-your-deployment",children:"Specify helm values for your deployment"}),"\n",(0,o.jsx)(t.p,{children:"The last section, when creating an application contains deployment specific settings. If you pointed ArgoCD to a\ndirectory\ncontaining a helm chart (as we encourage you to), you will be able to specify the values.yaml file to use,\nor even in-place values, like in the following screenshot."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Specify helm values",src:n(9488).Z+"",width:"1137",height:"265"})}),"\n",(0,o.jsxs)(t.p,{children:["Typically, you would want a specific values.yaml file named like ",(0,o.jsx)(t.code,{children:"values-<env-name>.yaml"})," that overwrites just the\nenvironment specifics and select both, the ",(0,o.jsx)(t.code,{children:"values.yaml"})," and the ",(0,o.jsx)(t.code,{children:"values-<env-name>.yaml"})," files as values files\nin ArgoCD."]}),"\n",(0,o.jsxs)(t.p,{children:["If you specified all the settings, you can create the application, by clicking the ",(0,o.jsx)(t.em,{children:"Create"})," button on the top of the new\napp dialog."]}),"\n",(0,o.jsx)(t.h2,{id:"sync-your-application-resources",children:"Sync your application resources"}),"\n",(0,o.jsx)(t.p,{children:"After app creation, you'll find your application with a yellow bar and the status 'OutOfSync' on ArgoCDs application\noverview."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Unsynced app",src:n(5079).Z+"",width:"377",height:"302"})}),"\n",(0,o.jsx)(t.p,{children:"By clicking the 'Sync' button, you can tell ArgoCD to create all the kubernetes resources defined in your GitHub\nrepository.\nThis process can take a while. If successful, you'll see the application turning from yellow and OutOfSync to\ngreen and Synced. You can also click on the application to open the details page.\nThis will show you a graph of all the resource created."}),"\n",(0,o.jsx)(t.p,{children:"Clicking on one of the nodes will provide you with resource type specific features like for example logs for pods."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5590:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new_application_destination-c5ce01ef895c8caf8e7961604afc9600.png"},9488:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new_application_helm_values-096e4e20566116bebb2492bf92330b63.png"},5581:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new_application_metadata-e7633095ef63c5ca62e2545d2f9ca450.png"},3911:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new_application_source-cd243c68c104629b6a32ab7fb75ac644.png"},5079:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new_application_unsynced_app-7a23f70acaf0ef481d7fd27a3d6c6fd3.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);