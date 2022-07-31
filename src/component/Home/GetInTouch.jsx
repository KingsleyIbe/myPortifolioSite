import React from 'react';
import { Link } from 'react-router-dom';
import line from '../../assets/images/line12.png';
import SocialMedia from '../Common/SocialMedia';

const GetInTouch = () => (
  <section className="my-[100px] mx-5">
    <div className="flex gap-x-5 items-center lg:w-[100%] lg:m-auto text-[#ff6b00] relative left-[80px] get-in-touch">
      <img src={line} alt="Horizontal Line" className="hr-line" />
      <h1 className="">Get in touch</h1>
      <img src={line} alt="Horizontal Line" className="hr-line" />
    </div>

    <div className="gap-x-10 items-center">
      <div className="relative left-[500px] text-[#fff] my-10 social">
        <SocialMedia />
      </div>
      <div className="relative left-[500px] btn-send-message top-5">
        <Link to="/contact" className="text-[40px] bg-[#ff6b00] text-[#fff] px-[21px] py-[12px] project-border btn-hover">Send Message</Link>
      </div>
    </div>
  </section>
);

export default GetInTouch;
