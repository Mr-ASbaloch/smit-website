import React from "react";
import { AiOutlineMail ,AiOutlinePhone} from "react-icons/ai";

const ShowTime = () => {
  return (
    <div>
      <div className="bg-[#EEEEEE] h-8 hidden md:flex items-center justify-between font-semibold px-[8%]">
        <div className="flex items-center gap-1">
          <AiOutlineMail  /> <p>dummy@gmail.com</p>
          <p className="mx-5 flex items-center gap-1"> <AiOutlinePhone/>+92123456789</p>
        </div>

        <div>
          <button className="bg-white p-2 px-5">English</button>
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
