"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[7561],{337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(5893),i=n(1151);const a={title:"How To Use HashiCorp Vault"},l=void 0,s={id:"guides/how-to-use-vault",title:"How To Use HashiCorp Vault",description:"This guide is a small howto about storing your secrets using HashiCorp Vault. Following prerequisites have to be met:",source:"@site/docs/guides/how-to-use-vault.md",sourceDirName:"guides",slug:"/guides/how-to-use-vault",permalink:"/docs/guides/how-to-use-vault",draft:!1,unlisted:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/how-to-use-vault.md",tags:[],version:"current",frontMatter:{title:"How To Use HashiCorp Vault"},sidebar:"tutorialSidebar",previous:{title:"How to use Two-Factor Authentication (2FA) with GitHub.com",permalink:"/docs/guides/how-to-use-2fa-with-github"},next:{title:"How To Onboard Product-Teams To Any Environment",permalink:"/docs/how-to-onboard-teams-to-any-environment"}},r={},c=[{value:"Login",id:"login",level:2},{value:"Login via OIDC (preferred method)",id:"login-via-oidc-preferred-method",level:3},{value:"Login to web UI via OIDC",id:"login-to-web-ui-via-oidc",level:4},{value:"Login to vault CLI via OIDC",id:"login-to-vault-cli-via-oidc",level:4},{value:"Troubleshooting OIDC login",id:"troubleshooting-oidc-login",level:4},{value:"Login via GitHub PAT",id:"login-via-github-pat",level:3},{value:"Create GitHub Token",id:"create-github-token",level:4},{value:"Login to web UI via GitHub PAT",id:"login-to-web-ui-via-github-pat",level:4},{value:"Login with vault CLI via GitHub PAT",id:"login-with-vault-cli-via-github-pat",level:4},{value:"Login via vault token",id:"login-via-vault-token",level:3},{value:"Create a Vault token",id:"create-a-vault-token",level:4},{value:"Login to web UI via Vault token",id:"login-to-web-ui-via-vault-token",level:4},{value:"Login with vault CLI via Vault token",id:"login-with-vault-cli-via-vault-token",level:4},{value:"Create A Secret",id:"create-a-secret",level:2},{value:"Vault WebUI",id:"vault-webui",level:3},{value:"Vault Cli",id:"vault-cli",level:3},{value:"Read A Secret",id:"read-a-secret",level:2},{value:"Vault WebUI",id:"vault-webui-1",level:3},{value:"Vault CLI",id:"vault-cli-1",level:3},{value:"See Also",id:"see-also",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This guide is a small howto about storing your secrets using HashiCorp Vault. Following prerequisites have to be met:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"your product-team must have been onboarded to Catena-X NG GitHub organization"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For guidance of how to use secret with an ArgoCD application, please refer to\r\n",(0,o.jsx)(t.a,{href:"/docs/guides/ArgoCD/howto-use-vault-secrets-with-argocd",children:(0,o.jsx)(t.em,{children:"How To Use Vault Secrets With ArgoCD"})}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The Catena-X Vault instance URL is: ",(0,o.jsx)(t.a,{href:"https://vault.demo.catena-x.net",children:"https://vault.demo.catena-x.net"})]}),"\n",(0,o.jsx)(t.h2,{id:"login",children:"Login"}),"\n",(0,o.jsx)(t.p,{children:"There are multiple ways to login to Vault. The following sections describe the differences and how to use these methods."}),"\n",(0,o.jsx)(t.h3,{id:"login-via-oidc-preferred-method",children:"Login via OIDC (preferred method)"}),"\n",(0,o.jsx)(t.p,{children:"OIDC is the preferred login method for Vault, since you do not need to create additional credentials for our tooling.\r\nInstead, we configured OIDC to authenticate your user via GitHub login. As advantage over the GitHub token login method,\r\nyou do not need to create a personal access token."}),"\n",(0,o.jsx)(t.h4,{id:"login-to-web-ui-via-oidc",children:"Login to web UI via OIDC"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to edit or view secrets via Vaults ",(0,o.jsx)(t.a,{href:"https://vault.demo.catena-x.net",children:"web UI"}),", you are not logged in yet and\r\nwant to do that via OIDC, you can select the OIDC login method like shown in the following screenshot."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Vault login method OIDC",src:n(5197).Z+"",width:"1330",height:"706"})}),"\n",(0,o.jsx)(t.p,{children:"Unfortunately, Vault does not automatically match your GitHub team to your linked policies. Therefore, you need to\r\nspecify your team name (i.e. 'product-team-example') as 'Role', when logging in."}),"\n",(0,o.jsx)(t.p,{children:"After you hit the 'Sign in' button, a PopUp will appear asking you about access permissions to your GitHub profile\r\ninformation, like you know it from different OIDC logins. Accepting that will log you in and redirect you to the\r\navailable secret engines."}),"\n",(0,o.jsx)(t.h4,{id:"login-to-vault-cli-via-oidc",children:"Login to vault CLI via OIDC"}),"\n",(0,o.jsxs)(t.p,{children:["You can also use OIDC as login method for the ",(0,o.jsx)(t.a,{href:"https://www.vaultproject.io/downloads",children:"Vault CLI"}),". The login then needs a\r\nlocal port on your machine, that it can use for a browser redirect and the role you want to log in as parameters. The\r\nport you need to use is '8250', since it is the only one configured as allowed redirect port. Adapt the following\r\nsnippet to your needs to log in to Vault via CLI with the OIDC method:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'export VAULT_ADDR="https://vault.demo.catena-x.net:443"\r\nvault login -method=oidc port=8250 role=<my-github-team-name>\n'})}),"\n",(0,o.jsx)(t.p,{children:"This will pop up a new browser window, where you need to grant access to your GitHub profile information."}),"\n",(0,o.jsx)(t.h4,{id:"troubleshooting-oidc-login",children:"Troubleshooting OIDC login"}),"\n",(0,o.jsx)(t.p,{children:"There are some minor issues, that could prevent you from successfully logging in to Vault via OIDC. Here is a short list\r\nof things you can try, if nothing happens on the OIDC login page:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Manually click sign in -> The web UI does not respond to the 'Enter' key"}),"\n",(0,o.jsx)(t.li,{children:"You've misspelled your team name -> Vault won't show you an error on the UI if the role you specified does not exist"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If you checked the mentioned things and still cannot sign in, feel free to open a support ticket, or contact us via\r\nCoP channel."}),"\n",(0,o.jsx)(t.h3,{id:"login-via-github-pat",children:"Login via GitHub PAT"}),"\n",(0,o.jsx)(t.p,{children:"This section describes, how you can use a GitHub personal access token (PAT) to log in to Vault."}),"\n",(0,o.jsx)(t.h4,{id:"create-github-token",children:"Create GitHub Token"}),"\n",(0,o.jsx)(t.p,{children:"To be able to use GitHub Token as login method with Vault you have to create a personal token with appropriate\r\npermissions granted. To create a personalized token:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["navigate to the Developer settings on\r\nGitHub ",(0,o.jsx)(t.a,{href:"https://github.com/settings/tokens",children:"Settings / Developer settings / Personal access tokens"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["click on ",(0,o.jsx)(t.em,{children:"Generate new token"})," in the upper right corner"]}),"\n",(0,o.jsxs)(t.li,{children:["add a ",(0,o.jsx)(t.em,{children:"Note"})," that fits your needs (this helps you to identify the intent of the token later)"]}),"\n",(0,o.jsxs)(t.li,{children:["select an ",(0,o.jsx)(t.em,{children:"Expiration"})," date"]}),"\n",(0,o.jsxs)(t.li,{children:["grant ",(0,o.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/github",children:(0,o.jsx)(t.em,{children:"read:org"})})," permissions to your token"]}),"\n",(0,o.jsxs)(t.li,{children:["click on ",(0,o.jsx)(t.em,{children:"Generate token"})," at the bottom of the form."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"After these steps GitHub will show you the token."}),"\n",(0,o.jsxs)(t.admonition,{type:"danger",children:[(0,o.jsxs)(t.p,{children:["GitHub will show the token ",(0,o.jsx)(t.strong,{children:"only once"})," after creation. If you miss to safe the token in any kind you'll have to\r\ngenerate a new token and revoke the old one for security reasons."]}),(0,o.jsxs)(t.p,{children:["We strongly suggest using a password manager like ",(0,o.jsx)(t.a,{href:"https://keepass.info",children:"KeePass"})," (or any other password manager) to\r\nstore personal sensitive data."]})]}),"\n",(0,o.jsx)(t.h4,{id:"login-to-web-ui-via-github-pat",children:"Login to web UI via GitHub PAT"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to edit or view secrets via Vaults ",(0,o.jsx)(t.a,{href:"https://vault.demo.catena-x.net",children:"web UI"}),", you are not logged in yet and\r\nwant to do that via GitHub PAT, you can select the github login method like shown in the following screenshot."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Vault login method OIDC",src:n(4066).Z+"",width:"1328",height:"709"})}),"\n",(0,o.jsx)(t.p,{children:"Copy and paste your GitHub PAT from your password manager application and hit sign in. Now you will be redirected to the\r\navailable secret engines."}),"\n",(0,o.jsx)(t.h4,{id:"login-with-vault-cli-via-github-pat",children:"Login with vault CLI via GitHub PAT"}),"\n",(0,o.jsxs)(t.p,{children:["You can also use the ",(0,o.jsx)(t.a,{href:"https://www.vaultproject.io/downloads",children:"Vault CLI"})," to manage your secrets. To log in with your CLI\r\nvia GitHub PAT, you'll need to execute the following commands:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'export VAULT_ADDR="https://vault.demo.catena-x.net:443"\r\nexport GH_TOKEN="YOUR_TOKEN"\r\nvault login -method=github token=$GH_TOKEN\n'})}),"\n",(0,o.jsx)(t.h3,{id:"login-via-vault-token",children:"Login via vault token"}),"\n",(0,o.jsxs)(t.p,{children:["Another login method is a token issued by Vault itself. As advantage over the GitHub PAT, the Vault token can only be\r\nused in Vault and not in GitHub as well (security). Also, the TTL of Vault tokens is short-lived.",(0,o.jsx)(t.br,{}),"\n","The following section shows you how to log in via Vault token that."]}),"\n",(0,o.jsx)(t.h4,{id:"create-a-vault-token",children:"Create a Vault token"}),"\n",(0,o.jsxs)(t.p,{children:["To create a token issued by Vault, you first have to be logged in via one of the other login methods. To get your login\r\ntoken, click ",(0,o.jsx)(t.em,{children:"Copy token"})," from the user menu in the top right corner of the Vault web UI, like shown in the following\r\nscreenshot:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Vault login method OIDC",src:n(8889).Z+"",width:"1327",height:"706"})}),"\n",(0,o.jsx)(t.h4,{id:"login-to-web-ui-via-vault-token",children:"Login to web UI via Vault token"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to edit or view secrets via Vaults ",(0,o.jsx)(t.a,{href:"https://vault.demo.catena-x.net",children:"web UI"}),", you are not logged in yet and\r\nwant to do that via token issued by Vault, you can select the token login method like shown in the following screenshot."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Vault login method OIDC",src:n(5005).Z+"",width:"1325",height:"701"})}),"\n",(0,o.jsx)(t.p,{children:"Copy and paste your previously collected token and log in. You'll be redirected to your available secret engines."}),"\n",(0,o.jsx)(t.h4,{id:"login-with-vault-cli-via-vault-token",children:"Login with vault CLI via Vault token"}),"\n",(0,o.jsxs)(t.p,{children:["You can also use the ",(0,o.jsx)(t.a,{href:"https://www.vaultproject.io/downloads",children:"Vault CLI"})," to manage your secrets. To log in with your CLI\r\nvia token issued by Vault, you'll need to execute the following steps:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'export VAULT_ADDR="https://vault.demo.catena-x.net:443"\r\nexport VAULT_TOKEN="YOUR_TOKEN"\r\nvault login -method=token token=$VAULT_TOKEN\n'})}),"\n",(0,o.jsx)(t.h2,{id:"create-a-secret",children:"Create A Secret"}),"\n",(0,o.jsx)(t.p,{children:"After you successfully logged into Vault via one of the previously described login methods, you can create and modify\r\nsecrets in Vault. The following section shows you how to do that."}),"\n",(0,o.jsx)(t.h3,{id:"vault-webui",children:"Vault WebUI"}),"\n",(0,o.jsx)(t.p,{children:"After login to Vault, you'll have access to the Vault secret engine(s) created for your product-team."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Empty secret store",src:n(3672).Z+"",width:"1195",height:"510"})}),"\n",(0,o.jsx)(t.p,{children:"To create a secret"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["click on ",(0,o.jsx)(t.em,{children:"Create secret +"})," in the upper right area"]}),"\n",(0,o.jsxs)(t.li,{children:["enter a ",(0,o.jsx)(t.em,{children:"Path for this secret"}),", this will be the secret name"]}),"\n",(0,o.jsxs)(t.li,{children:["add as many ",(0,o.jsx)(t.em,{children:"Secret data"})," lines, as you require to store in this secret"]}),"\n",(0,o.jsxs)(t.li,{children:["click on the ",(0,o.jsx)(t.em,{children:"Save"})," button to store your first secret"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"create your first secret",src:n(4903).Z+"",width:"1195",height:"766"}),"\r\nSecret data values have been made visible for demonstration purpose. By default values aren't visible in plain text."]}),"\n",(0,o.jsx)(t.p,{children:"After you have created your first secret in Vault, the path is created inside your secret store and can be browsed\r\neasily."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Vault secret store folder structure",src:n(3785).Z+"",width:"1195",height:"459"})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"We strongly suggest to organize secrets in folders based on its intention. Vault will automatically create folders, if\r\nyou enter a specific path."})}),"\n",(0,o.jsx)(t.h3,{id:"vault-cli",children:"Vault Cli"}),"\n",(0,o.jsxs)(t.p,{children:["To create a secret using the CLI execute the command ",(0,o.jsx)(t.code,{children:"vault kv put path/to/secret key1=value2 [key2=value2]"}),", example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ vault kv put product-team-example/hello foo=bar\r\n========= Secret Path =========\r\nproduct-team-example/data/hello\r\n\r\n======= Metadata =======\r\nKey                Value\r\n---                -----\r\ncreated_time       2022-04-14T13:42:08.41991265Z\r\ncustom_metadata    <nil>\r\ndeletion_time      n/a\r\ndestroyed          false\r\nversion            1\n"})}),"\n",(0,o.jsx)(t.h2,{id:"read-a-secret",children:"Read A Secret"}),"\n",(0,o.jsx)(t.h3,{id:"vault-webui-1",children:"Vault WebUI"}),"\n",(0,o.jsx)(t.p,{children:"Login to Vault and browse to the secret you need, and click on the copy icon."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Copy Secret",src:n(8455).Z+"",width:"1195",height:"272"})}),"\n",(0,o.jsx)(t.h3,{id:"vault-cli-1",children:"Vault CLI"}),"\n",(0,o.jsxs)(t.p,{children:["To read a secret using the CLI execute the command ",(0,o.jsx)(t.code,{children:"vault kv get path/to/secret"}),", example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"$ vault kv get product-team-example/hello\r\n========= Secret Path =========\r\nproduct-team-example/data/hello\r\n\r\n======= Metadata =======\r\nKey                Value\r\n---                -----\r\ncreated_time       2022-04-14T13:42:08.41991265Z\r\ncustom_metadata    <nil>\r\ndeletion_time      n/a\r\ndestroyed          false\r\nversion            1\r\n\r\n=== Data ===\r\nKey    Value\r\n---    -----\r\nfoo    bar\n"})}),"\n",(0,o.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,o.jsxs)(t.p,{children:["For further information about Hashicorp Vault please refer to their ",(0,o.jsx)(t.a,{href:"https://www.vaultproject.io/docs",children:"documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4903:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-add-first-secret-16685febc7222089fb643567e88b6ad8.png"},8455:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-copy-secret-webui-2d612875a920c8636c90802d968e7b6b.png"},3672:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-empty-store-1625abfa0bf03ef1a97483aabc5064bf.png"},3785:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-folder-structure-e805852b8f9cb79f3aa61fb9fd0f6ae1.png"},8889:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-create-login-token-b94fcb10eacb68a44b0b8aa377474de2.png"},4066:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-login-page-github-4fb50424e45f86b69d63a8c0fae2da86.png"},5197:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-login-page-oidc-0af0c137a7c81b6b1567c8d09d9242cf.png"},5005:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vault-login-page-token-74c1344c800d68fc73cb28badc7a8bc9.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var o=n(7294);const i={},a=o.createContext(i);function l(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);