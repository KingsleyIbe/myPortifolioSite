import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import Intro from './Intro';
import RecentWorks from './RecentWorks';

const Home = () => (
  <main>
    <Header />
    <Intro />
    <RecentWorks />
    <AboutMe />
  </main>
);

export default Home;
