import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from './SocialMediaData';

const SocialMedia = () => (
  <div>
    <div className="flex gap-x-5 items-center text-[#fff] text-[30px] my-10">
      {data && data.map((item) => (
        <ul key={uuidv4()}>
          <li>
            <a href={item?.href} target={item?.target}>
              <FontAwesomeIcon icon={item?.icon} alt={item?.alt} className="fa-envelope hover:text-[#ff6b00]" />
            </a>
          </li>
        </ul>
      ))}
    </div>
  </div>
);

export default SocialMedia;
