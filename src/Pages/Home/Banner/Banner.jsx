import React from 'react';
import Image from '../../../assets/images/banner/banner.jpg';
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
// import { motion } from 'framer-motion';


const Banner = () => {
  return (
    <div className='h-screen bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${Image})` }}>
      <div className='text-center pt-40 lg:pt-72'>
        <div className='text-3xl font-bold  lg:text-7xl lg:font-extrabold' data-aos="fade-down">
          <TypeAnimation sequence={[
            'Developer',
            2000,
            'Designer',
            2000,
            'Photographer',
            2000,
            'Freelancer',
            2000,
          ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
        </div>
      </div>
      <div className='flex text-white text-2xl mx-auto max-w-max pt-4 lg:pt-6 gap-x-6' data-aos="fade-up">
        <a href="#">
          <FaYoutube/>
        </a>
        <a href="#">
          <FaDribbble/>
        </a>
        <a href="#">
          <FaGithub/>
        </a>
      </div>
    </div>
  );
};

export default Banner;
