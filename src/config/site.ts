
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
    zh: "我在“基础设施”与“算法”的交界处工作——构建智能体系统、大模型评测基础设施，以及训练和评判前沿模型的合成数据。",
  } as L,
  bio: {
    en: "AI R&D Engineer. Agent architecture & infra · Evaluation infrastructure · Synthetic-data algorithms. Currently @ Fintopia; previously VLM-evaluation @ ByteDance and IT risk assurance @ PwC.",
    zh: "AI 研发工程师。智能体架构与基础设施 · 评测基础设施 · 合成数据算法。现任职于 Fintopia；曾在字节跳动做 VLM 评测、在普华永道（PwC）做 IT 风险审计。",
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
