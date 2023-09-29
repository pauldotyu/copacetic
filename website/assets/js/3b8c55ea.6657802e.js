"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Installation"},i=void 0,c={unversionedId:"installation",id:"installation",title:"Installation",description:"Homebrew",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/copacetic/website/next/installation",draft:!1,tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/copacetic/website/next/"},next:{title:"Quick Start",permalink:"/copacetic/website/next/quick-start"}},l={},p=[{value:"Homebrew",id:"homebrew",level:2},{value:"GitHub",id:"github",level:2},{value:"Development Setup",id:"development-setup",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"homebrew"},"Homebrew"),(0,a.kt)("p",null,"On macOS and Linux, ",(0,a.kt)("inlineCode",{parentName:"p"},"copa")," can be installed via ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install copa\n")),(0,a.kt)("h2",{id:"github"},"GitHub"),(0,a.kt)("p",null,"You can download the latest and previous versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"copa")," from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/project-copacetic/copacetic/releases"},"GitHub releases page"),"."),(0,a.kt)("h2",{id:"development-setup"},"Development Setup"),(0,a.kt)("p",null,"The following instructions are for ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu 22.04")," with the dependency versions supported as part of the ",(0,a.kt)("a",{parentName:"p",href:"/copacetic/website/next/contributing/#visual-studio-code-development-container"},"dev container")," environment we use for builds and tests. For other distributions and OS, refer to the appropriate installation instructions for each of the components instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/project-copacetic/copacetic\ncd copacetic\nmake\n# OPTIONAL: install copa to a pathed folder\nsudo mv dist/linux_amd64/release/copa /usr/local/bin/\n")))}u.isMDXComponent=!0}}]);