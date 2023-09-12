import React from "react";
import {LuCalendarClock} from 'react-icons/lu'
import { AiOutlineMail ,AiOutlinePhone} from "react-icons/ai";
import { useState,useEffect } from "react";

const ShowTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    // Update the currentDateTime every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="bg-[#EEEEEE] h-8 hidden md:flex items-center justify-between font-semibold px-[8%]">
        <div className="flex items-center gap-1">
          <AiOutlineMail  /> <p>dummy@gmail.com</p>
          <p className="mx-5 flex items-center gap-1"> <AiOutlinePhone/>+92123456789</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Display the current date and time */}
          <LuCalendarClock size={20}/>
          <p> {currentDateTime.toLocaleString()}</p>
        </div>
        <div>
          <button className="bg-white p-2 px-5">English</button>
        </div>
        
      </div>
    </div>
  );
};

export default ShowTime;
