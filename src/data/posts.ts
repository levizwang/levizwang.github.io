import { html as aiValidityEn } from '../posts/AI/eval-validity-failure-modes.md';
import { html as aiJudgeEn } from '../posts/AI/agent-as-judge-vs-metric.md';
import { html as aiPlumbingEn } from '../posts/AI/plumbing-of-llm-evaluation.md';
import { html as aiValidityZh } from '../posts/AI/zh/eval-validity-failure-modes.md';
import { html as aiJudgeZh } from '../posts/AI/zh/agent-as-judge-vs-metric.md';
import { html as aiPlumbingZh } from '../posts/AI/zh/plumbing-of-llm-evaluation.md';
import { html as post1Content } from '../posts/MEV/MEV1:SolanaMEV_Technical_Analysis.md';
import { html as post2Content } from '../posts/MEV/MEV2:ControlPlane_Strategy_Scheduling_and_Configuration.md';
import { html as post3Content } from '../posts/MEV/MEV3:Inventory_Network_Wide_Token_Index.md';
import { html as post4Content } from '../posts/MEV/MEV4:Scout_Transaction_Monitoring_and_Parsing.md';
import { html as post5Content } from '../posts/MEV/MEV5:AMM_Pricing_and_Mathematical_Model.md';
import { html as post6Content } from '../posts/MEV/MEV6:StrategyArb_Cross_DEX_Arbitrage_Strategy.md';
import { html as post7Content } from '../posts/MEV/MEV7:Jito.md';
import { html as post8Content } from '../posts/MEV/MEV8:Risk_Risk_Control_and_Safety_Checks.md';
import { html as post9Content } from '../posts/Detailed_Explanation_of_Blockchain/Detailed_Explanation_of_Blockchain.md';
import agentImage from '../images/projects/Agent_eval.png';
import mev1Image from '../images/posts/MEV_img/MEV1.jpg';
import mev2Image from '../images/posts/MEV_img/MEV2.jpg';
import mev3Image from '../images/posts/MEV_img/MEV3.jpg';
import mev4Image from '../images/posts/MEV_img/MEV4.jpg';
import mev5Image from '../images/posts/MEV_img/MEV5.JPG';
import mev6Image from '../images/posts/MEV_img/MEV6.JPG';
import mev7Image from '../images/posts/MEV_img/MEV7.JPG';
import mev8Image from '../images/posts/MEV_img/MEV8.JPG';
import blockchainImage from '../images/posts/web3/web3.jpg';
import type { L } from '../i18n/lang';

