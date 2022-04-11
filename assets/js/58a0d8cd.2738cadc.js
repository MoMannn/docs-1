"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[850],{6343:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var i=n(3117),o=n(102),a=(n(7294),n(3905)),r=n(1736),s=["components"],l={id:"did",title:"Kilt DIDs"},c=void 0,d={unversionedId:"sdk/core-feature/did",id:"sdk/core-feature/did",title:"Kilt DIDs",description:"A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user. A DID can be thought of as a container of different keys that are all under the control of the same DID subject (see the DID Core spec for more information).",source:"@site/docs/sdk/0-core-feature/0_did.md",sourceDirName:"sdk/0-core-feature",slug:"/sdk/core-feature/did",permalink:"/docs/sdk/core-feature/did",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/0-core-feature/0_did.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"did",title:"Kilt DIDs"},sidebar:"sdk",previous:{title:"Introduction",permalink:"/docs/sdk/introduction"},next:{title:"Web3 names",permalink:"/docs/sdk/core-feature/web3names"}},h=[{value:"Light DIDs",id:"light-dids",children:[{value:"Creating a light DID",id:"creating-a-light-did",children:[],level:3}],level:2},{value:"Full DIDs",id:"full-dids",children:[{value:"Creating and anchoring a full DID",id:"creating-and-anchoring-a-full-did",children:[],level:3}],level:2},{value:"Updating a full DID",id:"updating-a-full-did",children:[],level:2},{value:"Deleting a full DID",id:"deleting-a-full-did",children:[{value:"Claiming back a DID deposit",id:"claiming-back-a-did-deposit",children:[],level:3}],level:2},{value:"Migrating a light DID to a full DID",id:"migrating-a-light-did-to-a-full-did",children:[],level:2},{value:"Batching multiple operations with a full DID",id:"batching-multiple-operations-with-a-full-did",children:[],level:2}],p={toc:h};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user. A DID can be thought of as a container of different keys that are all under the control of the same DID subject (see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DID Core spec")," for more information)."),(0,a.kt)("p",null,"The simplest type of KILT DID is a ",(0,a.kt)("strong",{parentName:"p"},"light DID"),", called this way because it can be generated and used offline without requiring any Internet connection (hence any connection with the KILT blockchain at all). Although very cheap, light DIDs are not very flexible and are suitable for lower-security use cases. In more complex use cases, a ",(0,a.kt)("strong",{parentName:"p"},"full DID")," is more indicated, which allows the subject to store several different keys (and key types) and replace them over time, with the help of the KILT blockchain."),(0,a.kt)("h2",{id:"light-dids"},"Light DIDs"),(0,a.kt)("p",null,"An example of a light KILT DID is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS\n")),(0,a.kt)("p",null,"Beyond the standard prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"did:kilt:"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"light:")," component indicates that this DID is a light DID, hence it can be resolved and utilised offline."),(0,a.kt)("p",null,"Light DIDs optionally support the specification of an ",(0,a.kt)("strong",{parentName:"p"},"encryption key")," (of one of the supported key types) and some service endpoints, which are both serialised, encoded and added at the end of the DID, like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS:z1ERkVVjngcarMbJn6YssB1PYULescQneSSEfCTJwYbzT2aK8fzH5WPsp3G4UVuLWWfsTayketnFV74YCnyboHBUvqEs6J8jdYY5dK2XeqCCs653Sf9XVH4RN2WvPrDFZXzzKf3KigvcaE7kkaEwLZvcas3U1M2ZDZCajDG71winwaRNrDtcqkJL9V6Q5yKNWRacw7hJ58d\n")),(0,a.kt)("h3",{id:"creating-a-light-did"},"Creating a light DID"),(0,a.kt)("p",null,"The creation of a light DID require a keystore instance that conforms to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/sdk-js/blob/develop/packages/types/src/Keystore.ts"},"Keystore interface"),". For the sake of ease of use, the SDK provides a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/sdk-js/blob/develop/packages/did/src/DemoKeystore/DemoKeystore.ts"},"demo keystore")," which can be used to generate key pairs that are kept in memory and disappear at the end of the program execution."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Using the demo keystore in production is highly discouraged as all the keys are kept in the memory and easily retrievable by malicious actors."))),(0,a.kt)("p",null,"The following is an example of how to create a light DID after creating an instance of the demo keystore."),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import {\n  DemoKeystore,\n  LightDidDetails,\n  SigningAlgorithms\n} from '@kiltprotocol/did'\nimport { VerificationKeyType } from '@kiltprotocol/types'\n\nexport async function main(keystore: DemoKeystore): Promise<void> {\n  // Generate seed for the authentication key.\n  // For random mnemonic generation, refer to the `UUID` module of the `@kiltprotocol/utils` package.\n  const authenticationSeed = '0x123456789'\n\n  // Ask the keystore to generate a new keypair to use for authentication with the generated seed.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    alg: SigningAlgorithms.Ed25519,\n    seed: authenticationSeed\n  })\n\n  // Create a light DID from the generated authentication key.\n  const lightDID = LightDidDetails.fromDetails({\n    authenticationKey: {\n      publicKey: authenticationKeyPublicDetails.publicKey,\n      type: VerificationKeyType.Ed25519\n    }\n  })\n  console.log(lightDID.did)\n}\n"),(0,a.kt)("p",null,"For cases in which also an encryption key and some service endpoints need to be added to a light DID:"),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import {\n  DemoKeystore,\n  LightDidDetails,\n  SigningAlgorithms,\n  EncryptionAlgorithms\n} from '@kiltprotocol/did'\nimport type { DidServiceEndpoint } from '@kiltprotocol/types'\nimport { VerificationKeyType, EncryptionKeyType } from '@kiltprotocol/types'\n\nexport async function main(keystore: DemoKeystore): Promise<void> {\n  const authenticationSeed = '0x123456789'\n\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    alg: SigningAlgorithms.Ed25519,\n    seed: authenticationSeed\n  })\n\n  // Generate the seed for the encryption key.\n  const encryptionSeed = '0x987654321'\n\n  // Use the keystore to generate a new keypair to use for encryption.\n  const encryptionKeyPublicDetails = await keystore.generateKeypair({\n    alg: EncryptionAlgorithms.NaclBox,\n    seed: encryptionSeed\n  })\n\n  const serviceEndpoints: DidServiceEndpoint[] = [\n    {\n      id: 'my-service',\n      types: ['CollatorCredential'],\n      urls: ['http://example.domain.org']\n    }\n  ]\n\n  // Generate the KILT light DID with the information generated.\n  const lightDID = LightDidDetails.fromDetails({\n    authenticationKey: {\n      publicKey: authenticationKeyPublicDetails.publicKey,\n      type: VerificationKeyType.Ed25519\n    },\n    encryptionKey: {\n      publicKey: encryptionKeyPublicDetails.publicKey,\n      type: EncryptionKeyType.X25519\n    },\n    serviceEndpoints\n  })\n  console.log(lightDID.did)\n}\n"),(0,a.kt)("h2",{id:"full-dids"},"Full DIDs"),(0,a.kt)("p",null,"As mentioned above, the creation of a full DID requires interaction with the KILT blockchain. Therefore, the DID creation operation must be submitted by a KILT address with enough funds to pay the transaction fees and the required deposit.\nWhile transaction fees cannot be refunded, the deposit is returned when the DID is deleted from the blockchain: this is to incentivise users to clean the data from the blockchain once such data is not needed anymore."),(0,a.kt)("p",null,"By design, DID signatures and Substrate signatures are decoupled, meaning that the encoded and signed DID creation operation can then be signed and submitted by a different KILT account than the DID subject. This opens the path for a wider range of use cases in which, for instance, a service provider might be willing to offer a DID-as-a-Service option for its customers."),(0,a.kt)("p",null,"An example of a full DID is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e\n")),(0,a.kt)("p",null,"Here, there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"light:")," component, which indicates that the DID is a full DID and that the keys associated with it must not be derived from the DID identifier but must be retrieved from the KILT blockchain."),(0,a.kt)("p",null,"Beyond an authentication key, an encryption key, and service endpoints, a full DID also supports an ",(0,a.kt)("strong",{parentName:"p"},"attestation key"),", which must be used to write CTypes and attestations on the blockchain, and a ",(0,a.kt)("strong",{parentName:"p"},"delegation key"),", which must be used to write delegations on the blockchain."),(0,a.kt)("h3",{id:"creating-and-anchoring-a-full-did"},"Creating and anchoring a full DID"),(0,a.kt)("p",null,"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key, by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"FullDidCreationBuilder")," class."),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\n\nimport {\n  BlockchainUtils,\n  BlockchainApiConnection\n} from '@kiltprotocol/chain-helpers'\nimport { init, disconnect } from '@kiltprotocol/core'\nimport {\n  FullDidCreationBuilder,\n  DemoKeystore,\n  SigningAlgorithms,\n  FullDidDetails\n} from '@kiltprotocol/did'\nimport { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'\n\nexport async function main(\n  keystore: DemoKeystore,\n  kiltAccount: KeyringPair,\n  // Generate seed for the authentication key.\n  authenticationSeed: string,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n): Promise<FullDidDetails> {\n  // Initialise connection to the public KILT test network and get the api object.\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n  const { api } = await BlockchainApiConnection.getConnectionOrConnect()\n\n  // Ask the keystore to generate a new keypair to use for authentication.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    seed: authenticationSeed,\n    alg: SigningAlgorithms.Ed25519\n  })\n\n  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.\n  // The submitter account parameter, ensures that only an entity authorised by the DID subject\n  // can submit the extrinsic to the KILT blockchain.\n  const fullDid = await new FullDidCreationBuilder(api, {\n    publicKey: authenticationKeyPublicDetails.publicKey,\n    type: VerificationKeyType.Ed25519\n  }).consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {\n    await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {\n      reSign: true,\n      resolveOn\n    })\n  })\n\n  await disconnect()\n  if (!fullDid) {\n    throw 'Could not find the DID just created.'\n  }\n  return fullDid\n}\n"),(0,a.kt)("p",null,"If additional keys or service endpoints are to be specified, then they can be batched into the builder before building the creation transaction."),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\nimport {\n  BlockchainUtils,\n  BlockchainApiConnection\n} from '@kiltprotocol/chain-helpers'\nimport { init, disconnect } from '@kiltprotocol/core'\nimport {\n  DemoKeystore,\n  SigningAlgorithms,\n  EncryptionAlgorithms,\n  FullDidDetails,\n  FullDidCreationBuilder\n} from '@kiltprotocol/did'\nimport {\n  SubscriptionPromise,\n  VerificationKeyType,\n  EncryptionKeyType\n} from '@kiltprotocol/types'\n\nexport async function main(\n  keystore: DemoKeystore,\n  kiltAccount: KeyringPair,\n  // Generate seed for the authentication key.\n  authenticationSeed: string,\n  encryptionSeed: string,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n): Promise<FullDidDetails> {\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n  const { api } = await BlockchainApiConnection.getConnectionOrConnect()\n\n  // Ask the keystore to generate a new keypair to use for authentication.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    seed: authenticationSeed,\n    alg: SigningAlgorithms.Ed25519\n  })\n\n  // Ask the keystore to generate a new keypar to use for encryption.\n  const encryptionKeyPublicDetails = await keystore.generateKeypair({\n    seed: encryptionSeed,\n    alg: EncryptionAlgorithms.NaclBox\n  })\n\n  const fullDid = await new FullDidCreationBuilder(api, {\n    publicKey: authenticationKeyPublicDetails.publicKey,\n    type: VerificationKeyType.Ed25519\n  })\n    .addEncryptionKey({\n      publicKey: encryptionKeyPublicDetails.publicKey,\n      type: EncryptionKeyType.X25519\n    })\n    .addServiceEndpoint({\n      id: 'my-service',\n      types: ['service-type'],\n      urls: ['https://www.example.com']\n    })\n    .consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {\n      await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {\n        reSign: true,\n        resolveOn\n      })\n    })\n\n  await disconnect()\n  if (!fullDid) {\n    throw 'Could not find the DID just created.'\n  }\n  return fullDid\n}\n"),(0,a.kt)("h2",{id:"updating-a-full-did"},"Updating a full DID"),(0,a.kt)("p",null,"Once anchored on the KILT blockchain, a full DID can be updated. For instance, the following snippet shows how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"FullDidUpdateBuilder")," to update the authentication key to a new ed25519 key and remove a service endpoint for a full DID."),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\n\nimport {\n  BlockchainUtils,\n  BlockchainApiConnection\n} from '@kiltprotocol/chain-helpers'\nimport {\n  DemoKeystore,\n  SigningAlgorithms,\n  FullDidDetails,\n  FullDidUpdateBuilder\n} from '@kiltprotocol/did'\nimport { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'\nimport { init, disconnect } from '@kiltprotocol/core'\n\nexport async function main(\n  keystore: DemoKeystore,\n  kiltAccount: KeyringPair,\n  authenticationSeed: string,\n  fullDid: FullDidDetails,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n): Promise<FullDidDetails> {\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n  const { api } = await BlockchainApiConnection.getConnectionOrConnect()\n\n  // Ask the keystore to generate a new keypair to use for authentication.\n  const newAuthenticationKeyPublicDetails = await keystore.generateKeypair({\n    seed: authenticationSeed,\n    alg: SigningAlgorithms.Ed25519\n  })\n\n  // Create and sign the DID operation to replace the authentication key with the new one generated.\n  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account\n  // authorised in this operation, Alice in this case.\n  const didUpdateExtrinsic = await new FullDidUpdateBuilder(api, fullDid)\n    .setAuthenticationKey({\n      publicKey: newAuthenticationKeyPublicDetails.publicKey,\n      type: VerificationKeyType.Ed25519\n    })\n    .removeServiceEndpoint('my-service')\n    .consume(keystore, kiltAccount.address)\n\n  // Submit the DID update tx to the KILT blockchain after signing it with the authorised KILT account.\n  await BlockchainUtils.signAndSubmitTx(didUpdateExtrinsic, kiltAccount, {\n    reSign: true,\n    resolveOn\n  })\n\n  // Get the updated DID Doc\n  const updatedDidDetails = await FullDidDetails.fromChainInfo(\n    fullDid.identifier\n  )\n  await disconnect()\n\n  if (!updatedDidDetails) {\n    throw `Could not find the updated DID ${fullDid.did}`\n  }\n  return updatedDidDetails\n}\n"),(0,a.kt)("h2",{id:"deleting-a-full-did"},"Deleting a full DID"),(0,a.kt)("p",null,"Once not needed anymore, it is recommended to remove the DID details from the KILT blockchain. The following snippet shows how to do it:"),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\n\nimport { BlockchainUtils } from '@kiltprotocol/chain-helpers'\nimport { KeystoreSigner, SubscriptionPromise } from '@kiltprotocol/types'\nimport { init, disconnect } from '@kiltprotocol/core'\nimport { DemoKeystore, DidChain, FullDidDetails } from '@kiltprotocol/did'\n\nexport async function main(\n  keystore: DemoKeystore,\n  kiltAccount: KeyringPair,\n  fullDid: FullDidDetails,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n) {\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n\n  // Create a DID deletion operation. We specify the number of endpoints currently stored under the DID because\n  // of the upper computation limit required by the blockchain runtime.\n  const endpointsCountForDid = await DidChain.queryEndpointsCounts(\n    fullDid.identifier\n  )\n  const didDeletionExtrinsic = await DidChain.getDeleteDidExtrinsic(\n    endpointsCountForDid\n  )\n\n  // Sign the DID deletion operation using the DID authentication key.\n  // This results in an unsigned extrinsic that can be then signed and submitted to the KILT blockchain by the account\n  // authorised in this operation, Alice in this case.\n  const didSignedDeletionExtrinsic = await fullDid.authorizeExtrinsic(\n    didDeletionExtrinsic,\n    keystore as KeystoreSigner<string>,\n    kiltAccount.address\n  )\n\n  await BlockchainUtils.signAndSubmitTx(\n    didSignedDeletionExtrinsic,\n    kiltAccount,\n    {\n      reSign: true,\n      resolveOn\n    }\n  )\n\n  await disconnect()\n}\n"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please note that once deleted, a full DID becomes unusable and cannot be created anymore, meaning that all credentials obtained with that DID must be re-obtained with a different one if needed."))),(0,a.kt)("h3",{id:"claiming-back-a-did-deposit"},"Claiming back a DID deposit"),(0,a.kt)("p",null,"As the creation of a full DID requires a deposit that will lock from the balance of the creation transaction submitter (which, once again, might differ from the DID subject), the deposit owner is allowed to claim the deposit back by deleting the DID associated with its deposit. This is the reason why full DID creation operations require the submitter to be included and signed by the DID subject: to make sure that only the DID subject themselves and the authorised account are ever able to delete the DID information from the chain."),(0,a.kt)("p",null,"Claiming back the deposit of a DID is semantically equivalent to deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require any interaction with the DID subject:"),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\n\nimport { DidChain } from '@kiltprotocol/did'\nimport { BlockchainUtils } from '@kiltprotocol/chain-helpers'\nimport { SubscriptionPromise, IDidIdentifier } from '@kiltprotocol/types'\nimport { init, disconnect } from '@kiltprotocol/core'\n\nexport async function main(\n  kiltAccount: KeyringPair,\n  didIdentifier: IDidIdentifier,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n) {\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n\n  // Generate the submittable extrinsic to claim the deposit back, by including the DID identifier for which the deposit needs to be returned and the count of service endpoints to provide an upper bound to the computation of the extrinsic execution.\n  const endpointsCountForDid = await DidChain.queryEndpointsCounts(\n    didIdentifier\n  )\n  const depositClaimExtrinsic = await DidChain.getReclaimDepositExtrinsic(\n    didIdentifier,\n    endpointsCountForDid\n  )\n\n  // The submission will fail if `aliceKiltAccount` is not the owner of the deposit associated with the given DID identifier.\n  await BlockchainUtils.signAndSubmitTx(depositClaimExtrinsic, kiltAccount, {\n    reSign: true,\n    resolveOn\n  })\n\n  await disconnect()\n}\n"),(0,a.kt)("h2",{id:"migrating-a-light-did-to-a-full-did"},"Migrating a light DID to a full DID"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"migration")," of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide. In the current version (v1) of the KILT DID protocol, a light DID of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS")," would become a full DID of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS"),". Note that the identifier of the two DIDs, apart from the initial ",(0,a.kt)("inlineCode",{parentName:"p"},"01")," sequence of the light DID, are equal since both DIDs are derived from the same KILT account."),(0,a.kt)("p",null,"Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID. This is by design, as it is assumed that the user had valid reasons to migrate the DID on the chain, and as on-chain DIDs offer greater security guarantees, KILT will reject light DID signatures even in case the original claim in the attestation was generated with that off-chain DID."),(0,a.kt)("p",null,"The following code shows how to migrate a light DID to a full DID. Attested claim presentations and verifications remain unchanged as adding support for DID migration does not affect the public API that the SDK exposes."),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\n\nimport {\n  DemoKeystore,\n  LightDidDetails,\n  SigningAlgorithms,\n  FullDidDetails\n} from '@kiltprotocol/did'\nimport { init, disconnect } from '@kiltprotocol/core'\nimport { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'\nimport { BlockchainUtils } from '@kiltprotocol/chain-helpers'\n\nexport async function main(\n  keystore: DemoKeystore,\n  kiltAccount: KeyringPair,\n  authenticationSeed: string,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n): Promise<FullDidDetails> {\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n\n  // Ask the keystore to generate a new keypair to use for authentication.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    seed: authenticationSeed,\n    alg: SigningAlgorithms.Ed25519\n  })\n\n  // create a light DID\n  const lightDidDetails = LightDidDetails.fromDetails({\n    authenticationKey: {\n      publicKey: authenticationKeyPublicDetails.publicKey,\n      type: VerificationKeyType.Ed25519\n    }\n  })\n\n  // Generate the DID migration extrinsic.\n  const migratedFullDid = await lightDidDetails.migrate(\n    kiltAccount.address,\n    keystore,\n    async (migrationTx) => {\n      // The extrinsic can then be submitted by the authorised account as usual.\n      await BlockchainUtils.signAndSubmitTx(migrationTx, kiltAccount, {\n        reSign: true,\n        resolveOn\n      })\n    }\n  )\n\n  await disconnect()\n  if (!migratedFullDid) {\n    throw 'Could not find the DID just migrated.'\n  }\n  return migratedFullDid\n}\n"),(0,a.kt)("h2",{id:"batching-multiple-operations-with-a-full-did"},"Batching multiple operations with a full DID"),(0,a.kt)("p",null,"Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.\nFor instance, a batch could include the creation of two different CTypes in the same operation. This would save the user one block time and one signature, as multiple extrinsics are batched and signed once, and they are submitted and executed in the same block. For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html"},"official Substrate documentation"),"."),(0,a.kt)("p",null,"An example of a batched creation of two CTypes using a ",(0,a.kt)("inlineCode",{parentName:"p"},"DidBatchBuilder")," is provided below."),(0,a.kt)(r.Z,{className:"language-js",mdxType:"CodeBlock"},"import { KeyringPair } from '@polkadot/keyring/types'\n\nimport {\n  DemoKeystore,\n  SigningAlgorithms,\n  FullDidCreationBuilder,\n  DidBatchBuilder\n} from '@kiltprotocol/did'\nimport { init, disconnect, CType } from '@kiltprotocol/core'\nimport { SubscriptionPromise, VerificationKeyType } from '@kiltprotocol/types'\nimport {\n  BlockchainUtils,\n  BlockchainApiConnection\n} from '@kiltprotocol/chain-helpers'\nimport { UUID } from '@kiltprotocol/utils'\n\nexport async function main(\n  keystore: DemoKeystore,\n  kiltAccount: KeyringPair,\n  resolveOn: SubscriptionPromise.ResultEvaluator = BlockchainUtils.IS_FINALIZED\n): Promise<void> {\n  await init({ address: 'wss://peregrine.kilt.io/parachain-public-ws' })\n  const { api } = await BlockchainApiConnection.getConnectionOrConnect()\n\n  // Ask the keystore to generate a new keypair to use for authentication.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    alg: SigningAlgorithms.EcdsaSecp256k1\n  })\n\n  const fullDid = await new FullDidCreationBuilder(api, {\n    publicKey: authenticationKeyPublicDetails.publicKey,\n    type: VerificationKeyType.Ecdsa\n  })\n    .setAttestationKey({\n      publicKey: authenticationKeyPublicDetails.publicKey,\n      type: VerificationKeyType.Ecdsa\n    })\n    .consumeWithHandler(keystore, kiltAccount.address, async (creationTx) => {\n      await BlockchainUtils.signAndSubmitTx(creationTx, kiltAccount, {\n        reSign: true,\n        resolveOn\n      })\n    })\n\n  // Create two random demo CTypes\n  const ctype1 = getRandomCType()\n  const ctype1CreationTx = await ctype1.getStoreTx()\n  const ctype2 = getRandomCType()\n  const ctype2CreationTx = await ctype2.getStoreTx()\n\n  // Create the DID-signed batch\n  const batch = await new DidBatchBuilder(api, fullDid)\n    .addMultipleExtrinsics([ctype1CreationTx, ctype2CreationTx])\n    .consume(keystore, kiltAccount.address)\n\n  // The authorised used submits the batch to the chain\n  await BlockchainUtils.signAndSubmitTx(batch, kiltAccount, {\n    reSign: true,\n    resolveOn\n  })\n\n  if (!(await ctype1.verifyStored()) || !(await ctype2.verifyStored())) {\n    throw 'One of the two CTypes has not been properly stored.'\n  }\n\n  await disconnect()\n}\n\nfunction getRandomCType(): CType {\n  // Random factor ensures that each created CType is unique and does not already exist on chain.\n  const randomFactor = UUID.generate()\n  return CType.fromSchema({\n    $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n    title: `CType ${randomFactor}`,\n    properties: {\n      name: {\n        type: 'string'\n      },\n      age: {\n        type: 'integer'\n      }\n    },\n    type: 'object'\n  })\n}\n"))}u.isMDXComponent=!0}}]);