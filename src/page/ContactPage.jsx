import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../component/Common/Footer';
import Contact from '../component/Contact/Contact';

const ContactPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.9 } }}
    exit={{ opacity: 1, transition: { duration: 0.1 } }}
  >
    <Contact />
    <div className="relative top-[300px]">
      <Footer />
    </div>
  </motion.div>
);

export default ContactPage;
