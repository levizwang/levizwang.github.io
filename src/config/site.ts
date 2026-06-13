
import { Mail, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineZhihu } from 'react-icons/ai';
import avatarImage from '../images/IMG_4812.JPG';

export const siteConfig = {
  name: "Levi Wang",
  title: "Levi Wang",
  description: "I build where infrastructure meets algorithms — agent systems, LLM-evaluation infra, and the synthetic data that trains and grades frontier models.",
  bio: "AI R&D Engineer. Agent architecture & infra · Evaluation infrastructure · Synthetic-data algorithms. Currently @ Fintopia; previously VLM-evaluation @ ByteDance and IT risk assurance @ PwC.",
  location: "Beijing, China",
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
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Writing", path: "/posts" },
    { name: "Optics", path: "/optics" },
  ],
};
