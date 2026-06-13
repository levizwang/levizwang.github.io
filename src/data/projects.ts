import mev1Image from '../images/projects/SOLANA_MEV.jpg';
import agentImage from '../images/projects/Agent_eval.png';
import ragImage from '../images/projects/RAG_eval.jpg';
import type { L } from '../i18n/lang';

export interface Project {
  id: string;
  name: L;
  description: L;
  image?: string;
  link?: string;
  tag?: L;
}

export const projects: Project[] = [
  {
    id: 'eval-platform',
    name: { en: 'LLM Evaluation Platform & Agent-as-Judge', zh: '大模型评测平台与 Agent-as-Judge' },
    description: {
      en: 'Company-wide eval platform with rule-based + LLM-as-a-judge metrics for regression, classification, RAG, and agents. Includes a controlled agent-as-judge vs. hand-written-metric study (precision / recall / agreement / cost / latency).',
      zh: '公司级评测平台，规则 + LLM-as-a-judge 指标覆盖回归、分类、RAG 与智能体；含一次受控的 agent-as-judge 与人写 metric 对照实验（准确率 / 召回 / 一致率 / 成本 / 时延）。',
    },
    image: agentImage,
    link: '/Agentkit.html',
    tag: { en: 'Evaluation', zh: '评测' },
  },
  {
    id: 'syndata-pipeline',
    name: { en: 'Synthetic Eval-Data Pipeline', zh: '合成评测数据流水线' },
    description: {
      en: 'Multi-agent pipeline that turns expert workspaces into hard, evidence-grounded agentic exam items (finance / consulting / law). Cross-vendor model independence, evidence ledgers, and anti-leakage / anti-guessing validity safeguards.',
      zh: '多智能体流水线，将专家工作区转化为高难度、以证据为依据的智能体考题（金融 / 咨询 / 法律）。跨厂商模型独立、证据账本、防泄漏 / 防蒙的有效性保障。',
    },
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'harbor-eval',
    name: { en: 'Harbor — Eval Execution Framework', zh: 'Harbor — 评测执行框架' },
    description: {
      en: 'Operated and extended a containerized eval framework across 6 model families × 5 agent harnesses (Claude Code, OpenHands, Codex, Stirrup, OpenRouter). Contributed a Stirrup-agent integration upstream via a reviewed pull request.',
      zh: '操作并扩展容器化评测框架，覆盖 6 个模型族 × 5 种 agent harness（Claude Code、OpenHands、Codex、Stirrup、OpenRouter）。以经 review 的 PR 向上游贡献了 Stirrup agent 集成。',
    },
    link: 'https://github.com/levizwang/harbor',
    tag: { en: 'Open Source', zh: '开源' },
  },
  {
    id: 'rag-eval',
    name: { en: 'RAG Evaluation (RAGAS)', zh: 'RAG 评测（RAGAS）' },
    description: {
      en: 'Cross-border RAG systems with an automated RAGAS evaluation loop keeping faithfulness and retrieval precision honest in production. Visualization report of the evaluation project.',
      zh: '跨境 RAG 系统，配 RAGAS 自动评测闭环，保障线上的忠实度与检索精度。附评测项目的可视化报告。',
    },
    image: ragImage,
    link: '/ragas.html',
    tag: { en: 'RAG', zh: 'RAG' },
  },
  {
    id: 'nvwa',
    name: { en: 'nvwa — Synthesis Framework', zh: 'nvwa（女娲）— 合成框架' },
    description: {
      en: 'A layered “1 seed → N tasks” office-document synthesis framework with ~21 automated checkers plus LLM QC/repair and seed-provenance tracing — built to beat the low-diversity failure mode of single-shot generation.',
      zh: '分层的“1 种子 → N 题”办公文档合成框架，含 ~21 个自动 checker、LLM 质检/修复与种子溯源——专为克服单轮生成的“低多样性”失效而建。',
    },
    tag: { en: 'Synthetic Data', zh: '合成数据' },
  },
  {
    id: 'solana-mev',
    name: { en: 'Solana MEV Bot', zh: 'Solana MEV 机器人' },
    description: {
      en: 'A personal Web3 side-project: a Solana MEV searcher (scout → pricing → cross-DEX arbitrage → Jito bundles). Written up as an 8-part technical series — see Writing.',
      zh: '个人 Web3 副项目：Solana MEV 搜索器（监听 → 定价 → 跨 DEX 套利 → Jito bundle）。整理为 8 篇技术系列——见文章。',
    },
    image: mev1Image,
    link: 'https://github.com/levizwang/Solana-MEV',
    tag: { en: 'Web3 · interest', zh: 'Web3 · 兴趣' },
  },
];
