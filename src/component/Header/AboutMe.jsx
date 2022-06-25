import React from 'react';

const AboutMe = () => (
  <div className="p-10 bg-[#1c1a19]">
    <section>
      <div className="">
        <h1 className="text-[51px] mb-10 text-[#ff6b00]">About Me</h1>
        <hr />
      </div>
      <div>
        <p>
          Hello I’m a software developer! I can help you build a product,
          feature or website. Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hesitate to contact me.

        </p>
      </div>
      <div>
        <button type="button"><a href="./images/kingsley-ibe-cv.pdf" download="Kingsley Ibe resume">Get My Resume</a></button>
      </div>
    </section>
  </div>
);

export default AboutMe;
