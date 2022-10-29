import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../component/Portfolio/Portfolio';
import Footer from '../component/Common/Footer';

const PortfolioPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    exit={{ opacity: 1, transition: { duration: 0.1 } }}
  >
    <Portfolio />
    <div className="relative top-[300px]">
      <Footer />
    </div>
  </motion.div>
);

export default PortfolioPage;
