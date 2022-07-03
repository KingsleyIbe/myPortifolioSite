import React from 'react';
import Portfolio from '../component/Portfolio/Portfolio';
import Footer from '../component/Common/Footer';

const PortfolioPage = () => (
  <div>
    <Portfolio />
    <div className="relative top-[300px]">
      <Footer />
    </div>
  </div>
);

export default PortfolioPage;
