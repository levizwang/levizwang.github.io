
import { Mail, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineZhihu } from 'react-icons/ai';
import avatarImage from '../images/IMG_4812.JPG';
import type { L } from '../i18n/lang';

export const siteConfig = {
  name: "Levi Wang",
  title: "Levi Wang",
  description: {
    en: "I build where infrastructure meets algorithms — agent systems, LLM-evaluation infra, and the synthetic data that trains and grades frontier models.",
    zh: "我喜欢待在“基础设施”和“算法”的交界处：做智能体系统、大模型评测的基础设施，还有那些用来训练前沿模型、给它们打分的合成数据。",
  } as L,
  bio: {
    en: "AI Infra Engineer. Agentic & evaluation infrastructure · RL environments · synthetic / SFT data. Founding-stage engineer @ HUMANLAYA AI (Sequoia / Capital Today / BAI-backed, in the mold of Surge & Mercor); previously @ Fintopia, ByteDance (Doubao VLM evals), and PwC.",
    zh: "AI Infra 工程师。主要在搞智能体和评测的基础设施、强化学习环境，还有合成 / SFT 数据。现在在 HUMANLAYA AI 做创始期工程师（红杉、今日资本、BAI 投的，路子有点像 Surge 和 Mercor）；之前待过 Fintopia、字节（豆包 VLM 评测）和普华永道。",
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
