import { Button } from "antd";
import React from "react";
import {IoIosArrowRoundForward} from 'react-icons/io'

const About = () => {
  return (
    <div className="main-about px-[8%]  ">
      <div className="md:flex w-full mt-8 lg:mb-8">
        <div   className='p-5 md:w-[50%] mt-5'>
          <p className="font-semibold text-3xl capitalize mt-5 lg:text-5xl lg:py-5 lg:mb-8  ">
            Welcome to the <span className='text-[#97CB50] font-bold'> Saylani</span> welfare
          </p>
          <p className='mt-3'>
            Saylani Welfare is on the ground and already working with local
            communities to assess how best to support underprivileged families
            in more than 63 areas of day to day lives
          </p>
          <Button className='flex items-center gap-5 h-[40px] mt-5 border-black lg:py-5 lg:mt-8'>Explore More  <IoIosArrowRoundForward size={25}/></Button>
        </div>
        <div className="hidden md:flex md:w-[50%]">
          <img src="/main.png" alt="main" />
        </div>
      </div>
    </div>
  );
};

export default About;
