import React from 'react';
import Footer from '../component/Common/Footer';
import Contact from '../component/Contact/Contact';
import Header from '../component/Header/Header';

const ContactPage = () => (
  <div>
    <Header />
    <Contact />
    <div className="relative top-[300px]">
      <Footer />
    </div>
  </div>
);

export default ContactPage;
