import React from 'react';
// import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// import leadsTracker from '../../assets/images/leadsTracker.jpeg';
import gitFinder from '../../assets/images/GithubFinder.jpeg';

const RecentWorks = () => {
  const data = [
    // {
    //   screenShot: leadsTracker,
    //   title: 'Leads Tracker Chrome Extension Leads Tracker Chrome Extension',
    //   detailsLink: 'details',
    //   tech: ['JavaScript', 'React', 'Rails', 'Ruby'],
    //   description: 'brief',
    //   alt: 'alt',
    // },
    {
      screenShot: gitFinder,
      title: 'GitHub Finder',
      description: 'Github finder react application makes a call to Github API. '
      + 'For each call, it fetches information about github users and returns the result. '
      + 'The application gets the following information from the API: Username, User unique ID, '
      + 'public repositories, likes, followers, following, profile info, location, social media links, '
      + 'and others.',
      tech: ['CSS', 'JavaScript', 'React', 'REST API'],
      alt: 'Project screenshot',
      liveDemo: '',
      sourceCode: '',
    },
    // {
    //   screenShot: leadsTracker, title: 'title', detailsLink: 'details',
    // tech: ['JavaScript', 'React', 'Rails', 'Ruby'], description: 'brief', alt: 'alt',
    // },
  ];

  return (
    <div className="mx-10 my-[200px]">
      <section>
        <div className="flex gap-x-2 items-center w-[80%] m-auto">
          <h1 className="text-[51px] mb-10">My Recent Projects</h1>
          <hr />
        </div>
        <div className="flex gap-x-5 items-center text-[#fff] text-[30px] my-10 w-[80%] m-auto">
          {data.map((item) => (
            <ul key={uuidv4()} className=" flex gap-x-5 project-border p-5 bg-[#1c1a19]">
              <li>
                <img src={item.screenShot} alt={item.alt} className="min-w-[600px] min-h-[100%]" />
              </li>
              <li>
                <li><h3 className="p-5 text-[#ff6b00] text-[40px] font-bold">{item.title}</h3></li>
                <li><p className="max-w-[100%] my-5 project-border-1 p-5">{item.description}</p></li>
                <li className="flex gap-x-5 items-center">
                  <p className="project-border-1 p-2">{item.tech[0]}</p>
                  <p className="project-border-1 p-2">{item.tech[1]}</p>
                  <p className="project-border-1 p-2">{item.tech[2]}</p>
                  <p className="project-border-1 p-2">{item.tech[3]}</p>
                </li>
                <li className="flex gap-x-10 items-center mt-10">
                  <a href={item.liveDemo} className="bg-[#ff6b00] p-2 text-[#fff] b-radius">Live Demo</a>
                  <a href={item.sourceCode} className="bg-[#ff6b00] p-2 text-[#fff] b-radius">Source Code</a>
                </li>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentWorks;