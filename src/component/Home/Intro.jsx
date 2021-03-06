import React from 'react';
import bgImage from '../../assets/images/Illustration-header.png';
import SocialMedia from '../Common/SocialMedia';

const Intro = () => (
  <div className="bg-[#1c1a19] p-10">
    <section className="intro">
      <div className="flex gap-x-[300px] items-center">
        <div>
          <h1 className="text-[#ff6b00] text-[51px] mt-[200px] font-bold">Hey There, I&#39;m Kingsley</h1>
          <h3 className="text-[#fff] my-10 text-[30px] font-bold">I’m a Software Developer</h3>
          <p className="text-[#fff] lg:w-[500px] text-[18px] font-semibold intro-p">
            I help organisations solve their web application problems.
            I create successful websites that are fast, easy to use, and built with best practices.
            With modern web technologies I produce responsive websites and web apps that provide
            users the best and most appropriate experience suited to their device and browser.

          </p>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div>
        <img src={bgImage} alt="Icon decorator" className="absolute top-[110px] img-decorator lg:opacity-[0.6] lg:right-0" />
      </div>
    </section>
  </div>
);

export default Intro;
