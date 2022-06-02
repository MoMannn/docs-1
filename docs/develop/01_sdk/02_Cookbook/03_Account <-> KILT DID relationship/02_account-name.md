---
id: account-name
title: Query the Web3 name of an account
---

import CodeBlock from '@theme/CodeBlock';
import AccountWeb3NameQuery from '!!raw-loader!@site/code_examples/core_features/linking/03_account_web3name_query.ts';
import AccountWeb3NameQueryNoSDK from '!!raw-loader!@site/code_examples/core_features/linking/04_account_web3name_query_no_sdk.ts';

For accounts that have been linked to DIDs that have claimed a Web3 name, the linking feature opens up the way to a host of possibilities, e.g., showing the Web3 name of a collator's account on the [KILT stakeboard][kilt-stakeboard].

This section shows how to perform the account -> Web3 name querying both with and without the support of the KILT SDK.

## Querying without the KILT SDK

Querying the Web3 name for a given account without the SDK involves performing two different RPC calls to a KILT full node, as shown below.

<CodeBlock className="language-js">
  {AccountWeb3NameQuery}
</CodeBlock>

## Querying with the KILT SDK

Although the SDK still performs the same two RPC queries shown in the code snippets above, it hides the complexity from the user, who only needs to call a single function, as shown below.

<CodeBlock className="language-js">
  {AccountWeb3NameQueryNoSDK}
</CodeBlock>

:::info
A custom RPC endpoint is currently under development that would allow to reduce the number of calls from 2 to 1 for most of the DID-related lookups.
We will update this section with the new information once it has been released.
:::

[kilt-stakeboard]: https://stakeboard.kilt.io/