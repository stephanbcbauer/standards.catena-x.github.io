"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[2730],{7622:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=i(5893),t=i(1151);const r={slug:"Office Hours 2023-04-14",title:"Office Hours 2023-04-14",authors:"DevSecOps",tags:["news","officehour"]},l=void 0,c={permalink:"/blog/Office Hours 2023-04-14",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-04-14-OfficeHours.md",source:"@site/blog/2023-04-14-OfficeHours.md",title:"Office Hours 2023-04-14",description:"General updates / information",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.62,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-04-14",title:"Office Hours 2023-04-14",authors:"DevSecOps",tags:["news","officehour"]},unlisted:!1,prevItem:{title:"Office Hours 2023-04-21",permalink:"/blog/Office Hours 2023-04-21"},nextItem:{title:"Office Hours 2023-03-31",permalink:"/blog/Office Hours 2023-03-31"}},o={authorsImageUrls:[void 0]},a=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"general-updates--information",children:"General updates / information"}),"\n",(0,s.jsx)(n.h3,{id:"devsecops",children:"DevSecOps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"no update"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"no update"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"foss",children:"FOSS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Overview of upcoming FOSS TRGs:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TRG 7.07 Legal information for cryptography"}),"\n",(0,s.jsx)(n.li,{children:"TRG 7.08 Recurring activities (like updating licence headers to the current year)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Reminder of TRG 7.02 ",(0,s.jsx)(n.a,{href:"https://eclipse-tractusx.github.io/docs/release/trg-0/trg-7-02",children:"License and Copyright header"})," as there were multiple PRs with incomplete licence information","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use proper templating for licence headers to prevent this in future"}),"\n",(0,s.jsx)(n.li,{children:"Ensure a proper SPDX licence identifier to enable automatic scanning"}),"\n",(0,s.jsx)(n.li,{children:"if there are multiple contributors do not squash the commits to preserve the git history"}),"\n",(0,s.jsxs)(n.li,{children:["proposal for a licence header checker as github action","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"or even a general checker (action) to include features like automatic dependency file check (courtesy of IRS team)"}),"\n",(0,s.jsx)(n.li,{children:"input/contributions from all product teams are welcome"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"open-discussions",children:"Open discussions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Helm upgrade (without vault) will generate secrets even if they exist already, e.g. db passwords. - Evelyn Gurschler is preparing a fix and will announce it in the CoP Channel"}),"\n",(0,s.jsxs)(n.li,{children:["(digital twin) registry is now publicly available in Tractus-X as ",(0,s.jsx)(n.a,{href:"https://github.com/eclipse-tractusx/sldt-digital-twin-registry",children:"sldt-digital-twin-registry"})]}),"\n",(0,s.jsxs)(n.li,{children:["deprecated ",(0,s.jsx)(n.a,{href:"https://github.com/catenax-ng/catenax-at-home/pkgs/container/catenax-at-home%2Fprovider-backend-service",children:"provider-backend-service"})," is still used by multiple teams. - Max Wesener will contact EDC team and give an update next office hours"]}),"\n",(0,s.jsx)(n.li,{children:"Current security issue in Springboot. All teams should upgrade to v3.0.5"}),"\n",(0,s.jsx)(n.li,{children:"Network policies are available and can be used. Siegfried Kiermeyer offered help to review them"}),"\n",(0,s.jsx)(n.li,{children:'the Veracode secret in Tractus-X has been duplicated with the "ORG_" prefix to align it with Catena-X NG'}),"\n",(0,s.jsxs)(n.li,{children:["There are no Veracode/Sonarcloud checks for external forks (workflow has no access to the organization secrets here)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"workflows should exclude these runs to avoid failed runs or switch in these cases to FOSS tools like Trivy"}),"\n",(0,s.jsx)(n.li,{children:"Security team will discuss this in their next meeting"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"A new section for small code snippets will be added to the homepage"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"session-recording",children:"Session recording"}),"\n",(0,s.jsxs)(n.p,{children:["You can find the recording ",(0,s.jsx)(n.a,{href:"https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230407_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=axvUmG",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var s=i(7294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);