export interface BlogPost {
  id: string;
  title: L;
  excerpt: L;
  content?: L;
  date: string;
  category: string;
  tags?: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'eval-validity',
    title: {
      en: 'Your Benchmark Is Lying to You: Validity Failure Modes in Agentic Eval Data',
      zh: '你的基准在骗你：智能体评测数据的有效性失效模式',
    },
    excerpt: {
      en: 'Generation is easy; validity is hard. The three quiet failure modes — guessability, prompt↔rubric leakage, judge noise — and how to defend against each.',
      zh: '生成很容易，有效性才难。三类安静的失效——可蒙性、题面↔rubric 泄漏、裁判噪声——以及对每一类的防御。',
    },
    content: { en: aiValidityEn, zh: aiValidityZh },
    date: 'Jun 12, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Agents', 'Synthetic Data'],
    image: agentImage,
  },
  {
    id: 'agent-as-judge',
    title: {
      en: 'Agent-as-Judge vs. a Metric You Wrote by Hand',
      zh: 'Agent-as-Judge 还是你手写的 Metric？一次诚实的对比',
    },
    excerpt: {
      en: 'An honest, measured comparison: LLM judge vs. a deterministic metric on precision, recall, agreement, cost, and latency — and how to choose per task.',
      zh: '一次诚实、可量化的对比：LLM 裁判 vs 确定性 metric，在准确率、召回、一致率、成本、时延上的较量——以及如何按任务选型。',
    },
    content: { en: aiJudgeEn, zh: aiJudgeZh },
    date: 'Jun 06, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'LLM-as-judge'],
  },
  {
    id: 'eval-plumbing',
    title: {
      en: 'The Plumbing of LLM Evaluation: Six Model Families on One Harness',
      zh: '大模型评测的「管道工程」：在一个 harness 上跑六个模型族',
    },
    excerpt: {
      en: 'Eval is infrastructure, not a script. File-output gaps, reasoning-only turns, judge hallucination, harness diversity, cost accounting — and an upstream OSS contribution.',
      zh: '评测是基础设施，不是脚本。文件输出缺口、只推理的回合、裁判幻觉、harness 多样性、成本核算——以及一次上游开源贡献。',
    },
    content: { en: aiPlumbingEn, zh: aiPlumbingZh },
    date: 'May 28, 2026',
    category: 'AI Evaluation',
    tags: ['LLM Eval', 'Infrastructure', 'Open Source'],
  },
  {
    id: '9',
    title: { en: 'Detailed Explanation of Blockchain', zh: '区块链详解' },
    excerpt: {
      en: 'Detailed explanation of blockchain, including its concepts, technology, and applications',
      zh: '区块链详解：概念、技术与应用。',
    },
    content: post9Content,
    date: 'Feb 04, 2026',
    category: 'Web3',
    tags: ['Web3', 'Blockchain'],
    image: blockchainImage,
  },
  {
    id: '8',
    title: { en: 'MEV8: Solana MEV Conclusion', zh: 'MEV8：Solana MEV 总结' },
    excerpt: {
      en: 'Conclusion of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
      zh: 'Solana MEV 系列总结：MEV 机器人、机会与风险。',
    },
    content: post8Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev8Image,
  },
  {
    id: '7',
    title: { en: 'MEV7: Jito & MEV Yield Farming', zh: 'MEV7：Jito 与 MEV 收益耕作' },
    excerpt: {
      en: 'Jito and MEV yield farming on Solana — getting your transaction included before competitors.',
      zh: 'Solana 上的 Jito 与 MEV 收益耕作——如何抢在对手之前让交易被打包。',
    },
    content: post7Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev7Image,
  },
  {
    id: '6',
    title: { en: 'MEV6: Solana MEV Industry Impact', zh: 'MEV6：Solana MEV 的行业影响' },
    excerpt: {
      en: 'Industry impact of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
      zh: 'Solana MEV 的行业影响：MEV 机器人、机会与风险。',
    },
    content: post6Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev6Image,
  },
  {
    id: '5',
    title: { en: 'MEV5: AMM Pricing & Math Model', zh: 'MEV5：AMM 定价与数学模型' },
    excerpt: {
      en: 'AMM pricing and the mathematical model behind cross-DEX arbitrage profit calculation.',
      zh: 'AMM 定价，以及跨 DEX 套利利润计算背后的数学模型。',
    },
    content: post5Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev5Image,
  },
  {
    id: '4',
    title: { en: 'MEV4: Scout — Transaction Monitoring', zh: 'MEV4：Scout —— 交易监控与解析' },
    excerpt: {
      en: 'Scout: monitoring and parsing the Solana transaction stream to discover opportunities.',
      zh: 'Scout：监控并解析 Solana 交易流以发现机会。',
    },
    content: post4Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev4Image,
  },
  {
    id: '3',
    title: { en: 'MEV3: Inventory — Network-Wide Token Index', zh: 'MEV3：Inventory —— 全网代币索引' },
    excerpt: {
      en: 'Inventory: building a network-wide token index as the backbone of an MEV searcher.',
      zh: 'Inventory：构建全网代币索引，作为 MEV 搜索器的骨架。',
    },
    content: post3Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev3Image,
  },
  {
    id: '2',
    title: { en: 'MEV2: Control Plane — Strategy Scheduling', zh: 'MEV2：控制面 —— 策略调度与配置' },
    excerpt: {
      en: 'The control plane: strategy scheduling and configuration for a Solana MEV bot.',
      zh: '控制面：Solana MEV 机器人的策略调度与配置。',
    },
    content: post2Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev2Image,
  },
  {
    id: '1',
    title: { en: 'MEV1: Solana MEV Technical Analysis', zh: 'MEV1：Solana MEV 技术解析' },
    excerpt: {
      en: 'Technical analysis of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
      zh: 'Solana MEV 技术解析：MEV 机器人、机会与风险。',
    },
    content: post1Content,
    date: 'Jan 20, 2026',
    category: 'Web3',
    tags: ['MEV', 'Blockchain'],
    image: mev1Image,
  },
];
