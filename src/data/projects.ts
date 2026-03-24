import mev1Image from '../images/projects/SOLANA_MEV.jpg';
import agentImage from '../images/projects/Agent_eval.png';
import ragImage from '../images/projects/RAG_eval.jpg';

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'SOLANA_MEV',
    description: 'This project is a Solana MEV bot that reads the internet for you',
    image: mev1Image,
    link: 'https://github.com/levizwang/Solana-MEV',
  },
  {
    id: '2',
    name: 'Agent Evaluation Report',
    description: 'Visualization report of the Agent evaluation project',
    image: agentImage,
    link: '/Agentkit.html',
  },
  {
    id: '3',
    name: 'RAG Evaluation Report',
    description: 'Visualization report of the RAG evaluation project',
    image: ragImage,
    link: '/ragas.html',
  }
];
