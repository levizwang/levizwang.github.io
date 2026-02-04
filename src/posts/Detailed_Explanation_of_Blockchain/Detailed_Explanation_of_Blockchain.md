# Detailed Explanation of Blockchain



## What is blockchain?

### Blockchain and Smart Contracts

Before delving into code, we need to understand the core essence of Web3:**the shift from "trusting people/institutions" to "trusting code/math"**.

- **Blockchain:**A decentralized append-only database (ledger). Its core features are**immutability**and**transparency**, demo website https://blockchaindemo.io/. 

Sources of trust in blockchain networks: 

<table><tbody>
<tr>
<td>

**Feature**

</td>
<td>

**Bitcoin (BTC)**

</td>
<td>

**Ethereum (ETH)**

</td>
<td>

**Solana (SOL)**

</td>
</tr>
<tr>
<td>

**Packer Identity**

</td>
<td>

Miner (winner of the computing power competition) 

</td>
<td>

Verifier (randomly assigned by the system)

</td>
<td>

Leader (rotating according to the schedule)

</td>
</tr>
<tr>
<td>

**Verify Engagement**

</td>
<td>

All nodes across the network independently verify

</td>
<td>

Random Committee + Final Network-wide Confirmation

</td>
<td>

Real-time voting of all network validators

</td>
</tr>
<tr>
<td>

**Consensus Threshold**

</td>
<td>

51% honest computing power ensures security

</td>
<td>

2/3 (66.7%) stake confirmed

</td>
<td>

2/3 (66.7%) stake confirmed

</td>
</tr>
<tr>
<td>

**Main risk points**

</td>
<td>

51% hashrate attack

</td>
<td>

1/3 of the staked amount leads to downtime/forking

</td>
<td>

1/3 of the staked amount leads to downtime

</td>
</tr>
</tbody></table>

- **Smart Contract:** "Automatically executable code" deployed on the blockchain. It is like a vending machine: as long as you insert the correct tokens and meet the conditions, it will surely execute the pre-set result, and no one can interfere.

```Solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleBank {
    address public owner = msg.sender; // 部署者即管理员

    // 只有管理员能执行的权限锁
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    // 存款：只要标记 payable，转账进来的钱就自动存入合约余额
    function deposit() public payable {}

    // 提现：将合约里的钱转给管理员
    function withdraw(uint256 amount) public onlyOwner {
        require(address(this).balance >= amount, "Balance low");
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed");
    }

    // 查询：查看合约现在存了多少钱
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // 快捷存款：直接往合约地址转账也能收钱
    receive() external payable { deposit(); }
}
```

Details can be learned throughhttps://ethereum.org/zh/

### **Web3 Hierarchy and Track Classification**-**L1/L2 (Infrastructure):** Settlement layer (Ethereum, Arbitrum, Base).

- **RPC (Communication Layer):** Gateway for front-end to communicate with the chain (Alchemy, Infura).

- **Wallet (Identity Layer):** User's private key management and signature tools (Metamask, WalletConnect).

<table><tbody>
<tr>
<td>

**Track Classification**

</td>
<td>

**Project Name**

</td>
<td>

**Project Introduction**

</td>
<td>

**Official Website**

</td>
</tr>
<tr>
<td rowspan="2">

**Layer 1 (Underlying Public Blockchain)**

</td>
<td>

**Ethereum**

</td>
<td>

The world's largest smart contract platform, the settlement layer and security cornerstone of Web3. 

</td>
<td>

