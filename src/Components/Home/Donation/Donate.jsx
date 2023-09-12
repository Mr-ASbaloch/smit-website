import { Input } from "antd";
import React from "react";


const Donate = () => {
  return (
    <div className="donate-main  md:px-[8%] ">
      <div className="bg-[#F0FCDB] md:h-[200px]  rounded-md">
        <div className='p-5 mt-3 flex flex-wrap  justify-evenly gap-5 md:gap-10 m-5'>
          <Input prefix={"general" }      suffix={"$"}  className='w-[180px]'></Input>
          <button className='bg-white  mt-3 rounded-md hover:bg-black hover:text-white font-semibold p-3 hover:scale-105'>Blood Bank / Thalassemia Treatment</button>
          <button className='bg-white h-[60px] mt-3 rounded-md hover:bg-black hover:text-white font-semibold p-3 hover:scale-105'>Family Kifalat</button>
          <button className='bg-white h-[60px] mt-3 rounded-md hover:bg-black hover:text-white font-semibold p-3 hover:scale-105'>Medical </button>
          <button className='bg-white h-[60px] mt-3 rounded-md  hover:bg-black hover:text-white font-semibold p-3 hover:scale-105'> Food</button>
          <button  className='bg-[#8DC63F] h-[60px]  rounded-md  md:w-1/5  font-semibold p-3 hover:scale-105'>Quick Donate</button>
        </div>
      </div>
   
      <img src="/public/95f11c54-b518-4d7f-8d24-b280acc9.jpg" alt="img"  className="rounded-md mt-5 md:h-[550px]  mb-5 md:w-full object-fit"/>
   
    </div>
  );
};

export default Donate;
