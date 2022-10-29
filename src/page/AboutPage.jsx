import React from 'react';
import { motion } from 'framer-motion';
import About from '../component/About/About';

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    exit={{ opacity: 1, transition: { duration: 0.1 } }}
  >
    <About />
  </motion.div>
);

export default AboutPage;
