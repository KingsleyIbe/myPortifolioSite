import React from 'react';
import { Link } from 'react-router-dom';
import line from '../../assets/images/line12.png';
import SocialMedia from '../Common/SocialMedia';

const GetInTouch = () => (
  <section className="my-[100px] mx-5">
    <div className="flex gap-x-10 items-center lg:w-[60%] lg:m-auto text-[#ff6b00]">
      <img src={line} alt="Horizontal Line" className="hr-line" />
      <h1 className="text-[40px]">Get in touch</h1>
      <img src={line} alt="Horizontal Line" className="hr-line" />
    </div>

    <div className="gap-x-10 items-center">
      <div>
        {/* <h3>
          I&#39;m always interested in hearing about new projects,
          so if you&#39;d like to chat, please get in touch.
        </h3> */}
      </div>
      <div className="lg:w-[15%] lg:m-auto text-[#fff] my-10">
        <SocialMedia />
      </div>
      <div className="lg:m-auto lg:w-[15%] ">
        <Link to="/contact" className="text-[40px] bg-[#ff6b00] text-[#fff] p-2 project-border btn-hover">Send Message</Link>
      </div>
    </div>
  </section>
);

export default GetInTouch;
