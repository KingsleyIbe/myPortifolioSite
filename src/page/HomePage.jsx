import React from 'react';
import { motion } from 'framer-motion';
import Home from '../component/Home/Home';

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    exit={{ opacity: 1, transition: { duration: 0.1 } }}
  >
    <Home />
  </motion.div>
);

export default HomePage;
