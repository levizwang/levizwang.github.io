
import { Mail, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineZhihu } from 'react-icons/ai';
import avatarImage from '../images/IMG_4812.JPG';
import type { L } from '../i18n/lang';

export const siteConfig = {
  name: "Levi Wang",
  title: "Levi Wang",
  headline: {
    en: "Infrastructure for measuring\nand training frontier AI.",
    zh: "为前沿 AI 构建\n测量与训练的基础设施。",
  } as L,
  status: {
    en: "Founding engineer @ HUMANLAYA AI",
    zh: "HUMANLAYA AI 创始期工程师",
  } as L,
  description: {
    en: "I build where infrastructure meets algorithms — agent systems, LLM-evaluation infra, and the synthetic data that trains and grades frontier models.",
    zh: "主要从事 infrastructure 与算法交叉方向的工作：agent 系统、LLM evaluation 基础设施，以及用于训练和评估前沿模型的合成数据。",
  } as L,
  bio: {
    en: "AI Infra Engineer. Agentic & evaluation infrastructure · RL environments · synthetic / SFT data. Founding-stage engineer @ HUMANLAYA AI (Sequoia / Capital Today / BAI-backed, in the mold of Surge & Mercor); previously @ Fintopia, ByteDance (Doubao VLM evals), and PwC.",
    zh: "AI Infra Engineer。主要研究方向为 agent 与 evaluation 基础设施、RL environments，以及合成 / SFT 数据。现任 HUMANLAYA AI 创始期工程师（红杉、今日资本、BAI 投资，方向对标 Surge 与 Mercor）；此前任职于 Fintopia、字节跳动（豆包 VLM 评测）与普华永道。",
  } as L,
  location: { en: "Beijing, China", zh: "中国 · 北京" } as L,
  resumeEmail: "wang.z.levi@gmail.com",
  startDate: "2026-01-01",
  avatar: avatarImage,

  social: [
    {
      name: "GitHub",
      url: "https://github.com/levizwang",
      icon: FaGithub,
      size: 20
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/levizwang",
      icon: Linkedin,
      size: 20
    },
    {
      name: "X",
      url: "https://x.com/Levi2Crypto",
      icon: FaXTwitter,
      size: 16
    },
    {
      name: "Zhihu",
      url: "https://www.zhihu.com/people/levi.eth",
      icon: AiOutlineZhihu,
      size: 20
    },
    {
      name: "Email",
      url: "mailto:wang.z.levi@gmail.com",
      icon: Mail,
      size: 20
    }
  ],

  nav: [
    { name: { en: "Home", zh: "首页" } as L, path: "/" },
    { name: { en: "Projects", zh: "项目" } as L, path: "/projects" },
    { name: { en: "Writing", zh: "文章" } as L, path: "/posts" },
    { name: { en: "Optics", zh: "光影" } as L, path: "/optics" },
  ],
};
