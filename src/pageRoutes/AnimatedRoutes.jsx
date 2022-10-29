import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutusPage from '../pages/AboutusPage';
import BlogPage from '../pages/BlogPage';
import ContactUsPage from '../pages/ContactUsPage';
import FormSubmissionPage from '../pages/FormSubmissionPage';
import HomePage from '../pages/HomePage';
import IndustriesPage from '../pages/IndustriesPage';
import OurWorkPage from '../pages/OurWorkPage';
import ServicesPage from '../pages/ServicesPage';
import TestimoniesPage from '../pages/TestimoniesPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about-us" element={<AboutusPage />} />
        <Route exact path="/contact-us" element={<ContactUsPage />} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/our-works" element={<OurWorkPage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/testimonies" element={<TestimoniesPage />} />
        <Route exact path="/industries" element={<IndustriesPage />} />
        <Route exact path="/thank-you" element={<FormSubmissionPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
