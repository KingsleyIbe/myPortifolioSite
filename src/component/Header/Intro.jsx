import React from 'react';
import bgImage from '../../assets/images/Illustration-header.png';
import SocialMedia from './SocialMedia';
// import kingsley from '../../assets/images/KingsleyIbe2.jpg';

const Intro = () => (
  <div className="bg-[#1c1a19] p-10">
    <section>
      <div className="flex gap-x-[300px] items-center">
        <div>
          <h1 className="text-[#ff6b00] text-[51px] mt-[200px] font-bold">Hey There, I&#39;m Kingsley</h1>
          <h3 className="text-[#fff] my-10 text-[30px] font-bold">I’m a Software Developer</h3>
          <p className="text-[#fff] w-[500px] text-[18px] font-semibold">
            I help organisations solve their web application problems.
            I create successful websites that are fast, easy to use, and built with best practices.
            With modern web technologies I produce responsive websites and web apps that provide
            users the best and most appropriate experience suited to their device and browser.

          </p>
          <div>
            <SocialMedia />
          </div>
        </div>
        {/* <div>
          <img src={kingsley} alt="Profile display icon" className="rounded-full" />
        </div> */}
      </div>
      <div>
        <img src={bgImage} alt="Icon decorator" className="absolute top-[110px] opacity-[0.6] right-0" />
      </div>
    </section>
  </div>
);

export default Intro;
