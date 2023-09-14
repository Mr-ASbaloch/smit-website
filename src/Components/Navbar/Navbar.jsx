import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='md:px-[8%] bg-white shadow-md h-16 py-2 sticky top-0 z-50  '>
      <div className="main  flex items-center  justify-between ">
      <img src="https://www.saylaniwelfareusa.com/static/media/logo_saylaniwelfareusa.22bf709605809177256c.png" alt="logo" 
           className='flex w-[180px]'
          />
        <div className="flex gap-3 font-[poppin] text-xl ">
          <Link to={'/'} className='hover:border-b-2 hover:border-b-green-500  '>Home</Link>
          <Link to={'/about'} className='hover:border-b-2 hover:border-b-green-500  '>About</Link>
          <Link to={'services'} className='hover:border-b-2 hover:border-b-green-500  '>Services</Link>
          <Link to={'/media'} className='hover:border-b-2 hover:border-b-green-500  '>Media</Link>
          <Link to={'/contact'} className='hover:border-b-2 hover:border-b-green-500  '>Contact Us</Link>   
        </div>
        <div>

     <Link to={'/doante'}>
     <button className="bg-[#0D6DB7] hover:scale-110  mx-3 px-5 text-center p-2 h-[38px] rounded-md text-white" >Donate Now</button>
        
     </Link>  
 

        
        <Link to={'/sponser'}>
        <button    className="bg-[#8DC63F] hover:scale-110 p-2   hover:text-white  px-5  h-[38px] rounded-md   text-white" >
        Be A Sponser
        </button>
        </Link>
      </div>
      </div>

    </div>
  );
};

export default Navbar;
