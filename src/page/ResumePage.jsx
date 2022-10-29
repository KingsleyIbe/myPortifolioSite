import React from 'react';
import { motion } from 'framer-motion';
import ResumePDF from '../component/Resume/ResumePDF';

const ResumePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    exit={{ opacity: 1, transition: { duration: 0.1 } }}
  >
    <ResumePDF />
  </motion.div>
);

export default ResumePage;
