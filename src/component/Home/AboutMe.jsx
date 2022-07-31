import React from 'react';
import { Link } from 'react-router-dom';
import decorator from '../../assets/images/illustration-about-me.png';
import rectangle55 from '../../assets/images/Rectangle-55.png';
import rectangle56 from '../../assets/images/Rectangle-56.png';
import rectangle57 from '../../assets/images/Rectangle-57.png';
import gif from '../../assets/images/person-juggling-joypixel.gif';

const AboutMe = () => (
  <div className="p-10 bg-[#1c1a19] lg:ml-[200px]">
    <section className="relative">
      <div className="">
        <h1 className="mb-10 text-[#ff6b00]">About Me</h1>
      </div>
      <div className="text-[#fff] lg:w-[50%]">
        <p className="my-10">
          Hello I’m a software developer! I can help you build a product,
          feature or website. Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hesitate to contact me.

        </p>
        <img src={gif} alt="Juggling Gif" className="w-[100px] mt-10" />
      </div>
      <div className="absolute right-0 top-[100px]">
        <img src={decorator} alt="Decorator design" className="img-decorator-1" />
      </div>
      <div>
        <h3 className="text-[#ff6b00] mt-10">Below are my tech stacks:</h3>
        <div className="lg:flex lg:gap-x-[200px] tools-techs items-center text-[#fff] my-10">
          <div className="md:my-5 sm:my-5">
            <div className="flex gap-x-2 items-center">
              <img src={rectangle55} alt="Rectangle design" />
              <h3 className="">Front-End Development</h3>
            </div>
            <ul className="ml-[30px]">
              <li className="my-1">HTML, CSS &amp; SASS</li>
              <li className="my-1">JavaScript</li>
              <li className="my-1">TypeScript</li>
              <li className="my-1">Tailwind</li>
              <li className="my-1">ReactJs</li>
            </ul>
          </div>
          <div className="md:my-5 sm:my-5">
            <div className="flex gap-x-2 items-center">
              <img src={rectangle56} alt="Rectangle design" />
              <h3 className="">Back-End Development</h3>
            </div>
            <ul className="ml-[30px]">
              <li className="my-1">Ruby on rails</li>
              <li className="my-1">Postgres</li>
              <li className="my-1">NodeJs</li>
              <li className="my-1">MySQL</li>
              <li className="my-1">Ruby</li>
            </ul>
          </div>
          <div className="md:my-5 sm:my-5">
            <div className="flex gap-x-2 items-center">
              <img src={rectangle57} alt="Rectangle design" />
              <h3 className="text-[25px]">Tools</h3>
            </div>
            <ul className="ml-[30px]">
              <li className="my-1">Responsive Web Design</li>
              <li className="my-1">Git &amp; GitHub</li>
              <li className="my-1">Webpack</li>
              <li className="my-1">SEO</li>
              <li className="my-1">TDD</li>
            </ul>
          </div>
          <div className="md:my-5 sm:my-5">
            <div className="flex gap-x-2 items-center">
              <img src={rectangle55} alt="Rectangle design" />
              <h3 className="text-[25px]">Professional Skills</h3>
            </div>
            <ul className="ml-[30px]">
              <li className="my-1">Remote pair-programming</li>
              <li className="my-1">Project management</li>
              <li className="my-1">Communication</li>
              <li className="my-1">Mentorship</li>
              <li className="my-1">Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-x-10 items-center text-[#fff] my-5">
        <button type="button" className="p-5 bg-[#ff6b00] b-radius btn-hover"><Link to="/resume">Get My Resume</Link></button>
        <Link to="/about" className="p-5 bg-[#ff6b00] b-radius btn-hover">Read More</Link>
      </div>
    </section>
  </div>
);

export default AboutMe;
