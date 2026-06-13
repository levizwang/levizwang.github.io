import mev1Image from '../images/projects/SOLANA_MEV.jpg';
import agentImage from '../images/projects/Agent_eval.png';
import ragImage from '../images/projects/RAG_eval.jpg';

export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  link?: string;
  tag?: string;
}

export const projects: Project[] = [
  {
    id: 'eval-platform',
    name: 'LLM Evaluation Platform & Agent-as-Judge',
    description:
      'Company-wide eval platform with rule-based + LLM-as-a-judge metrics for regression, classification, RAG, and agents. Includes a controlled agent-as-judge vs. hand-written-metric study (precision / recall / agreement / cost / latency).',
    image: agentImage,
    link: '/Agentkit.html',
    tag: 'Evaluation',
  },
  {
    id: 'syndata-pipeline',
    name: 'Synthetic Eval-Data Pipeline',
    description:
      'Multi-agent pipeline that turns expert workspaces into hard, evidence-grounded agentic exam items (finance / consulting / law). Cross-vendor model independence, evidence ledgers, and anti-leakage / anti-guessing validity safeguards.',
    tag: 'Synthetic Data',
  },
  {
    id: 'harbor-eval',
    name: 'Harbor — Eval Execution Framework',
    description:
      'Operated and extended a containerized eval framework across 6 model families × 5 agent harnesses (Claude Code, OpenHands, Codex, Stirrup, OpenRouter). Contributed a Stirrup-agent integration upstream via a reviewed pull request.',
    link: 'https://github.com/levizwang/harbor',
    tag: 'Open Source',
  },
  {
    id: 'rag-eval',
    name: 'RAG Evaluation (RAGAS)',
    description:
      'Cross-border RAG systems with an automated RAGAS evaluation loop keeping faithfulness and retrieval precision honest in production. Visualization report of the evaluation project.',
    image: ragImage,
    link: '/ragas.html',
    tag: 'RAG',
  },
  {
    id: 'nvwa',
    name: 'nvwa — Synthesis Framework',
    description:
      'A layered “1 seed → N tasks” office-document synthesis framework with ~21 automated checkers plus LLM QC/repair and seed-provenance tracing — built to beat the low-diversity failure mode of single-shot generation.',
    tag: 'Synthetic Data',
  },
  {
    id: 'solana-mev',
    name: 'Solana MEV Bot',
    description:
      'A personal Web3 side-project: a Solana MEV searcher (scout → pricing → cross-DEX arbitrage → Jito bundles). Written up as an 8-part technical series — see Writing.',
    image: mev1Image,
    link: 'https://github.com/levizwang/Solana-MEV',
    tag: 'Web3 · interest',
  },
];
