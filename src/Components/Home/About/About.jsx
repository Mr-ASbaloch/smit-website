import { Button } from "antd";
import React from "react";
import {IoIosArrowRoundForward} from 'react-icons/io'

const About = () => {
  return (
    <div className="main-about">
      <div>
        <div   className='p-5'>
          <p className="font-semibold text-3xl capitalize mt-5  ">
            Welcome to the <span className='text-[#97CB50] font-bold'> Saylani</span> welfare
          </p>
          <p className='mt-3'>
            Saylani Welfare is on the ground and already working with local
            communities to assess how best to support underprivileged families
            in more than 63 areas of day to day lives
          </p>
          <Button className='flex items-center gap-5 h-[40px] mt-5 border-black'>Explore More  <IoIosArrowRoundForward size={25}/></Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
