import React from 'react';
import AboutMe from './AboutMe';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import Header from './Header';
import Intro from './Intro';
import RecentWorks from './RecentWorks';

const Home = () => (
  <main>
    <Header />
    <Intro />
    <RecentWorks />
    <AboutMe />
    <GetInTouch />
    <Footer />
  </main>
);

export default Home;