[ethereum.org](https://www.google.com/url?sa=E&q=https%3A%2F%2Fethereum.org)

</td>
</tr>
<tr>
<td>

**Solana**

</td>
<td>

Renowned for high performance and low latency, it supports high-frequency trading and large-scale applications. 

</td>
<td>

[solana.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsolana.com)

</td>
</tr>
<tr>
<td rowspan="2">

**Layer 2 (Scaling Network)**

</td>
<td>

**Arbitrum / Optimism**

</td>
<td>

The mainstream scaling solution for Ethereum significantly reduces Gas fees while maintaining security. 

</td>
<td>

[arbitrum.io](https://www.google.com/url?sa=E&q=https%3A%2F%2Farbitrum.io)

</td>
</tr>
<tr>
<td>

**Base**

</td>
<td>

The L2 launched by Coinbase has extremely rapid ecosystem growth and is highly suitable for social and consumer applications. 

</td>
<td>

[base.org](https://www.google.com/url?sa=E&q=https%3A%2F%2Fbase.org)

</td>
</tr>
<tr>
<td rowspan="5">

**DeFi (Lending and Collateral)**

</td>
<td>

**Aave**

</td>
<td>

The world's largest decentralized lending protocol, supporting the collateralization and borrowing of multiple tokens. 

</td>
<td>

[aave.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Faave.com)

</td>
</tr>
<tr>
<td>

**Sky (原 MakerDAO)**

</td>
<td>

The issuer of lending and decentralized stablecoins (USDS/DAI), the central bank of DeFi. 

</td>
<td>

[sky.money](https://www.google.com/url?sa=E&q=https%3A%2F%2Fsky.money)

</td>
</tr>
<tr>
<td>

**Lido**

</td>
<td>

The largest liquid staking protocol (LSD), enabling staked ETH to maintain liquidity. 

</td>
<td>

[lido.fi](https://www.google.com/url?sa=E&q=https%3A%2F%2Flido.fi)

</td>
</tr>
<tr>
<td>

**Ondo Finance**

</td>
<td>

Tokenize real-world assets (such as US Treasury bonds, real estate, and gold) and introduce them into the blockchain

</td>
<td>

[ondo.finance](https://www.google.com/url?sa=E&q=https%3A%2F%2Fondo.finance%2F)

</td>
</tr>
<tr>
<td>

**Yearn Finance**

</td>
<td>

Automatically searches for the highest-yielding strategies in each lending or trading pool for users 

</td>
<td>

[yearn.fi](https://www.google.com/url?sa=E&q=https%3A%2F%2Fyearn.fi%2F)

</td>
</tr>
<tr>
<td rowspan="2">

**DEX (Decentralized Exchange)**

</td>
<td>

**Uniswap**

</td>
<td>

The pioneer of Automated Market Makers (AMM) and the DEX with the largest on-chain trading volume. 

</td>
<td>

[uniswap.org](https://www.google.com/url?sa=E&q=https%3A%2F%2Funiswap.org)

</td>
</tr>
<tr>
<td>

**Curve**

</td>
<td>

A DEX specializing in stablecoin trading, renowned for its extremely low slippage and efficient algorithms. 

</td>
<td>

[curve.fi](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcurve.fi)

</td>
</tr>
<tr>
<td rowspan="2">

**Oracle & Index (Infrastructure)**

</td>
<td>

**Chainlink**

</td>
<td>

Decentralized oracle securely inputs real-world data (such as prices) onto the blockchain.

</td>
<td>

[chain.link](https://www.google.com/url?sa=E&q=https%3A%2F%2Fchain.link)

</td>
</tr>
<tr>
<td>

**The Graph**

</td>
<td>

A Web3 search engine that provides query and indexing services for on-chain data. 

</td>
<td>

[thegraph.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Fthegraph.com)

</td>
</tr>
<tr>
<td rowspan="2">

**NFT & Marketplace (Market)**

</td>
<td>

**OpenSea**

</td>
<td>

The world's most well-known comprehensive NFT trading market. 

</td>
<td>

[opensea.io](https://www.google.com/url?sa=E&q=https%3A%2F%2Fopensea.io)

</td>
</tr>
<tr>
<td>

**Blur**

</td>
<td>

An NFT marketplace designed specifically for professional traders, featuring extremely high operational efficiency and an Incentive Mechanism.

</td>
<td>

[blur.io](https://www.google.com/url?sa=E&q=https%3A%2F%2Fblur.io)

</td>
</tr>
<tr>
<td rowspan="2">

**Social & Identity (Social)**

</td>
<td>

**Farcaster**

</td>
<td>

Decentralized Social Protocol, currently the Web3 social network with the most vibrant developer community.

</td>
<td>

[farcaster.xyz](https://www.google.com/url?sa=E&q=https%3A%2F%2Ffarcaster.xyz)

</td>
</tr>
<tr>
<td>

**ENS**

</td>
<td>

Ethereum Name Service simplifies complex addresses into ` name.eth `. 

</td>
<td>

[ens.domains](https://www.google.com/url?sa=E&q=https%3A%2F%2Fens.domains)

</td>
</tr>
<tr>
<td rowspan="2">

**DePIN & Storage (Storage)**

</td>
<td>

**Filecoin**

</td>
<td>

Decentralized storage network, which transforms idle hard drive space into secure storage services.

</td>
<td>

[filecoin.io](https://www.google.com/url?sa=E&q=https%3A%2F%2Ffilecoin.io)

</td>
</tr>
<tr>
<td>

**Arweave**

</td>
<td>

Permanent Storage Protocol, one-time payment, data permanently stored on the blockchain. 

</td>
<td>

[arweave.org](https://www.google.com/url?sa=E&q=https%3A%2F%2Farweave.org)

</td>
</tr>
</tbody></table>

### DeFI and AI

**DeFi**is an abbreviation for**Decentralized Finance** (decentralized finance). It refers to an ecosystem of financial services built on blockchain networks (primarily Ethereum). 

Simply put, the goal of DeFi is to replace traditional financial intermediaries such as banks and brokerages through **smart contracts**(Smart Contracts), enabling users to directly engage in activities such as lending, trading, and investing, with**decentralized, permissionless, transparent, and open-source** characteristics. 

Currently, the most cutting-edge track is AI + DeFi, where AI addresses the issues of "decision-making efficiency" and "automation", and DeFi provides the systems of "decentralized clearing" and "value transfer".

<table><tbody>
<tr>
<td>

**Track/Direction**

</td>
<td>

**represents the project**

</td>
<td>

**Core Functions and Integration Points**

</td>
<td>

**Official Link**

</td>
</tr>
<tr>
<td>

**AI Agents and Automated Trading**

</td>
<td>

**Fetch.ai (ASI)**

</td>
<td>

Use AI agents to automate complex financial strategies (such as cross-chain arbitrage, automatic stop-loss). 

</td>
<td>

[https://fetch.ai/](https://www.google.com/url?sa=E&q=https%3A%2F%2Ffetch.ai%2F)

</td>
</tr>
<tr>
<td>

**AI-driven hedge fund**

</td>
<td>

**Numerai**

</td>
<td>

The world's first AI-driven decentralized hedge fund predicts the stock market through AI models submitted by data scientists. 

</td>
<td>

[https://numer.ai/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fnumer.ai%2F)

</td>
</tr>
<tr>
<td>

**Smart Contract Security Scan**

</td>
<td>

**0x0.ai**

</td>
<td>

Utilize AI to audit smart contract vulnerabilities in real-time, preventing DeFi projects from being hacked or becoming Ponzi schemes.

</td>
<td>

[https://0x0.ai/](https://www.google.com/url?sa=E&q=https%3A%2F%2F0x0.ai%2F)

</td>
</tr>
<tr>
<td>

**AI Intelligent Agent Trading**

</td>
<td>

**Spectral**

</td>
<td>

Allows users to create or use AI agents to conduct automated trading, credit scoring, and risk management on-chain. 

</td>
<td>

[https://www.spectral.finance/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.spectral.finance%2F)

</td>
</tr>
<tr>
<td>

**Forecast Market and Data**

</td>
<td>

**Ocean Protocol**

</td>
<td>

Provide data desensitization and trading required for AI training, and offer high-quality data support for DeFi prediction models. 

</td>
<td>

[https://oceanprotocol.com/](https://www.google.com/url?sa=E&q=https%3A%2F%2Foceanprotocol.com%2F)

</td>
</tr>
<tr>
<td>

**Decentralized computing power finance**

</td>
<td>

**Bittensor (TAO)**

</td>
<td>

Although it is the basic layer, its financial subnet (Subnet) uses AI for price prediction and quantitative trading analysis.

</td>
<td>

[https://bittensor.com/](https://www.google.com/url?sa=E&q=https%3A%2F%2Fbittensor.com%2F)

</td>
</tr>
<tr>
<td>

**Tokenization of AI Resources**

</td>
<td>

**SAHARA**

</td>
<td>

Encapsulate the resources involved in the entire AI process, with providers profiting and users paying.

</td>
<td>

https://saharaai.com/zh/

</td>
</tr>
</tbody></table>

---

## What is currency?

In the world of Web3, "coins" are not only currency but also **shares of protocols, fuel for systems, and even carriers of culture**. 

### What is "Crypto"? (What is Crypto?)

From a technical perspective, a "coin" (cryptocurrency/token) is a **digital entry**on a blockchain ledger.

- **Native Coins (Coins):**The essential "fuel" for the underlying operation of the blockchain. For example:**ETH** is the gas fee of the Ethereum network, without which the network cannot operate.

- **Tokens:**Application assets built on existing chains. For example, a token issued by a lending protocol, holding which allows participation in voting (governance rights) or receiving dividends.**Essentially, cryptocurrency is the digitalization of "ownership".** Previously, ownership was stored in the company's database, but now it is stored in your private key.

### What is "cryptocurrency trading"? (What is Trading?)

"Cryptocurrency trading" is essentially **a game of speculation on future expectations**. Due to the 24/7 non-stop trading, lack of price limits, and cross-border flow in the cryptocurrency market, it has become the most sensitive and volatile speculative market in terms of global liquidity. 

<table><tbody>
<tr>
<td>

</td>
<td>

</td>
</tr>
</tbody></table>

- **Bullish Logic:** Believes that technology will change the world, or that there will be more people to take over. 

- **Short Logic:** Believes that the bubble is too large or the project itself has no value.

### Where to trade cryptocurrency 

- CEX (Centralized Exchanges) —— Centralized Exchange

**Features:** Similar to a stock exchange, it is operated by a specialized company, requires Know Your Customer (KYC) verification, has funds held in custody by the platform, and has a low operational threshold.

<table><tbody>
<tr>
<td>

**Platform Name**

</td>
<td>

**Industry Status**

</td>
<td>

**Features**

</td>
<td>

**Official Website Address**

</td>
</tr>
<tr>
<td>

**Binance (币安)**

</td>
<td>

Number One in the World

</td>
<td>

It has the largest trading volume, the most comprehensive range of asset types, and an extremely strong ecosystem (BSC). 

</td>
<td>

[binance.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.binance.com)

</td>
</tr>
<tr>
<td>

**Coinbase**

</td>
<td>

Compliance Benchmark

</td>
<td>

US listed companies, with the highest level of compliance, are the main channel for institutional funds to enter the market.

</td>
<td>

[coinbase.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.coinbase.com)

</td>
</tr>
<tr>
<td>

**OKX (Ouyi)**

</td>
<td>

Technological Leadership

</td>
<td>

Web3 wallet is the best, and derivatives trading (contracts) is very smooth.

</td>
<td>

[okx.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.okx.com)

</td>
</tr>
<tr>
<td>

**Bybit**

</td>
<td>

Derivatives Giant

</td>
<td>

Focuses on contract trading and copy trading, with excellent user experience. 

</td>
<td>

[bybit.com](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.bybit.com)

</td>
</tr>
</tbody></table>

- DEX (Decentralized Exchanges) —— Decentralized Exchange

**Features:** Based on smart contracts, no registration is required, and assets are stored in users' own wallets. They are the cornerstone of DeFi.

<table><tbody>
<tr>
<td>

**Platform Name**

</td>
<td>

**Core Network**

</td>
<td>

**Features**

</td>
<td>

**Official Website Address**

</td>
</tr>
<tr>
<td>

**Uniswap**

</td>
<td>

Ethereum / L2

</td>
<td>

Industry standard, invented the AMM (Automated Market Maker) mechanism.

</td>
<td>

[app.uniswap.org](https://www.google.com/url?sa=E&q=https%3A%2F%2Fapp.uniswap.org)

</td>
</tr>
<tr>
<td>

**Jupiter**

</td>
<td>

**Solana**

</td>
<td>

An aggregator in the Solana ecosystem, offering an excellent experience and extremely low transaction costs.

</td>
<td>

[jup.ag](https://www.google.com/url?sa=E&q=https%3A%2F%2Fjup.ag)

</td>
</tr>
<tr>
<td>

**PancakeSwap**

</td>
<td>

BSC (Binance Chain)

</td>
<td>

With low transaction fees, it is the largest trading platform on the BSC chain.

</td>
<td>

[pancakeswap.finance](https://www.google.com/url?sa=E&q=https%3A%2F%2Fpancakeswap.finance)

</td>
</tr>
<tr>
<td>

**Aerodrome**

</td>
<td>

**Base**

</td>
<td>

Currently the fastest-growing liquidity hub on L2 (Base).

</td>
<td>

[aerodrome.finance](https://www.google.com/url?sa=E&q=https%3A%2F%2Faerodrome.finance)

</td>
</tr>
<tr>
<td>

**Curve**

</td>
<td>

Multi-chain

</td>
<td>

Focused on stablecoin trading with extremely low slippage, it is the top choice for DeFi deep players. 

</td>
<td>

[curve.fi](https://www.google.com/url?sa=E&q=https%3A%2F%2Fcurve.fi)

</td>
</tr>
</tbody></table>

### Market Hierarchy: Primary Market vs Secondary Market

- Primary Market (Primary Market) —— "Original Shares and Seed Round"

    - **Definition:** The stage before the token is officially listed on major exchanges (such as Binance, OKX).

    - **Form:** ICO (Initial Coin Offering), IDO (Initial DEX Offering), or a newly deployed contract on-chain (e.g., Uniswap/Pump.fun).

    - **Features:** High threshold (requires the ability to operate wallets and read on-chain data), extremely high risk (could potentially go to zero instantly), and extremely large return potential (opportunities for 100-fold or 1000-fold returns often arise here).

    - **Commonly known as:** "Chongtu Dog", "Wanlianshang".

- Secondary Market (Secondary Market) —— "Stock Market Trading"

    - **Definition:** The token has been listed on large centralized exchanges (CEX), and ordinary users can directly purchase it with stablecoins (such as USDT).

    - **Features:** Good liquidity, relatively high security (the exchange has already screened projects for you), and relatively smaller fluctuations compared to the primary market.

### Token Classification and Hype Logic (Why do they pump?)

#### A. Value Coins / Mainstream Coins (Value Coins)

- **Represents:** BTC (Bitcoin), ETH (Ethereum), SOL. 

- **What to invest in:****Macro narrative and consensus**. 

    - What is hyped about BTC are "digital gold", "inflation resistance", and "institutional asset allocation".

    - ETH/SOL is speculated on "the prosperity of the public chain ecosystem", "the number of developers", and "network transaction fee revenue".

- **Driving Forces:** Entry of large institutions such as BlackRock, Fed rate cuts, and major technological upgrades. 

#### B. Track Coins / Utility Coins

- **Represents:** LINK (Oracle), AAVE (Lending), ARB (L2 Scaling). 

- **What to focus on:****Project Quality and Business Data**. 

    - Look at TVL (Total Value Locked), look at protocol revenue, look at partnerships (e.g., LINK's collaboration with SWIFT).

- **Driving Forces:** Business growth, fundamental improvement, and inelastic demand in the industry. 

#### C. Meme Coins —— "Emotional Coins"

- **Represents:** DOGE (Dogecoin), PEPE, SHIB, and various recently popular meme coins. 

- **What to invest in:****Attention and Emotion (Attention Economy)**. 

    - This type of coin usually **has no actual technical value**, relying entirely on community consensus, cultural resonance, and viral spread. 

- **Driving Forces:** Musk's tweets, the outbreak of a certain social hot topic, and the promotion by the community's "spiritual leader". 

- **Logic:** As long as there are enough buyers, it has value. What is being hyped is "communication studies" rather than "finance". 

<table><tbody>
<tr>
<td>

Category

</td>
<td>

Core Logic

</td>
<td>

Risk Level 

</td>
<td>

Key to Success

</td>
</tr>
<tr>
<td>

**Mainstream Coins**

</td>
<td>

Macro cycle, consensus

</td>
<td>

Medium 

</td>
<td>

Patience, judgment of cycles

</td>
</tr>
<tr>
<td>

**Value Coin**

</td>
<td>

Technological innovation, project quality

</td>
<td>

Medium-high 

</td>
<td>

Industry in-depth research, fundamental analysis

</td>
</tr>
<tr>
<td>

**Meme Coin**

</td>
<td>

Emotion, popularity, traffic

</td>
<td>

Extremely High

</td>
<td>

Social media sensitivity, luck

</td>
</tr>
</tbody></table>

> Risk Warning and Disclaimer: 
> 
> 1. **Survivorship bias:** All you hear are the myths of "100x coins," but in reality, 99% of projects in the primary market will go to zero within 48 hours.
> 
> 2. **Attention is a scarce resource:** Meme coins rise quickly because they capture the attention of the entire network, and once the hype shifts, the decline is astonishingly rapid.
> 
> 3. **Technology vs. Emotion:**Web3 is both the frontier of technology and a laboratory of human nature. Before getting involved, figure out which part of the money you're making - is it the money from**industry growth**, or the money from**others' emotional fluctuations**?
> 
> 

---

## What is DAO?

### Core Definition: From "Algorithmic Autocracy" to "Protocol Co-governance"

Among traditional social media giants (such as X or Facebook), the platform's rules (such as traffic distribution, content moderation standards, profit-sharing) are determined by the company's senior management, and users are merely passive "data producers".

In **decentralized social DAO (Decentralized autonomous organization)**, the platform is a set of**open-source protocols** running on the blockchain. All rules are written in smart contracts, and any major logical changes must be approved through community voting. 

### Multi-Role Collaboration Model in DAO

In a social DAO, participants are assigned different governance weights based on their contribution types: 

#### A. Content Contributors (Creators): The Source of Value

- **Traditional Model:** Creators are subject to the platform's algorithms, facing the risk of demotion or account suspension at any time, and the platform takes the lion's share of the revenue.

- **DAO Model:**Creators earn**governance tokens**rewards by publishing high-quality content.

    - **Rights:** They not only own the content (stored in IPFS in the form of NFTs), but also have voting rights. 

    - **Example:** Creators can initiate proposals to request changes to the "reward algorithm for high-quality content" to ensure that long-form authors receive higher returns than sensationalist headline clickbait. 

#### B. Content Moderators: Guardians of the Community

- **Traditional model:** The moderation criteria are black-boxed, relying on outsourced teams or AI for forced deletion.

- **DAO Model:** The right to moderate is crowdsourced by the community.

    - **Mechanism:** Auditors are members who hold tokens. If a piece of content is reported for violation, the DAO will initiate a mini-arbitration, where multiple auditors will vote according to the Community Charter.

    - **Incentives:** Auditors who accurately enforce the rules will receive token rewards; if an auditor abuses their power, the tokens they have staked will be deducted. This "economic incentive + game theory" replaces administrative orders. 

#### C. Content Consumers: Shareowners of the platform

- **Traditional Model:** Users are the "product," and their attention is sold to advertisers.

- **DAO Model:** Users are "sovereign individuals".

    - **Data Sovereignty:**When users log in via wallets such as**MetaMask**, their follower lists and interaction data follow the user, not the platform.

    - **Decision-making Power:** Users can vote on whether the platform should introduce advertisements, or decide whether advertising revenue should go into the public Treasury or be distributed to all active users.

### DAO's Closed-loop Operation: Proposals, Voting, and Automatic Execution

When this social platform needs to be upgraded (for example: planning to introduce a new video encoding format), the process is as follows: 

1. **Initiate a Proposal:** Any member holding the minimum threshold of tokens submits a proposal on the governance dashboard (e.g., Snapshot). 

2. **Community Debate:** Members discuss the impact of the proposal on system Gas fees and storage costs (IPFS) in a decentralized forum.

3. **On-chain Voting (Voting):**Members use tokens to vote. This process is transparent and immutable, with data recorded on **Base** and other blockchains.

4. **Automatic Execution (Execution):**If the vote passes,**the smart contract (Smart Contract)**will automatically trigger code updates after a preset time, or allocate R&D funds from**the treasury**. The entire process does not require anyone's "signature approval". 

---

## Project Development Case

The above has covered what blockchain is, what a cryptocurrency is, how to trade cryptocurrencies, and what a DAO is, but it still remains at the "greenhorn" stage. As those with a technical background, the following is a tutorial on how to "manipulate the market," taking a decentralized lending project as an example. 

### Backend and Contract Layer

In Web3, the backend is split into **on-chain logic (smart contracts)**,**off-chain data (database) and middleware (indexer)**. 

#### Step 1: Configure the environment

- **Introduction:** Foundry is a smart contract development toolchain written in Rust (similar to gcc), which uses `forge` for compilation, testing, and deployment. Its biggest feature is that it uses Solidity to write all test scripts without the need to switch to JS/TS.[Web3 开发极速引擎Foundry](https://fintopia.feishu.cn/wiki/JIfuwhQxSiqMGZkx87WcjLQunmc)

- **Core Code:**

```Bash
# 初始化并运行模糊测试 (Fuzz Testing)
forge init lending_pool
forge test --match-test testFuzz_Deposit -vvvv
```

#### Step 2: Write a contract

The core of the lending protocol is asset security. To avoid rewriting complex transfer logic, we directly inherit from **OpenZeppelin** library. It is like a bulletproof-tested template that ensures the security of token handling (ERC20) and prevents hackers from repeatedly withdrawing funds (ReentrancyGuard). 

```JavaScript
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

function deposit(uint256 amount) external nonReentrant {
    // 使用 OpenZeppelin 标准接口安全转账
    IERC20(usdc).transferFrom(msg.sender, address(this), amount);
    userBalances[msg.sender] += amount; // 更新账本
}
```

#### Step 3: Deploy the contract

Once the code is written, it needs to be "mounted" somewhere. We choose **Base** Chain, which is currently the most active Ethereum L2. Deploying here, the gas fee for a user to deposit a sum of money may be less than a dime, while the security level is on par with Ethereum.

```Bash
forge create --rpc-url base_sepolia --private-key $KEY SimpleLending
```

Here we will introduce the deployment of contracts, which is crucial for understanding the operation of on-chain contracts!

1. What does it look like after deployment? (From code to bytecode) 

    Solidity code (human-readable text) is processed by a compiler before deployment and becomes a string of hexadecimal **bytecode (Bytecode)**. 

    - **On-chain process:** When you click "Deploy", you are actually sending a special transaction, and the `data` field of the transaction packages these bytecodes.

    - **Storage Status:**After successful deployment, the blockchain will allocate a**specific address**(e.g., `0x123... `) on the ledger for your contract. This address does not store the `.sol `source file, but only stores this **binary code**. 

2. Why can it be called? (Execution logic of EVM)

    Blockchain is like a distributed supercomputer (Ethereum Virtual Machine, EVM). When you call a contract, the underlying logic is as follows:

    - **Instruction Set:** Every two characters in the binary code (such as `60` representing PUSH1, `01` representing ADD) are instructions for the EVM.

    - **Entry Identification:**Each function generates a unique**"Function Selector" (Selector)**(e.g., `deposit() `corresponds to `0xd0e30db0 `). 

3. ABI: The "Translator" between the Frontend and the Blockchain

    ABI (Application Binary Interface) is the**specification of the contract**. 

    - **Why do we need ABI?** Because the blockchain is full of `0xaf32...` machine code like this, and the front end has no idea which ByteDance corresponds to which function.

    - **Interaction process:**1.**Explanation:** The front-end library (such as Viem) reads the ABI and knows that the `deposit` function requires a `uint256` parameter.

        2. **Encoding:** It encodes `deposit(100)` into a hexadecimal `data` according to the standard format.

        3. **Submit:** Wallet (MetaMask) sends this `data` to the contract address.

        4. **Execution:** After the contract is received, it is matched to the corresponding function instruction and executed. 

### Frontend and Interaction Layer

#### Step 4: Identity Verification 

Web3 has no account passwords, **MetaMask** is the user's pass. It is the guardian of the user's private key and the only tool for signing transfer authorization. 

```Plain Text
const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
// 用户点击同意，前端拿到钱包地址
```

#### Step 5: Contract Interaction

After connecting the wallet, the front end needs to communicate with the contract. You can use **Wagmi & Viem**. This combination is like a "translator" between the web page and the blockchain, converting React click events into on-chain transaction requests. 

```JavaScript
const { writeContract } = useWriteContract();
// 绑定按钮：点击即调用 Base 链上的 deposit 函数
<button onClick={() => writeContract({ address: CONTRACT_ADDR, abi: ABI, functionName: 'deposit', args: [100] })}>
  存入 100 USDC
</button>
```

#### Step 6: Decentralization of static assets

To fully decentralize the project, the project's icons, legal documents, and even front-end code packages will be uploaded to **IPFS**. It ensures that once files are published, no one can delete them like deleting a database; its differences from traditional storage are as follows:

- **HTTP (Addressing and Finding Path):** Tells the computer which server (IP Address) to find the file on. If the server is shut down or the file is deleted, the link becomes invalid (404). 

- **IPFS (addressing to find content):** Tells the computer that I'm looking for a file with content hash `Qm...`. As long as any node in the network stores this file, you can obtain it. (Address such as `ipfs://QmProtocolRules...`, addressed via hash and also tamper-proof)

> Who pays for IPFS? (Economic Model)
> 
> **The IPFS protocol itself does not include a "payment" function.** This means it does not, like blockchain, mandate paying nodes. 
> 
> A. The party storing the data pays (the current common practice)
> 
> In your lending project, **you as the developer are the payer**. 
> 
> - **Logic:** You want your front-end code and metadata to be always online, so you will pay a commercial company (such as Pinata).
> 
> - **Cost:** Usually billed based on storage capacity and data volume (similar to SaaS services). For example, 1GB of data costs a few dollars per month.
> 
> B. Those who use data contribute resources (bandwidth payment)
> 
> If a file is extremely popular (such as the image of a popular NFT) and has been downloaded by 1 million people worldwide, and all 1 million people have this cache on their computers, then when the 1,000,001st person downloads it, they will download it in segments from the computers of these 1 million people. 
> 
> - **Cost:**These users pay for their own** electricity bills, internet fees, and hard drive wear and tear**. 
> 
> 

### Efficiency Optimization 

Reading data directly from the chain is very slow, and we need a "caching and indexing" mechanism.

#### Step 7: Query Speed Optimization

When users want to view "all my borrowing records in the past month", directly querying the blockchain will cause it to freeze. We deployed a **Subgraph**, which acts like a clerk, constantly monitoring the `Borrow` events thrown by the contract and organizing them into an efficient GraphQL database.

- **Implementation:** Define the data model and listen for on-chain events.

- **Code (Mapping):**

```TypeScript
export function handleBorrow(event: BorrowEvent): void {
  let record = new BorrowRecord(event.transaction.hash.toHex());
  record.amount = event.params.amount;
  record.save(); // 存入索引库，前端秒开
}
```

#### Step 8: Project Speed Optimization

Not all data in the project needs to be put on the blockchain (it's too expensive and slow), so we can adopt**a hybrid on-chain strategy**: asset changes (money) are stored on the Base chain; while users' personalized settings (such as avatars, risk reminder switches) are stored in**Supabase**. 

```TypeScript
await supabase.from('settings').update({ notify_on_liquidation: true }).eq('address', userAddr);
// 无需支付 Gas，即刻保存用户配置
```

## Blockchain + AI's Ultimate Form: Metaverse

If **AI**is the industrial revolution of productivity,**blockchain**is the social transformation of relations of production, then**the metaverse**is the**ultimate physical space (3D Internet)** resulting from the combination of the two. 

### Redefining the Metaverse: It's Not Just VR Glasses

The Metaverse is not a game (such as Genshin Impact), nor is it a hardware (such as Apple Vision Pro). It is **the form of the next generation of the Internet**: a persistent, shared, three-dimensional virtual world with an independent economic system. In this space: 

- **AI provides "life":** Filling with endless content and intelligent interaction.

- **Blockchain provides "order":** Ensures asset ownership, identity uniqueness, and economic settlement.

---

### The "Chemical Reaction" of Blockchain and AI in the Metaverse 

#### A. AI: Infinite Content Producer (Generative Power)

The metaverse requires massive amounts of data and scenarios. If relying on manual modeling, the cost is extremely high and the update is slow. 

- **Role of AI:** Through generative AI (AIGC), the metaverse can achieve "speak and it shall be done." You simply say "I need a Cyberpunk-style coffee shop," and AI will generate 3D architecture, background music, and NPCs in real time.

- **Intelligent NPC:** The inhabitants of the virtual world are no longer rigid dialogue scripts, but AI agents (AI Agents) connected to large models, who have their own personalities, memories, and goals.

#### B. Blockchain: The Steel Armor of Digital Assets (Value Carrier)

Without blockchain, the metaverse is just a large-scale centralized game.

- **Asset Ownership Confirmation (NFT):**The ownership of clothes, land, or artworks you purchase in the metaverse is recorded on**blockchains** such as Base, rather than in a company's database. Even if the platform shuts down, your assets will still exist.

- **Interoperability:** Relying on blockchain standards, the sword you purchased in Space A can be brought into Space B for use. This "cross-border transfer" is the key to the metaverse becoming "one world".

- **Economic Settlement:** All transactions are settled instantly through smart contracts, without the need for real-world bank intervention.

---

### The Final Form of the Metaverse: The Collapse of Digital and Reality 

The ultimate form of the metaverse is not to make humans "completely abandon reality", but **the deep integration of the real world and the digital world (Hyper-Reality)**. 

#### Form 1: Complete equivalence of economic value

In its final form, professions in the metaverse (such as digital architects, virtual auditors, DAO governance officers) will become mainstream occupations. Tokens earned in the virtual world can seamlessly purchase real-world bread, and the valuation of digital assets will surpass that of physical assets. 

#### Form 2: Sovereign Individuals and Self-Organizing Societies (the Pinnacle of DAO)

The metaverse is no longer dominated by any single tech giant (such as Meta or Google). It is a federation composed of countless **DAOs**. 

- The rules of each region are jointly determined by the residents of that region through voting. 

- AI is responsible for performing tedious administrative tasks (automatic taxation, automatic facility maintenance), while humans are responsible for creativity, social interaction, and decision-making.

#### Form III: Digital Immortality and Memory Blockchainization

Through AI, one can learn a person's behavioral habits and, in combination with blockchain, store their key life data (SBT/Soulbound Token). Even after the physical body disappears, the person's "digital avatar" can still continue to exist in the metaverse and participate in family decision-making based on the "will agreement" they left behind.

