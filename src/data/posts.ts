import { html as post1Content } from '../posts/MEV/MEV1:SolanaMEV_Technical_Analysis.md';
import { html as post2Content } from '../posts/MEV/MEV2:ControlPlane_Strategy_Scheduling_and_Configuration.md';
import { html as post3Content } from '../posts/MEV/MEV3:Inventory_Network_Wide_Token_Index.md';
import { html as post4Content } from '../posts/MEV/MEV4:Scout_Transaction_Monitoring_and_Parsing.md';
import { html as post5Content } from '../posts/MEV/MEV5:AMM_Pricing_and_Mathematical_Model.md';
import { html as post6Content } from '../posts/MEV/MEV6:StrategyArb_Cross_DEX_Arbitrage_Strategy.md';
import { html as post7Content } from '../posts/MEV/MEV7:Jito.md';
import { html as post8Content } from '../posts/MEV/MEV8:Risk_Risk_Control_and_Safety_Checks.md';
import { html as post9Content } from '../posts/Detailed_Explanation_of_Blockchain/Detailed_Explanation_of_Blockchain.md';
import mev1Image from '../images/posts/MEV_img/MEV1.jpg';
import mev2Image from '../images/posts/MEV_img/MEV2.jpg';
import mev3Image from '../images/posts/MEV_img/MEV3.jpg';
import mev4Image from '../images/posts/MEV_img/MEV4.jpg';
import mev5Image from '../images/posts/MEV_img/MEV5.JPG';
import mev6Image from '../images/posts/MEV_img/MEV6.JPG';
import mev7Image from '../images/posts/MEV_img/MEV7.JPG';
import mev8Image from '../images/posts/MEV_img/MEV8.JPG';
import blockchainImage from '../images/posts/web3/web3.jpg';



export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  tags?: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '9',
    title: 'Detailed Explanation of Blockchain',
    excerpt: 'Detailed explanation of blockchain, including its concepts, technology, and applications',
    content: post9Content,
    date: 'Feb 04, 2026',
    category: 'Web3',
    tags: ['Web3', 'Blockchain'],
    image: blockchainImage,
  },
  {
    id: '8',
    title: 'MEV8: Solana MEV Conclusion',
    excerpt: 'Conclusion of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post8Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev8Image,
  },
  {
    id: '7',
    title: 'MEV7: Solana MEV Conclusion',
    excerpt: 'Conclusion of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post7Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev7Image,
  },
  {
    id: '6',
    title: 'MEV6: Solana MEV Industry Impact',
    excerpt: 'Industry impact of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post6Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev6Image,
  },
  {
    id: '5',
    title: 'MEV5: Solana MEV Regulation and Law',
    excerpt: 'Regulation and law of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post5Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev5Image,
  },
  {
    id: '4',
    title: 'MEV4: Solana MEV Future Trends',
    excerpt: 'Future trends of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post4Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev4Image,
  },
  {
    id: '3',
    title: 'MEV3: Solana MEV Impact and Challenges',
    excerpt: 'Impact and challenges of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post3Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev3Image,
  },
  {
    id: '2',
    title: 'MEV2: Solana MEV Practical Applications',
    excerpt: 'Practical applications of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post2Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev2Image,
  },
  {
    id: '1',
    title: 'MEV1: Solana MEV Technical Analysis',
    excerpt: 'Technical analysis of Solana MEV, including MEV bots, MEV opportunities, and MEV risks',
    content: post1Content,
    date: 'Jan 20, 2026',
    category: 'MEV',
    tags: ['MEV', 'Blockchain'],
    image: mev1Image,
  },
];
