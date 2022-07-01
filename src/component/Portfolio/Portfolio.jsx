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
    <div className="mx-10 relative top-[200px]">
      <section>
        <div className="items-center w-[80%] m-auto">
          <h1 className="text-[51px] mb-10 text-[#ff6b00]">My Recent Projects</h1>
        </div>
        <div className="gap-x-5 items-center text-[#fff] text-[30px] my-10 w-[80%] m-auto">
          {data.map((item) => (
            <ul key={uuidv4()} className="my-10 flex gap-x-5 project-border p-5 bg-[#1c1a19]">
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
                  <div className="flex gap-x-2 items-center bg-[#ff6b00] p-2 text-[#fff] btn-hover b-radius">
                    <FontAwesomeIcon icon={faGlobe} alt="Live link logo" />
                    <a href={item.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                  <div className="flex gap-x-2 items-center bg-[#ff6b00] p-2 text-[#fff] btn-hover b-radius">
                    <FontAwesomeIcon icon={faGithub} alt="Github logo" />
                    <a href={item.sourceCode} target="_blank" rel="noreferrer">Source Code</a>
                  </div>
                </li>
              </li>
            </ul>
          ))}
        </div>
        <Link to="/contact" className="flex gap-x-5 items-center btn-hover text-[#fff] bg-[#ff6b00] m-auto w-[210px] text-center p-5 project-border-1 text-[20px] mt-[100px]">
          <p>Get In Touch</p>
          <img src={arrowRight} alt="Arrow point right" />
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
