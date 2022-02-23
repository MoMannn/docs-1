"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[126],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2002:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={id:"introduction",title:"Introduction"},p=void 0,s={unversionedId:"apps/introduction",id:"apps/introduction",title:"Introduction",description:"This section details the various tools and apps that can be used to interact with the KILT chain.",source:"@site/docs/apps/00-introduction.md",sourceDirName:"apps",slug:"/apps/introduction",permalink:"/docs/apps/introduction",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/apps/00-introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"introduction",title:"Introduction"},sidebar:"apps",next:{title:"KILT & Parity Signer",permalink:"/docs/apps/01-parity-signer"}},u=[],l={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section details the various tools and apps that can be used to interact with the KILT chain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apps/01-parity-signer"},"The Parity Signer")," can be used to create offline transactions. It is currently not recommended to use the app for using functionality like attesting and revoking claims."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.api.onfinality.io%2Fpublic-ws#/explorer"},"Polkadot Apps")," can be used to interact with the KILT chain on a very low level and targets experienced users.")))}d.isMDXComponent=!0}}]);