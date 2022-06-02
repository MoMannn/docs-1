---
id: web3name-release
title: Release a Web3 name
---

import CodeBlock from '@theme/CodeBlock';
import Release from '!!raw-loader!@site/code_examples/core_features/web3names/04_release.ts';
import ReclaimDeposit from '!!raw-loader!@site/code_examples/core_features/web3names/05_reclaim_deposit.ts';

Whenever the Web3 name is not needed anymore, either the DID owner or the deposit payer can release it, with the previously reserved deposit going back to the original payer.

In the case of the DID owner willing to release the Web3 name, the following snippet provides a reference implementation on how to achieve that.

<CodeBlock className="language-js">
  {Release}
</CodeBlock>

On the other hand, releasing the Web3 name by the deposit payer does not require the signature of the DID owner, meaning that a regular signed extrinsic can be submitted to the KILT blockchain, as shown below.

<CodeBlock className="language-js">
  {ReclaimDeposit}
</CodeBlock>