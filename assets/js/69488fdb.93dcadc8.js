"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[9467],{7888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(5893),t=s(1151);const i={slug:"Office Hours 2023-07-14",title:"Office Hours 2023-07-14",authors:"DevSecOps",tags:["news","officehour"]},o=void 0,a={permalink:"/blog/Office Hours 2023-07-14",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-07-14-OfficeHours.md",source:"@site/blog/2023-07-14-OfficeHours.md",title:"Office Hours 2023-07-14",description:"General updates / information",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.15,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-07-14",title:"Office Hours 2023-07-14",authors:"DevSecOps",tags:["news","officehour"]},unlisted:!1,prevItem:{title:"Office Hours 2023-07-21",permalink:"/blog/Office Hours 2023-07-21"},nextItem:{title:"Office Hours 2023-07-07",permalink:"/blog/Office Hours 2023-07-07"}},c={authorsImageUrls:[void 0]},l=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Test-Managment",id:"test-managment",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"general-updates--information",children:"General updates / information"}),"\n",(0,r.jsx)(n.h3,{id:"devsecops",children:"DevSecOps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keep in mind, that resources at Eclipse Foundation (IP-Team), System-Team and Security-Team will have only limited resources available during holiday season (August 2023)."}),"\n",(0,r.jsxs)(n.li,{children:["Gentle reminder to set ",(0,r.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-04/",children:"proper lower"})," CPU pod ressource requests / limits on dev cluster (no improvements since the last office hour) and same problems occurs on Beta cluster now as well.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See the ",(0,r.jsx)(n.a,{href:"https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now&viewPanel=8",children:"CPU Quota Panel"})," which is part of this general ",(0,r.jsx)(n.a,{href:"https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now",children:"dashboard"})," as reference\nunit for CPU fragments are the so called millicores, which means 1000m = 1 full CPU"]}),"\n",(0,r.jsxs)(n.li,{children:["Hint: ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits",children:"K8s documentation"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Friendly Reminder: Please look at VeraCode"}),"\n",(0,r.jsx)(n.li,{children:"Security assessments ongoing"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Announcement"})," VeraCode presentation session is planned for the Friday 21.7.2023"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"foss",children:"FOSS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Presentation from ",(0,r.jsx)(n.a,{href:"https://github.com/paullatzelsperger",children:"Paul"}),' "How to use a reusable ',(0,r.jsx)(n.a,{href:"https://github.com/eclipse-edc/.github/blob/main/.github/workflows/dependency-check.yml",children:"Workflow"}),' for gradle Dash Licence Check"']}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"jobs:\n check:\n  uses: eclipse-edc/.github/.github/workflows/dependency-check.yml@main\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Reminder from ",(0,r.jsx)(n.a,{href:"https://github.com/evegufy",children:"Evelyn"}),'  "How to use a reusable ',(0,r.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sig-infra/blob/main/.github/workflows/reusable-dependencies-dotnet.yaml",children:"Workflow"}),' for dotnet / yarn Dash Licence Check"']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"test-managment",children:"Test-Managment"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Info from Test Management Feature Freeze on INT Environment 24.07.23 - 16.8.23","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contact: Rainer Herger, Peter Volk, Bernd Rothbrust"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"open-discussions",children:"Open discussions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Feedback and Live Demo to VeraCode ",(0,r.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sig-infra/issues/165",children:"issue"})]}),"\n",(0,r.jsxs)(n.li,{children:["Contact person for ArgoCD / INT Environment shared to the ",(0,r.jsx)(n.a,{href:"https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380",children:"CoP DevSecOps MS Teams channel"})]}),"\n",(0,r.jsxs)(n.li,{children:["Feedback to ",(0,r.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-09/",children:"TRG 5.09"})," about Helm Testing"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"session-recording",children:"Session recording"}),"\n",(0,r.jsxs)(n.p,{children:["You can find the\nrecording ",(0,r.jsx)(n.a,{href:"https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230714_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=yuBcCw",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);