"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7894],{94273:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),r=n(31736),s=["components"],l={id:"presentation-verification",title:"Verify a Credential or a Presentation"},c=void 0,d={unversionedId:"develop/sdk/cookbook/claiming/presentation-verification",id:"develop/sdk/cookbook/claiming/presentation-verification",title:"Verify a Credential or a Presentation",description:"Whether a Presentation involves selective disclosure or a whole Credential is not technically relevant to Verifiers.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/05_presentation_verification.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/presentation-verification",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/05_presentation_verification.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"presentation-verification",title:"Verify a Credential or a Presentation"},sidebar:"sdk",previous:{title:"Present a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation"},next:{title:"Revoke a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-removal"}},p=[],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whether a Presentation involves selective disclosure or a whole Credential is not technically relevant to Verifiers.\nThis is because in KILT a Presentation ",(0,a.kt)("strong",{parentName:"p"},"is")," a Credential.\nThis means that the logic for Verifiers does not change depending on the case, thus verifying a Presentation is as easy as calling one SDK function like in the following code snippet:"),(0,a.kt)(r.Z,{className:"language-ts",mdxType:"CodeBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function verifyPresentation(\n  presentation: Kilt.Credential,\n  challenge: string | undefined = undefined\n): Promise<boolean> {\n  // Verify the presentation with the provided challenge.\n  return presentation.verify({ challenge })\n}\n"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Verifying a Presentation provides proof that all the information is correct and authentic, and that the Credential has not been revoked.\nVerifiers still need to match the subject of the Credential to the entity that is presenting it.\nOne way of achieving this is by asking the Claimer to include a challenge in the Presentation signature, as shown in the snippet above.\nWithout a challenge, Verifiers must implement other measures to be certain about the identity of the presenter."))))}m.isMDXComponent=!0}}]);