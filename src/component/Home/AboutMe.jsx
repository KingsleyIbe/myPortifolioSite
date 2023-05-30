import React from 'react';
import { Link } from 'react-router-dom';
import decorator from '../../assets/images/illustration-about-me.png';
import gif from '../../assets/images/person-juggling-joypixel.gif';
import data from './Skills';

const AboutMe = () => (
  <div className="about-me-home p-10 bg-[#1c1a19]">
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
        <div className="lg:flex lg:gap-x-[50px] tools-techs text-[#fff] my-10">
          {data && data?.map((item) => (
            <div key={item?.id} className="md:my-5 sm:my-5 max-h-[100%]">
              <div className="flex gap-x-2 items-center">
                <img src={item?.src} alt={item?.alt} />
                <h3 className="">{item?.title}</h3>
              </div>
              <ul className="ml-[30px]">
                <li className="my-1">{item?.skills[0]}</li>
                <li className="my-1">{item?.skills[1]}</li>
                <li className="my-1">{item?.skills[2]}</li>
                <li className="my-1">{item?.skills[3]}</li>
                <li className="my-1">{item?.skills[4]}</li>
                <li className="my-1">{item?.skills[5]}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-x-10 items-center action-btn text-[#fff] my-5">
        <button type="button" className="button-1 p-5 bg-[#ff6b00] b-radius btn-hover action-btn-1"><Link to="/resume">Get My Resume</Link></button>
        <Link to="/about" className="p-5 bg-[#ff6b00] b-radius btn-hover action-btn-2">Read More</Link>
      </div>
    </section>
  </div>
);

export default AboutMe;
