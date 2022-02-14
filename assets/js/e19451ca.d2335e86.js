"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[685],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},723:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={id:"welcome",title:"\ud83d\udc4b\ud83c\udffb Welcome"},s=void 0,l={unversionedId:"sdk/workshop/welcome",id:"sdk/workshop/welcome",title:"\ud83d\udc4b\ud83c\udffb Welcome",description:"SDK version 0.25.2.",source:"@site/docs/sdk/1-workshop/00-welcome.md",sourceDirName:"sdk/1-workshop",slug:"/sdk/workshop/welcome",permalink:"/docs/sdk/workshop/welcome",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/00-welcome.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"welcome",title:"\ud83d\udc4b\ud83c\udffb Welcome"},sidebar:"sdk",previous:{title:"Delegation Hierarchies and Delegated Attestations",permalink:"/docs/sdk/core-feature/delegations"},next:{title:"\ud83c\udf92 Setup",permalink:"/docs/sdk/workshop/setup"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SDK version ",(0,a.kt)("strong",{parentName:"p"},"0.25.2"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What you can expect")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\ud83d\udce6 Topics: ",(0,a.kt)("a",{href:"https://github.com/KILTprotocol/sdk-js"},"KILT SDK")," essentials, basic credential workflow. This includes creating a CType and a claim; attesting a claim; and finally verifying the credential."),(0,a.kt)("p",{parentName:"div"},"\u23f3 Duration: 15-45 minutes."),(0,a.kt)("p",{parentName:"div"},"\ud83e\udd13 Prerequisites: basic JavaScript or TypeScript knowledge."),(0,a.kt)("p",{parentName:"div"},"\u2753 Questions? Join our ",(0,a.kt)("a",{href:"https://discord.gg/hX4pc8rdHS"},"developer community channel"),"!"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Welcome, curious mind!")),(0,a.kt)("p",null,"In this tutorial, you will:"),(0,a.kt)("p",null,"\u2714 Get familiar with the essential concepts in KILT: accounts, DIDs, CTypes, claims, credentials and more."),(0,a.kt)("p",null,"\u2714 Use the KILT SDK to implement the basic flow of a KILT claim, from creation until verification. You'll create a claim as a ",(0,a.kt)("span",{class:"label-role claimer"},"Claimer"),", attest it as an ",(0,a.kt)("span",{class:"label-role attester"},"Attester")," and verify it as a ",(0,a.kt)("span",{class:"label-role verifier"},"Verifier"),"."),(0,a.kt)("p",null,"\u2714 Use the KILT SDK to write onto and read from the KILT blockchain."),(0,a.kt)("p",null,"\ud83d\ude80 Claim KILT Peregrine test tokens from the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.peregrine.kilt.io"},"faucet"),"."),(0,a.kt)("p",null,"Ready? Let's go!"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/workshop/setup"},"Step 0: Setup")))}m.isMDXComponent=!0}}]);