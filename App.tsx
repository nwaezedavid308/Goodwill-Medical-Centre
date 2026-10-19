import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppointmentModal from "./components/AppointmentModal";
import FloatingEmergency from "./components/FloatingEmergency";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const Privacy = lazy(() => import("./pages/Privacy"));
import PageEffects from "./components/PageEffects";
const Services = lazy(() => import("./pages/Services"));
const Doctors = lazy(() => import("./pages/Doctors"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const InceptionReport = lazy(() => import("./pages/InceptionReport"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

const App: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenAppointment = (service = "") => {
    setSelectedService(service);
    setIsAppointmentOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <PageEffects />
      <div className="min-h-screen bg-[#FFF9F2] text-slate-800 selection:bg-purple-200 selection:text-purple-900 flex flex-col justify-between">
        <Navbar onOpenAppointment={() => handleOpenAppointment()} />

        <main id="main-content" tabIndex={-1} className="flex-1">
          <Suspense
            fallback={
              <div className="page-shell py-24" role="status">
                Getting the page ready…
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Home onOpenAppointment={() => handleOpenAppointment()} />
                }
              />
              <Route
                path="/services"
                element={
                  <Services
                    onBookService={(service) => handleOpenAppointment(service)}
                  />
                }
              />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/inception-report" element={<InceptionReport />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route to home */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* Global Floating Emergency & Quick Consultation Widget */}
        <FloatingEmergency onOpenAppointment={() => handleOpenAppointment()} />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal
          key={`${isAppointmentOpen}-${selectedService}`}
          isOpen={isAppointmentOpen}
          onClose={() => setIsAppointmentOpen(false)}
          preselectedService={selectedService}
        />
      </div>
    </Router>
  );
};

export default App;
