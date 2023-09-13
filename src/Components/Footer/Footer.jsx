import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <img src="/footer.png" alt="" className="w-full h-[220px]" />
        <div className=" bg-[#424242] opacity-80 text-white absolute top-0 w-full pb-5">
          <div className="m-0 p-0 mt-5 md:mt-10 md:mb-10 md:flex md:gap-5 ">
            <div className="lg:w-[40%] lg:p-5 pt-5">
              <h1 className="flex gap-2 items-center justify-center mt-5">
                <img
                  src="/logo_saylaniwelfareusa.22bf70960__1_-removebg-preview.png"
                  alt="logo"
                  className="w-[250px] flex object-cover items-center p-1  mt-1 "
                />
              </h1>

              <p className="flex  justify-center gap-5  font-bold mt-4">
                <BsFacebook size={20} />
                <BsTwitter size={20} />
                <BsMessenger size={20} />
                <BsYoutube size={20} />
              </p>
            </div>
            <div className="flex justify-around md:justify-start md:gap-10 md:p-5 lg:w-[30%] md:text-left">
              <ol className="font-light mt-4">
                <h1 className="font-bold text-xl">About</h1>
                <li className="mt-3">Introduction</li>
                <li className="mt-3">Chairmain Message</li>
              </ol>
              <ol className="font-light mt-4">
                <h1 className="font-bold">Explore</h1>
                <li className="mt-3">News</li>
                <li className="mt-3">Media</li>
                <li className="mt-3">Contact</li>
                <li className="mt-3">Donation </li>
              </ol>
            </div>

            <div className=" mt-5 mb-5 text-center pt-5 md:justify-start  md:p-5 lg:w-[30%] md:text-left">
              <p className="text-xl">KEEP UP WITH US</p>
              <p className="pt-3">
                Stay up to date by reading our high quality <br />
                article and personalized for you
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Footer;
