"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[631],{821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(5893),r=n(1151);const o={slug:"Post Mortem 2022-08-29",title:"Post Mortem 2022-08-29",authors:"DevSecOps",tags:["news","post-mortem"]},a=void 0,i={permalink:"/blog/Post Mortem 2022-08-29",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/PostMortem-2022-08-29.md",source:"@site/blog/PostMortem-2022-08-29.md",title:"Post Mortem 2022-08-29",description:"DEV Environment Inaccessible",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"post-mortem",permalink:"/blog/tags/post-mortem"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Post Mortem 2022-08-29",title:"Post Mortem 2022-08-29",authors:"DevSecOps",tags:["news","post-mortem"]},unlisted:!1,prevItem:{title:"Post Mortem 2022-08-30",permalink:"/blog/Post Mortem 2022-08-30"},nextItem:{title:"Office Hours 2022-8-26",permalink:"/blog/Office Hours 2022-8-26"}},l={authorsImageUrls:[void 0]},c=[{value:"DEV Environment Inaccessible",id:"dev-environment-inaccessible",level:2},{value:"Date",id:"date",level:3},{value:"Authors",id:"authors",level:3},{value:"Status",id:"status",level:3},{value:"Summary",id:"summary",level:3},{value:"Impact",id:"impact",level:3},{value:"Root Causes",id:"root-causes",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Action Items",id:"action-items",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"dev-environment-inaccessible",children:"DEV Environment Inaccessible"}),"\n",(0,s.jsx)(t.h3,{id:"date",children:"Date"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Start"}),(0,s.jsx)(t.th,{children:"End"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"August 29th 2022, 8:10 CEST"}),(0,s.jsx)(t.td,{children:"29.08.2022, 14:15 CEST"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"authors",children:"Authors"}),"\n",(0,s.jsx)(t.p,{children:"Carsten Lenz, Mercedes-Benz Tech Innovation GmbH"}),"\n",(0,s.jsx)(t.h3,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"Solved"}),"\n",(0,s.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"Due to maintenance work the kubernetes ingress controller stopped working. As a result DEV environment seemed to be\ndown."}),"\n",(0,s.jsx)(t.h3,{id:"impact",children:"Impact"}),"\n",(0,s.jsxs)(t.p,{children:["All product teams as well as system team where unable to access the Catena-X\nDEV ",(0,s.jsx)(t.a,{href:"https://argo.dev.demo.catena-x.net",children:"ArgoCD instance"})]}),"\n",(0,s.jsx)(t.h3,{id:"root-causes",children:"Root Causes"}),"\n",(0,s.jsx)(t.p,{children:"Upgrading Azure AKS Kubernetes Cluster to 1.24 introduced a breaking change regarding ingress controller configuration.\nDue to broken Ingress DEV environment was inaccessible."}),"\n",(0,s.jsx)(t.p,{children:"Microsoft has changed protocol for health probing from TCP to HTTP/HTTPS which blocked all HTTP/S traffic as health\nprobing had higher priority over ordinary traffic reaching the cluster."}),"\n",(0,s.jsx)(t.p,{children:"In the end the outage was caused by a missing AKS related annotation for ingress controller, which Microsoft only added\nto the AKS documentation after there were many issues reported to AKS. At time of DEV outage the MS documentation was\nlacking this information."}),"\n",(0,s.jsx)(t.h3,{id:"resolution",children:"Resolution"}),"\n",(0,s.jsx)(t.p,{children:"Adding missing annotation to ingress controller:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'ingress-nginx:\n  controller:\n    service:\n      annotations:\n        service.beta.kubernetes.io/azure-load-balancer-health-probe-request-path: "/healthz"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"action-items",children:"Action Items"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Adherence to internal policies (-> system team)"}),"\n",(0,s.jsx)(t.li,{children:"Implement better testing upfront of maintenance tasks"}),"\n",(0,s.jsx)(t.li,{children:"Do not upgrade to latest available AKS version"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"No careless execution of maintenance work"}),"\n",(0,s.jsx)(t.li,{children:"Better maintenance planning upfront"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(7294);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);