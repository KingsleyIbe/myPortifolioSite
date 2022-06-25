import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/fontawesome-svg-core';
// import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/Illustration-header.png';

const Intro = () => {
  const data = [
    {
      icon: faEnvelope,
      href: 'https://github.com/KingsleyIbe',
      alt: 'Github Icon',
      target: '_blank',
    },
    {
      icon: faEnvelope,
      href: 'https://www.linkedin.com/in/kingsley-ibe-5669a5134/',
      alt: 'Linkedin Icon',
      target: '_blank',
    },
    {
      icon: faEnvelope,
      href: 'https://www.youtube.com/channel/UCZubtD9cLa__V8OVE3VC8sg',
      alt: 'Youtube Icon',
      target: '_blank',
    },
    {
      icon: faEnvelope,
      href: 'https://twitter.com/ibekingsley2',
      alt: 'Twitter Icon',
      target: '_blank',
    },
    {
      icon: faEnvelope,
      href: 'https://instagram.com/ibekingsleychibueze',
      alt: 'Instagram Icon',
      target: '_blank',
    },
    {
      icon: faEnvelope,
      href: 'https://stackoverflow.com/users/10140880/ibe-kingsley-chibueze',
      alt: 'Stackoverflow Icon',
      target: '_blank',
    },
  ];
  return (
    <div className="bg-[#1c1a19] p-10">
      <section>
        <h1 className="text-[#ff6b00] text-[51px] mt-[200px] font-bold w-[300px]">Hey There, I&#39;m Kingsley</h1>
        <h3 className="text-[#fff] my-10 text-[30px] font-bold">I’m a Software Developer</h3>
        <p className="text-[#fff] w-[500px] text-[18px] font-semibold">
          I help organisations solve their web application problems.
          I create successful websites that are fast, easy to use, and built with best practices.
          With modern web technologies I produce responsive websites and web apps that provide
          users the best and most appropriate experience suited to their device and browser.

        </p>
        <div className="flex gap-x-5 items-center text-[#fff] text-[30px] my-10">
          {data.map((item) => (
            <ul key={uuidv4()}>
              <li>
                <a href={item.href} target={item.target}>
                  <FontAwesomeIcon icon={item.icon} alt={item.alt} />
                </a>

              </li>
            </ul>
          ))}
        </div>
        <div>
          <img src={bgImage} alt="Icon decorator" className="absolute top-[110px] right-0" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
