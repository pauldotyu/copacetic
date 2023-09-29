"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Introduction",slug:"/"},o="Project Copacetic: Directly patch container image vulnerabilities",l={unversionedId:"introduction",id:"version-v0.4.x/introduction",title:"Introduction",description:"copa is a CLI tool written in Go and based on buildkit that can be used to directly patch container images given the vulnerability scanning results from popular tools like Trivy.",source:"@site/versioned_docs/version-v0.4.x/introduction.md",sourceDirName:".",slug:"/",permalink:"/copacetic/website/",draft:!1,tags:[],version:"v0.4.x",frontMatter:{title:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Installation",permalink:"/copacetic/website/installation"}},s={},c=[{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"project-copacetic-directly-patch-container-image-vulnerabilities"},"Project Copacetic: Directly patch container image vulnerabilities"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"copa")," is a CLI tool written in ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org"},"Go")," and based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moby/buildkit"},"buildkit")," that can be used to directly patch container images given the vulnerability scanning results from popular tools like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy"),"."),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"We needed the ability to patch containers quickly without going upstream for a full rebuild. As the window between ",(0,i.kt)("a",{parentName:"p",href:"https://www.bleepingcomputer.com/news/security/hackers-scan-for-vulnerabilities-within-15-minutes-of-disclosure/"},"vulnerability disclosure and active exploitation continues to narrow"),", there is a growing operational need to patch critical security vulnerabilities in container images so they can be quickly redeployed into production. The need is especially acute when those vulnerabilities are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inherited from base images several levels deep and waiting on updated releases to percolate through the supply chain is not an option"),(0,i.kt)("li",{parentName:"ul"},"found in 3rd party app images you don't maintain with update cadences that don't meet your security SLAs.")),(0,i.kt)("img",{title:"direct image patching",src:"/copacetic/website/img/direct-image-patching.png"}),(0,i.kt)("p",null,"In addition to filling the operational gap not met by left-shift security practices and tools, the ability of ",(0,i.kt)("inlineCode",{parentName:"p"},"copa")," to patch a container without requiring a rebuild of the container image provides other benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allows users other than the image publishers to also patch container images, such as DevSecOps engineers."),(0,i.kt)("li",{parentName:"ul"},"Reduces the storage and transmission costs of redistributing patched images by only creating an additional patch layer, instead of rebuilding the entire image which usually results in different layer hashes that break layer caching."),(0,i.kt)("li",{parentName:"ul"},"Reduces the turnaround time for patching a container image by not having to wait for base image updates and being a faster operation than a full image rebuild."),(0,i.kt)("li",{parentName:"ul"},"Reduces the complexity of patching the image from running a rebuild pipeline to running a single tool on the image.")),(0,i.kt)("h2",{id:"how"},"How?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"copa")," tool is an extensible engine that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Parses the needed update packages from the container image\u2019s vulnerability report produced by a scanner like Trivy. New adapters can be written to accommodate more report formats."),(0,i.kt)("li",{parentName:"ol"},"Obtains and processes the needed update packages using the appropriate package manager tools such as apt, apk, etc. New adapters can be written to support more package managers."),(0,i.kt)("li",{parentName:"ol"},"Applies the resulting update binaries to the container image using buildkit.")),(0,i.kt)("img",{title:"report-driven vulnerability patching",src:"/copacetic/website/img/vulnerability-patch.png"}),(0,i.kt)("p",null,"This approach is motivated by the core principles of making direct container patching broadly applicable and accessible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Copa supports patching ",(0,i.kt)("em",{parentName:"strong"},"existing")," container images"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Devs don't need to build their images using specific tools or modify them in some way just to support container patching."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Copa works with the existing vulnerability scanning and mitigation ecosystems"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Image publishers don't need to create new workflows for container patching since Copa supports patching container images using the security update packages already being published today."),(0,i.kt)("li",{parentName:"ul"},"Consumers do not need to migrate to a new and potentially more limited support ecosystem for custom distros or change their container vulnerability scanning pipelines to include remediation, since Copa can be integrated seamlessly as an extra step to patch containers based on those scanning reports."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Copa reduces the technical expertise needed and waiting on dependencies needed to patch an image"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For OS package vulnerabilities, no specialized knowledge about a specific image is needed to be patch it as Copa relies on the vulnerability remediation knowledge already embedded in the reports produced by popular container scanning tools today.")))),(0,i.kt)("p",null,"For more details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/copacetic/website/design"},"copa design")," documentation."))}u.isMDXComponent=!0}}]);