import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppointmentModal from './components/AppointmentModal';
import FloatingEmergency from './components/FloatingEmergency';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Gallery from './pages/Gallery';
import InceptionReport from './pages/InceptionReport';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleOpenAppointment = (service = '', doctor = '') => {
    setSelectedService(service);
    setSelectedDoctor(doctor);
    setIsAppointmentOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FFF9F2] text-slate-800 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden flex flex-col justify-between">
        <Navbar onOpenAppointment={() => handleOpenAppointment()} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenAppointment={() => handleOpenAppointment()} />} />
            <Route
              path="/services"
              element={<Services onBookService={(service) => handleOpenAppointment(service, '')} />}
            />
            <Route
              path="/doctors"
              element={
                <Doctors
                  onBookDoctor={(doc, dept) => handleOpenAppointment(dept, doc)}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/inception-report" element={<InceptionReport />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route to home */}
            <Route path="*" element={<Home onOpenAppointment={() => handleOpenAppointment()} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Floating Emergency & Quick Consultation Widget */}
        <FloatingEmergency onOpenAppointment={() => handleOpenAppointment()} />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal
          isOpen={isAppointmentOpen}
          onClose={() => setIsAppointmentOpen(false)}
          preselectedService={selectedService}
          preselectedDoctor={selectedDoctor}
        />
      </div>
    </Router>
  );
};

export default App;
