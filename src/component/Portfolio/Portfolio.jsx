import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import arrowRight from '../../assets/images/arrowRight.png';
import Data from './PortfolioData';

const Portfolio = () => {
  const data = Data;
  return (
    <div className="portfolio relative top-[200px] px-10">
      <section>
        <div className="items-center w-[100%] m-auto">
          <h1 className="mb-10 text-[#ff6b00]">My Recent Projects</h1>
        </div>
        <div className="items-center text-[#fff] project-container my-10 w-[100%] m-auto">
          {data && data?.map((item) => ((
            item?.id % 2 !== 0
          ) ? (
            <ul key={uuidv4()} className="my-10 cards lg:flex gap-x-5 project-border p-5 bg-[#1c1a19]">
              <li className="">
                <img src={item?.screenShot} alt={item?.alt} className="lg:min-w-[400px] lg:min-h-[80%] mt-5 img-port" />
              </li>
              <li className="">
                <li><h3 className="p-5 text-[#ff6b00] font-bold">{item?.title}</h3></li>
                <li><p className="max-w-[100%] my-5 project-border-1 p-5">{item?.description}</p></li>
                <li className="lg:flex gap-x-5 items-center tech">
                  <p className="project-border-1 p-2 myy">{item?.tech[0]}</p>
                  <p className="project-border-1 p-2 myy">{item?.tech[1]}</p>
                  <p className="project-border-1 p-2 myy">{item?.tech[2]}</p>
                  <p className="project-border-1 p-2 myy">{item?.tech[3]}</p>
                </li>
                <li className="lg:flex gap-x-10 items-center mt-10 btn-links">
                  <div className="flex flex-row gap-x-2 items-center bg-[#ff6b00] lg:w-[20%] w-[50%] justify-center p-2 text-[#fff] btn-hover b-radius">
                    <FontAwesomeIcon icon={faGlobe} alt="Live link logo" />
                    <a href={item?.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                  <div className="flex flex-row justify-center gap-x-2 lg:w-[20%] items-center bg-[#ff6b00] w-[50%] myy p-2 text-[#fff] btn-hover b-radius">
                    <FontAwesomeIcon icon={faGithub} alt="Github logo" />
                    <a href={item?.sourceCode} target="_blank" rel="noreferrer">Source Code</a>
                  </div>
                </li>
              </li>
            </ul>
            )
            : (
              <ul key={uuidv4()} className="my-10 cards lg:flex gap-x-5 project-border p-5 bg-[#1c1a19]">
                <li className="">
                  <li><h3 className="p-5 text-[#ff6b00] font-bold">{item?.title}</h3></li>
                  <li><p className="max-w-[100%] my-5 project-border-1 p-5">{item?.description}</p></li>
                  <li className="lg:flex gap-x-5 items-center tech">
                    <p className="project-border-1 p-2 myy">{item?.tech[0]}</p>
                    <p className="project-border-1 p-2 myy">{item?.tech[1]}</p>
                    <p className="project-border-1 p-2 myy">{item?.tech[2]}</p>
                    <p className="project-border-1 p-2 myy">{item?.tech[3]}</p>
                  </li>
                  <li className="lg:flex gap-x-10 items-center mt-10 btn-links">
                    <div className="flex flex-row justify-center gap-x-2 lg:w-[20%] w-[50%] gap-x-2 items-center bg-[#ff6b00] p-2 text-[#fff] btn-hover b-radius">
                      <FontAwesomeIcon icon={faGlobe} alt="Live link logo" />
                      <a href={item?.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                    <div className="flex flex-row justify-center gap-x-2 lg:w-[20%] w-[50%] gap-x-2 items-center bg-[#ff6b00] myy p-2 text-[#fff] btn-hover b-radius">
                      <FontAwesomeIcon icon={faGithub} alt="Github logo" />
                      <a href={item?.sourceCode} target="_blank" rel="noreferrer">Source Code</a>
                    </div>
                  </li>
                </li>
                <li className="">
                  <img src={item?.screenShot} alt={item?.alt} className="lg:min-w-[400px] lg:min-h-[80%] mt-5 img-port" />
                </li>
              </ul>
            )))}
        </div>
        <Link to="/contact" className="flex gap-x-5 items-center btn-hover text-[#fff] bg-[#ff6b00] m-auto w-[210px] text-center p-5 project-border-1 text-[20px]">
          <p>Get In Touch</p>
          <img src={arrowRight} alt="Arrow point right" />
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
