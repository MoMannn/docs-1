"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{6793:function(e,t,n){n(7294),n(1736)},8462:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=n(1736),s=(n(6793),["components"]),c={id:"account",title:"Account"},d=void 0,l={unversionedId:"sdk/workshop/attester/account",id:"sdk/workshop/attester/account",title:"Account",description:"After you have setup the project structure in the last step, we'll create our Attester account.",source:"@site/docs/sdk/1-workshop/03-attester/01-account.md",sourceDirName:"sdk/1-workshop/03-attester",slug:"/sdk/workshop/attester/account",permalink:"/docs/sdk/workshop/attester/account",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/03-attester/01-account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"account",title:"Account"},sidebar:"sdk",previous:{title:"\ud83c\udfe2 Attester",permalink:"/docs/sdk/workshop/attester/"},next:{title:"DID",permalink:"/docs/sdk/workshop/attester/did"}},m=[{value:"Create the Account",id:"create-the-account",children:[],level:2},{value:"Execute",id:"execute",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After you have ",(0,i.kt)("a",{parentName:"p",href:"./"},"setup the project structure")," in the last step, we'll create our ",(0,i.kt)("span",{class:"label-role attester"},"Attester")," account.\nIn KILT, there is an account which is an object that interacts with the blockchain.\nAn accounts contains multiple properties.\nOne of them is the ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),": it's the entity's unique and public on-chain identifier, that is used to pay fees and deposits.\nAll we need to create an account is a mnemonic."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"KILT Account")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A KILT account is a set of cryptographic elements:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The address, which is generated from the public key"),(0,i.kt)("li",{parentName:"ul"},"A signing keypair write transactions on-chain")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"mnemonic")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In cryptography, a mnemonic usually consists of 12 or 24 random series of words.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"gold upset segment cake universe")," is a mnemonic.\nIt's used to generate signing keypairs.\nWhat's great about a mnemonic is that it's ",(0,i.kt)("strong",{parentName:"p"},"human-readable"),".\nA person can memorize it, and use it later to re-generate their keypairs and address."))),(0,i.kt)("h2",{id:"create-the-account"},"Create the Account"),(0,i.kt)("p",null,"To generate an account, one method from the KILT SDK is needed and one method from the polkadot crypto utility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mnemonicGenerate()")," - Generates a mnemonic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addFromMnemonic(mnemonic)")," - takes a mnemonic as an input, and outputs an ",(0,i.kt)("inlineCode",{parentName:"li"},"Account")," instance.")),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"attester/generateAccount.js")," and paste the following code:"),(0,i.kt)(r.Z,{className:"language-js",title:"attester/generateAccount.js",mdxType:"CodeBlock"},"import 'dotenv/config'\nimport { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto'\nimport { fileURLToPath } from 'url'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function generateAccount() {\n  await cryptoWaitReady()\n  await Kilt.init({ address: process.env.WSS_ADDRESS })\n\n  // setup keyring\n  const keyring = new Kilt.Utils.Keyring({\n    ss58Format: 38,\n    type: 'sr25519',\n  })\n\n  // use the mnemonic from .env or make a new one\n  const mnemonic = mnemonicGenerate()\n  const account = keyring.addFromMnemonic(mnemonic)\n\n  // save the mnemonic and address in .env to we keep the same account\n  return { account, mnemonic }\n}\n\nexport async function getAccount(mnemonic) {\n  await cryptoWaitReady()\n  await Kilt.init({ address: process.env.WSS_ADDRESS })\n  const keyring = new Kilt.Utils.Keyring({\n    ss58Format: 38,\n    type: 'sr25519',\n  })\n  return keyring.addFromMnemonic(mnemonic)\n}\n\n// don't execute if this is imported by another files\nif (process.argv[1] === fileURLToPath(import.meta.url)) {\n  generateAccount()\n    .catch((e) => {\n      console.log('Error while setting up attester account', e)\n      process.exit(1)\n    })\n    .then(({ mnemonic, account }) => {\n      console.log('save to mnemonic and address to .env to continue!\\n\\n')\n      console.log(`ATTESTER_MNEMONIC=\"${mnemonic}\"`)\n      console.log(`ATTESTER_ADDRESS=${account.address}\\n\\n`)\n    })\n}\n"),(0,i.kt)("p",null,"The code contains two methods.\n",(0,i.kt)("inlineCode",{parentName:"p"},"generateAccount")," create and returns a new account while ",(0,i.kt)("inlineCode",{parentName:"p"},"getAccount")," loads an existing secret and creates an account from it.\nWe will use ",(0,i.kt)("inlineCode",{parentName:"p"},"getAccount")," later to load the account that we will create and store in the next step."),(0,i.kt)("h2",{id:"execute"},"Execute"),(0,i.kt)("p",null,"Now run it to get your ",(0,i.kt)("span",{class:"label-role attester"},"Attester")," ",(0,i.kt)("inlineCode",{parentName:"p"},"<address>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<mnenomic>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node ./attester/generateAccount.js\n")),(0,i.kt)("p",null,"Your output will provide you with ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTESTER_MNEMONIC")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTESTER_ADDRESS"),".\nBe sure to save it in your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, it should now look similar to this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n\nATTESTER_MNEMONIC="gold upset segment ca...\nATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...\n')),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Get PILT coins!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You now have a blockchain account, which will be used to pay fees and deposits.\nIf you haven't already requested PILT, go to the ",(0,i.kt)("a",{parentName:"p",href:"https://faucet.peregrine.kilt.io"},"faucet"),". and request tokens for your ",(0,i.kt)("inlineCode",{parentName:"p"},"<address>"),"."))))}u.isMDXComponent=!0}}]);