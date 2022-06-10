"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9162],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(83117),o=n(67294),r=n(72389),i=n(24726),l=n(86010),s="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,p=e.block,d=e.defaultValue,u=e.values,h=e.groupId,m=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,o.useState)(g),x=N[0],C=N[1],T=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=y[h];null!=E&&E!==x&&f.some((function(e){return e.value===E}))&&C(E)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==x&&(S(t),C(a),null!=h&&w(h,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:P,onClick:P},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},26858:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return g}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=n(9877),l=n(58215),s=(n(99578),["components"]),c={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please select your target network:"),(0,r.kt)("div",{className:"nested-tab"},(0,r.kt)(i.Z,{groupId:"exec-network",defaultValue:"Spiritnet",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Spiritnet",label:"Spiritnet",attributes:{"data-value":"magenta"},mdxType:"TabItem"},"To join the ",(0,r.kt)("strong",null,"Spiritnet")," network, run:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'./target/release/kilt-parachain \\\n  --state-cache-size=1 \\\n  --chain=spiritnet \\\n  --runtime=spiritnet \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30336 \\\n  --base-path=$HOME/data/parachain \\\n  --keystore-path=$HOME/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=kusama \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=$HOME/data/relay \\\n  --execution=wasm\n'))),(0,r.kt)(l.Z,{value:"Peregrine",label:"Peregrine",attributes:{"data-value":"magenta"},mdxType:"TabItem"},"To join the ",(0,r.kt)("strong",null,"Peregrine"),"network, run:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'./target/release/kilt-parachain \\\n  --state-cache-size=1 \\\n  --chain=./dev-specs/kilt-parachain/peregrine-kilt.json \\\n  --runtime=peregrine \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30336 \\\n  --base-path=$HOME/data/parachain \\\n  --keystore-path=$HOME/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=./dev-specs/kilt-parachain/peregrine-relay.json \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=$HOME/data/relay \\\n  --execution=wasm\n'))))))}p.isMDXComponent=!0;var d=["components"],u={toc:[]};function h(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please select your target network:"),(0,r.kt)("div",{className:"nested-tab"},(0,r.kt)(i.Z,{groupId:"exec-network",defaultValue:"Spiritnet",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Spiritnet",label:"Spiritnet",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)("p",null,"  To start the ",(0,r.kt)("strong",{parentName:"p"},"Spiritnet")," collator container, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'docker run -p 127.0.0.1:9933:9933 -v ~/data:/data kiltprotocol/kilt-node:latest \\\n  --state-cache-size=1 \\\n  --chain=spiritnet \\\n  --runtime=spiritnet \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --unsafe-rpc-external \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30336 \\\n  --base-path=/data/parachain \\\n  --keystore-path=/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=kusama \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=/data/relay \\\n  --execution=wasm\n'))),(0,r.kt)(l.Z,{value:"Peregrine",label:"Peregrine",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)("p",null,"  To start the ",(0,r.kt)("strong",{parentName:"p"},"Peregrine")," Collator container, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'docker run -p 127.0.0.1:9933:9933 -v ~/data:/data kiltprotocol/kilt-node:latest \\\n  --state-cache-size=1 \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \\\n  --runtime=peregrine \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-methods=unsafe \\\n  --unsafe-rpc-external \\\n  --name="name of collator" \\\n  --execution=wasm \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30336 \\\n  --base-path=/data/parachain \\\n  --keystore-path=/data/keystore \\\n  --collator \\\n  -- \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \\\n  --listen-addr=/ip4/0.0.0.0/tcp/30333 \\\n  --base-path=/data/relay \\\n  --execution=wasm\n'))))))}h.isMDXComponent=!0;var m=["components"],k={id:"setup-node",title:"Set Up a Node"},f=void 0,b={unversionedId:"participate/staking/become_a_collator/setup-node",id:"participate/staking/become_a_collator/setup-node",title:"Set Up a Node",description:"There are several ways to build and run a Collator node.",source:"@site/docs/participate/01_staking/01_become_a_collator/04_setup_node.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/setup-node",permalink:"/docs/participate/staking/become_a_collator/setup-node",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/04_setup_node.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"setup-node",title:"Set Up a Node"},sidebar:"staking",previous:{title:"Set and Rotate Session Keys",permalink:"/docs/participate/staking/become_a_collator/session-keys"},next:{title:"Join the Collator Candidate Pool",permalink:"/docs/participate/staking/become_a_collator/join"}},g=[{value:"Configuration",id:"configuration",children:[{value:"RPC and WS Endpoints",id:"rpc-and-ws-endpoints",children:[],level:3},{value:"WASM Runtime Execution",id:"wasm-runtime-execution",children:[],level:3},{value:"Specify the Right Chainspec",id:"specify-the-right-chainspec",children:[],level:3},{value:"Specify the Blockchain Storage Path",id:"specify-the-blockchain-storage-path",children:[],level:3},{value:"Storage Root Error",id:"storage-root-error",children:[],level:3}],level:2},{value:"Obtain the Node Executable",id:"obtain-the-node-executable",children:[],level:2},{value:"Start the Node",id:"start-the-node",children:[],level:2},{value:"Sync the Blockchain State",id:"sync-the-blockchain-state",children:[],level:2}],v={toc:g};function y(e){var t=e.components,n=(0,o.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are several ways to build and run a Collator node.\nWe show both how to use a Docker image and how to compile the source code directly from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node"},"our chain repository"),"."),(0,r.kt)("p",null,"There are currently two different runtimes (i.e., two different parachain environments) that a KILT Collator can be part of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spiritnet"),": the official public network, which contains only stable and thoroughly-tested features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Peregrine"),": the public test network whose runtime is as close to that of Spiritnet as possible. It can be used to try stuff out before executing them on the production Spiritnet chain, which involves spending tokens that have real monetary value.")),(0,r.kt)("p",null,"Each runtime has its own benchmark measurements."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The remainder of this guide explaining how to set up and run a Collator is mainly for the official ",(0,r.kt)("strong",{parentName:"p"},"Spiritnet")," parachain.\nNevertheless, we recommend to try out the setup on our Peregrine testnet first.\nHence, at each step where it is applicable, we indicate what differs between the Peregrine and Spiritnet configuration for the Collator node to join either network."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Running a Collator requires a few configuration parameters.\nSome of the parameters might appear twice in the command to start the Collator, the reason being that a parachain Collator actually runs two blockchains.\nThe parameter that are listed before the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," are related to the parachain node itself (the KILT blockchain), whereas the parameters following the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," are related to the relaychain, e.g., Kusama or Polkadot."),(0,r.kt)("p",null,"Following is a description of some of the parameters that can be set when spinning up a parachain Collator node."),(0,r.kt)("h3",{id:"rpc-and-ws-endpoints"},"RPC and WS Endpoints"),(0,r.kt)("p",null,"The Collator needs session keys that connect it with the Collator's KILT account.\nThese session keys can be generated by calling an RPC endpoint that the Collator optionally exposes.\nExposing the RPC endpoint can be done using the following parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--rpc-port=9933\n--rpc-cors=all\n--rpc-methods=unsafe\n--unsafe-rpc-external // ONLY for Docker-based setups\n")),(0,r.kt)("p",null,"Exposing the RPC endpoint of a Collator does not imply that it becomes accessible via the PolkadotJS Apps interface, because this requires a Websocket to connect to the node."),(0,r.kt)("p",null,"By default, the Websocket port used by the node is configured to be ",(0,r.kt)("inlineCode",{parentName:"p"},"9944"),", but it can be changed by specifying a different value with ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port=<ws_port>"),"."),(0,r.kt)("p",null,"Connecting from a remote host to either the Collator RPC endpoint or WS endpoint requires to explicitly expose those endpoints to the public with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-external")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," options."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be aware that it is highly discouraged to publicly expose an RPC endpoint, especially if it allows the execution of unsafe RPC calls!\nYou should be the only one able to call the RPC endpoint.\nFor a secure setup, follow the instructions in the previous section about ",(0,r.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/session-keys"},"generating the session keys"),"."))),(0,r.kt)("h3",{id:"wasm-runtime-execution"},"WASM Runtime Execution"),(0,r.kt)("p",null,"A KILT Collator node should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--execution=wasm")," parameter for both the relaychain and parachain collation.\nThe alternative to WASM runtime execution is native runtime execution, which might be faster but can, in some cases, deviate from the WASM execution logic and result in a different state.\nWhen this happens, the Collator node will crash and will stop synchronizing with the network as well as producing blocks.\nSince the WASM runtime logic is part of the blockchain state itself and hence represents the single source of truth, all nodes should execute the WASM version of the runtime logic."),(0,r.kt)("h3",{id:"specify-the-right-chainspec"},"Specify the Right Chainspec"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," parameter indicates which blockchain the KILT Collator node will join.\nThis parameter must be specified for both the parachain ",(0,r.kt)("strong",{parentName:"p"},"and")," the relaychain, since both chains are, as a matter of fact, separate blockchains.\nThe KILT parachain accepts an additional parameter to select the environment to use for the WASM runtime execution.\nThis can either be ",(0,r.kt)("inlineCode",{parentName:"p"},"peregrine")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spiritnet"),"."),(0,r.kt)("p",null,"Hence, to start a Collator node for the Spiritnet network, the parameter would be ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=spiritnet"),".\nUnfortunately, there is no hardcoded chain spec for the Peregrine network, so the full path of the chainspec file must be provided ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json"),".\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/blob/develop/dev-specs/kilt-parachain/peregrine-kilt.json"},"KILT node repository")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kiltprotocol/kilt-node/tags"},"Docker image")," for more information."),(0,r.kt)("h3",{id:"specify-the-blockchain-storage-path"},"Specify the Blockchain Storage Path"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," parameter specifies where all the persistent files must be stored.\nBy default, the session keys will also be stored in the ",(0,r.kt)("em",{parentName:"p"},"base path"),", but we recommend to separate them from the other files.\nThis makes sure that the keyfiles are not accidentally lost or published when the blockchain database is either backed up or restored.\nYou can configure where to store the session keys using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--keystore-path")," option.\nSince the Collator will collate only for the parachain, there is no need to add this to the relaychain part of the command."),(0,r.kt)("h3",{id:"storage-root-error"},"Storage Root Error"),(0,r.kt)("p",null,"Due to issues with the current implementation of the caching logic, it is recommended to reduce the cache size.\nOtherwise the node might get blacklisted by other peers and ultimately disconnected from the p2p network.\nThis leads to a longer block time and a loss of rewards for the Collator."),(0,r.kt)("p",null,"Throughout this guide, the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-cache-size=1")," was added to reduce the cache size to 1 Byte."),(0,r.kt)("h2",{id:"obtain-the-node-executable"},"Obtain the Node Executable"),(0,r.kt)(i.Z,{groupId:"exec-strategy",defaultValue:"Docker",values:[{label:"Binary",value:"Binary"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Binary",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to build the KILT Collator executable, you need to have a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"nightly version of Rust")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," target for this toolchain installed.\nWe recommend to align your nightly version with the one used in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node"},"KILT node repository")," by executing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/blob/develop/scripts/init.sh"},"init script"),".\nAfter cloning the repository, you can build the executable by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command below from the root directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone https://github.com/KILTprotocol/kilt-node.git\n# Check out master branch\ngit checkout master\n# Set up the build environment by installing the Rust compiler.\n./scripts/init.sh\n# Build the executable from source enabling all the optimizations with --release.\ncargo build --release -p kilt-parachain\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You must not use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch to build the executable.\nInstead, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/releases"},"latest release")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," should be used."))),(0,r.kt)("p",null,"The compiled executable can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release/kilt-parachain")," after the build process completes successfully.")),(0,r.kt)(l.Z,{value:"Docker",mdxType:"TabItem"},(0,r.kt)("p",null,"Simply pull the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kiltprotocol/kilt-node/tags"},"latest Docker image"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kiltprotocol/kilt-node:latest\n")))),(0,r.kt)("h2",{id:"start-the-node"},"Start the Node"),(0,r.kt)(i.Z,{groupId:"exec-strategy",defaultValue:"Docker",values:[{label:"Binary",value:"Binary"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Binary",mdxType:"TabItem"},(0,r.kt)(p,{mdxType:"StartNodeBinary"}),(0,r.kt)("p",null,"In either case, if the node needs to be reachable via PolkadotJS Apps, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," flag must be added to the Collator options, before the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," divider.")),(0,r.kt)(l.Z,{value:"Docker",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"StartNodeDocker"}),(0,r.kt)("p",null,"In either case, if the node needs to be reachable via PolkadotJS Apps, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," flag must be added to the Collator options, before the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," divider, and the WS port must be exposed from the container with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 9944:9944")," parameter."),(0,r.kt)("p",null,"The Docker command will map the database files for the relay and parachain as well as the keystore directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/data")," on the host system using the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-v $HOME/data:/data"),".\nThat way the blockchain database files are not lost when and if the Docker container is removed and can be mounted back on next containers."),(0,r.kt)("p",null,"The Docker container runs as an user with id 1000 and will try to access the mapped volume and the files it contains.\nIf the files are not owned by a user with id 1000, this will result in an error.\nIf that is the case, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chown -R 1000:1000 $HOME/data")," to give the container access."))),(0,r.kt)("h2",{id:"sync-the-blockchain-state"},"Sync the Blockchain State"),(0,r.kt)("p",null,"Before a Collator can author blocks, the node needs to fully sync up with both the parachain and the relaychain.\nDepending on the size of the blockchain states, it may take a number of hours to few days for the node to catch up.\nMore details can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data"},"Polkadot network docs"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example of node sync:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-Example",metastring:"of node sync",of:!0,node:!0,sync:!0},"2021-06-17 02:34:34 \ud83d\udd0d Discovered new external address for our node: /ip4/100.102.231.64/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:36 \u2699\ufe0f  Syncing 409.2 bps, target=#8062689 (5 peers), best: #3477 (0x63ad\u2026e046), finalized #3072 (0x0e4c\u2026f587), \u2b07 153.2kiB/s \u2b06 12.9kiB/s\n2021-06-17 02:34:37 \ud83d\udd0d Discovered new external address for our node: /ip4/100.111.175.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:38 \ud83d\udd0d Discovered new external address for our node: /ip4/100.100.176.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:41 \u2699\ufe0f  Syncing 386.2 bps, target=#8062690 (7 peers), best: #5409 (0x1d76\u20268c3d), finalized #5121 (0x8ad1\u2026b6dc), \u2b07 96.1kiB/s \u2b06 10.9kiB/s\n2021-06-17 02:34:46 \u2699\ufe0f  Syncing 394.8 bps, target=#8062691 (11 peers), best: #7383 (0x0689\u20266f1e), finalized #7168 (0x72a9\u20268d8c), \u2b07 352.9kiB/s \u2b06 5.1kiB/s\n2021-06-17 02:34:51 \u2699\ufe0f  Syncing 347.0 bps, target=#8062692 (12 peers), best: #9118 (0x66fc\u2026cce3), finalized #8704 (0x14c9\u2026705e), \u2b07 62.7kiB/s \u2b06 1.7kiB/s\n")))))}y.isMDXComponent=!0},99578:function(e,t){t.Z={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",featureLink:"featureLink_rhf2"}}}]);