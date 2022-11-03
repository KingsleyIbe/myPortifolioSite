import React from 'react';
import AboutMe from './AboutMe';
import Footer from '../Common/Footer';
import GetInTouch from './GetInTouch';
import Intro from './Intro';
import Portfolio from './Portfolio';

const Home = () => (
  <main className="min-w-[100%]">
    <Intro />
    <div className="mt-[100px] mb-[300px]">
      <Portfolio />
    </div>
    <AboutMe />
    <GetInTouch />
    <Footer />
  </main>
);

export default Home;
