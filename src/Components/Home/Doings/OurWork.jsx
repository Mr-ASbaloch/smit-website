import React from "react";
import { FaPrayingHands } from "react-icons/fa";
import { GiStethoscope, GiWaterBottle, GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { Button } from "antd";

const OurWork = () => {
  return (
    <div className="work-main px-5 md:px-[8%] mb-8   ">
      <div className="flex flex-col w-full">
        <h1 className="text-center text-xl md:text-3xl mt-5 mb-5">
          What we are doing
        </h1>
        <div className="md:flex gap-4 ">
          <div className="bg-[#F3FCE2]  w-full p-10 md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <FaPrayingHands size={50} className="mx-auto text-[green]" />
            <p className="text-center mt-5">Welfare</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3 hover:animate-bounce rounded-lg">
            <GiStethoscope size={50} className="mx-auto text-[green]" />
            <p className="text-center mt-5">Medical</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10 md:w-[25%] mt-3  hover:animate-bounce  rounded-md">
            <MdOutlineCastForEducation
              size={50}
              className="mx-auto text-[green]"
            />
            <p className="text-center mt-5">Education</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <GiForkKnifeSpoon size={50} className="mx-auto text-[green]" />
            <p className="text-center mt-5">Food</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <GiWaterBottle size={50} className="mx-auto text-[green]" />
            <p className="text-center mt-5">RO Plant</p>
          </div>
          <div className="bg-[#F3FCE2]  w-full p-10  md:w-[25%] mt-3  hover:animate-bounce rounded-md">
            <FcMoneyTransfer size={50} className="mx-auto text-[green]" />
            <p className="text-center mt-5">Online Sadqa</p>
          </div>
        </div>

{/* donate section  */}

        <div className="md:flex md:gap-8 mt-8 mb-5 mx-auto justify-between">
          <div className="md:w-[30%] relative mb-5 md:mb-0 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDhkG6BEh8o5HYbj9FVpR9QwH_hYJ8Gv4GCPOknx0W9NgXPJytlPm3U7_jx0nFzLr35A&usqp=CAU"
              alt="img"
              className="w-[450px] h-[250px]  rounded-lg opacity-30 hover:opacity-50  hover:scale-105  text-[black]"
            />
            <div className="absolute left-[25%]  bottom-5 text-white mb-5">
              <p className="mx-auto text-center text-black font-semibold text-xl">Daily Food</p>
              <button className="bg-[green] font-bold text-white flex text-center  mx-auto p-1 px-8 w-[100%]  rounded-md">
                Donate
              </button>
            </div>
          </div>
          <div className="md:w-[30%] relative mb-5 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcp3R2xoN-LfIbnga0SVIMiR7nB48_x9__r769itUEpwquy3cEbBrqpn7jxet3qkUEhlw&usqp=CAU"
              alt="img"
              className="w-[450px] h-[250px]  rounded-lg opacity-30 hover:opacity-50 hover:scale-105"
            />
            <div className="absolute left-[25%]  bottom-5 text-white mb-5">
              <p className="mx-auto text-center text-black font-semibold text-xl">SMIT</p>
              <button className="bg-[green] font-bold text-white flex text-center  mx-auto p-1 px-8 w-[100%]  rounded-md">
                Donate
              </button>
            </div>
          </div>
          <div className="md:w-[30%] relative mb-5 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZQ8ExBMX8HY02BZ92nz-74Kq5h8CiYDZlg&usqp=CAU"
              alt="img"
              className="w-[450px] h-[250px]  rounded-lg opacity-30 hover:opacity-50  hover:scale-105"
            />
           <div className="absolute left-[25%]  bottom-5 text-white mb-5">
              <p className="mx-auto text-center text-black font-semibold text-xl">Zakat</p>
              <button className="bg-[green] font-bold text-white flex text-center  mx-auto p-1 px-8 w-[100%]  rounded-md">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
