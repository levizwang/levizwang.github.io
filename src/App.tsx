import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { BlogList } from './components/BlogList';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { GridBackground } from './components/GridBackground';
import { ScrollToTop } from './components/ScrollToTop';
import { Projects } from './components/pages/Projects';
import { Post } from './components/pages/Post';
import { BlogPost } from './components/pages/BlogPost';
import { Optics } from './components/pages/Optics';

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <ProjectGrid limit={6} showViewAll />
      <BlogList limit={4} showViewAll />
      <Resume />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground antialiased">
        <GridBackground />
        {/* Spacer for fixed header */}
        <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/optics" element={<Optics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
