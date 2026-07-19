
import { Mail, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineZhihu } from 'react-icons/ai';
import avatarImage from '../images/avatar-edinburgh.jpg';
import type { L } from '../i18n/lang';

export const siteConfig = {
  name: "Levi Wang",
  title: "Levi Wang",
  headline: {
    en: "Levi Wang",
    zh: "Levi Wang",
  } as L,
  status: {
    en: "Founding engineer @ HUMANLAYA AI",
    zh: "HUMANLAYA AI 创始期工程师",
  } as L,
  description: {
    en: "AI algorithm & infra engineer and project manager: focused on building high-quality training and evaluation data, designing data-synthesis algorithms around an Expert-in-the-Loop philosophy, and building enterprise AI infrastructure — evaluation, data-processing, and data-delivery platforms. Off the clock: photography, cycling, and trekking.",
    zh: "AI 算法 & Infra 工程师 & 项目经理：主攻高质量训练与评测数据构建，以 Expert-in-Loop 为理念设计数据合成算法，同时负责企业 AI Infra 设施搭建，包括评测平台、数据加工平台、数据交付平台等；闲暇时间热爱摄影、骑行与徒步。",
  } as L,
  bio: {
    en: "AI algorithm engineer working on evaluation science, synthetic/RL data, and agentic systems, with the infrastructure background to run them at scale. Founding-stage engineer @ HUMANLAYA AI; previously @ Fintopia, ByteDance (Doubao VLM evals), and PwC.",
    zh: "AI 算法工程师，方向为评测科学、合成/RL 数据与智能体系统，具备将其规模化落地的基础设施能力。现任 HUMANLAYA AI 创始工程师；此前在 Fintopia、字节跳动（豆包 VLM 评测）与普华永道。",
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
