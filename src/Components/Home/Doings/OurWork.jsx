import React from "react";
import { FaPrayingHands } from "react-icons/fa";
import { GiStethoscope, GiWaterBottle, GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

const OurWork = () => {
  return (
    <div className="work-main px-5 md:px-[8%]">
      <div className='flex flex-col w-full'>
        <h1>What we are doing</h1>
        <div>
          <div className="bg-[#F3FCE2]  w-full p-10  ">
            <FaPrayingHands  size={50} className='m'/>
            <p>Welfare</p>
          </div>
          <div>
            <GiStethoscope />
            <p>Medical</p>
          </div>
          <div>
            <MdOutlineCastForEducation />
            <p>Education</p>
          </div>
          <div>
            <GiForkKnifeSpoon />
            <p>Food</p>
          </div>
          <div>
            <GiWaterBottle />
            <p>RO Plant</p>
          </div>
          <div>
            <FcMoneyTransfer />
            <p>Online Sadqa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
