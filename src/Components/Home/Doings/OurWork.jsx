import React from "react";
import { FaPrayingHands } from "react-icons/fa";
import { GiStethoscope, GiWaterBottle, GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

const OurWork = () => {
  return (
    <div className="work-main px-5 md:px-[8%] mb-8   ">
      <div className='flex flex-col w-full'>
        <h1 className="text-center text-xl md:text-3xl mt-5 mb-5">What we are doing</h1>
        <div className="md:flex gap-4 ">
          <div className="bg-[#F3FCE2]  w-full p-10 md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <FaPrayingHands  size={50} className='mx-auto text-[green]'/>
            <p className="text-center mt-5">Welfare</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3 hover:animate-bounce rounded-lg">
            <GiStethoscope size={50} className='mx-auto text-[green]' />
            <p className="text-center mt-5">Medical</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10 md:w-[25%] mt-3  hover:animate-bounce  rounded-md">
            <MdOutlineCastForEducation  size={50} className='mx-auto text-[green]'/>
            <p className="text-center mt-5">Education</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <GiForkKnifeSpoon  size={50} className='mx-auto text-[green]'/>
            <p className="text-center mt-5">Food</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <GiWaterBottle  size={50} className='mx-auto text-[green]'/>
            <p className="text-center mt-5">RO Plant</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <FcMoneyTransfer size={50} className='mx-auto text-[green]' />
            <p className="text-center mt-5">Online Sadqa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
