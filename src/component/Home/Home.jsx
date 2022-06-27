import React from 'react';
import AboutMe from './AboutMe';
import Footer from '../Common/Footer';
import GetInTouch from './GetInTouch';
import Intro from './Intro';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => (
  <main>
    <Intro />
    <div className="my-[200px]">
      <Portfolio />
    </div>
    <AboutMe />
    <GetInTouch />
    <Footer />
  </main>
);

export default Home;
