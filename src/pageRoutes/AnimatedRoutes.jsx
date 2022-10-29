import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../component/Home/Home';
import AboutPage from '../page/AboutPage';
import ContactPage from '../page/ContactPage';
import PortfolioPage from '../page/PortfolioPage';
import ResumePage from '../page/ResumePage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
