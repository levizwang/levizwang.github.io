import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import { GridBackground } from './components/GridBackground';
import { SheetBreak } from './components/ui/SheetBreak';
import { ScrollToTop } from './components/ScrollToTop';
import { MetaManager } from './components/MetaManager';
import { CrosshairCursor } from './components/ui/CrosshairCursor';
import { Projects } from './components/pages/Projects';
import { Post } from './components/pages/Post';
import { BlogPost } from './components/pages/BlogPost';
import { Optics } from './components/pages/Optics';
import { Cv } from './components/pages/Cv';

function Home() {
  return (
    <>
      <Hero />
      <SheetBreak n="02" />
      <Highlights />
      <SheetBreak n="03" />
      <Experience />
      <SheetBreak n="04" />
      <Resume />
      <SheetBreak n="05" />
      <Capabilities />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MetaManager />
      <CrosshairCursor />
      <div className="relative min-h-screen bg-background text-foreground antialiased">
        <GridBackground />
        <Header />
        <div className="h-16 sm:h-20" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/optics" element={<Optics />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
