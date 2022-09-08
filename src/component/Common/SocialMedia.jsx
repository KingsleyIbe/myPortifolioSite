import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin, faTwitter, faInstagram, faMedium,
} from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  const data = [
    {
      icon: faGithub,
      href: 'https://github.com/KingsleyIbe',
      alt: 'Github Icon',
      target: '_blank',
    },
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/kingsley-ibe-5669a5134/',
      alt: 'Linkedin Icon',
      target: '_blank',
    },
    {
      icon: faMedium,
      href: 'https://medium.com/@ibekingsley',
      alt: 'Medium Icon',
      target: '_blank',
    },
    {
      icon: faTwitter,
      href: 'https://twitter.com/ibekingsley2',
      alt: 'Twitter Icon',
      target: '_blank',
    },
    {
      icon: faInstagram,
      href: 'https://instagram.com/ibekingsleychibueze',
      alt: 'Instagram Icon',
      target: '_blank',
    },
  ];
  return (
    <div>
      <div className="flex gap-x-5 items-center text-[#fff] text-[30px] my-10">
        {data.map((item) => (
          <ul key={uuidv4()}>
            <li>
              <a href={item.href} target={item.target}>
                <FontAwesomeIcon icon={item.icon} alt={item.alt} className="fa-envelope hover:text-[#ff6b00]" />
              </a>

            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
