
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF9F2] text-slate-800 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            {/* Fallback route or separate page for 'Partner With Us' if needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
