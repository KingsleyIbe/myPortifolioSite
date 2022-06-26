import React from 'react';
import AboutMe from './AboutMe';
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
  </main>
);

export default Home;
