import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuSearchLine } from "react-icons/ri";
import { Drawer } from "antd";

const Mobile = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex px-5 md:hidden mt-4 mb-5">
      <div>
        <img
          src="/logo_saylaniwelfareusa.22bf70960__1_-removebg-preview.png"
          alt="logo"
          className="w-1/2 h-full"
        />
      </div>
      <div>
        <h1
          className="flex"
          onClick={() => {
            setNav(true);
          }}
        >
          <RiMenuSearchLine
            size={30}
            className="flex font-bold text-[#8DC63F]"
          />
        </h1>
      </div>

      <Drawer
        open={nav}
        onClose={() => {
          setNav(false);
        }}
      
      >
        <div className="flex flex-col gap-3 font-[poppin] text-xl ">
          <Link
            to={"/"}
            className="text-center border-b-2 w-1/2 mb-3 mx-auto border-b-green-500  "
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-center border-b-2 w-1/2 mb-3 mx-auto border-b-green-500  "
          >
            About
          </Link>
          <Link
            to={"/services"}
            className="text-center border-b-2 w-1/2 mb-3 mx-auto border-b-green-500  "
            onClick={() => {
              setNav(false);
            }}
          >
            Services
          </Link>
          <Link
            to={"/media"}
            className="text-center border-b-2 w-1/2 mb-3 mx-auto border-b-green-500  "
          >
            Media
          </Link>
          <Link
            to={"/contact"}
            className="text-center border-b-2 w-1/2 mb-3 mx-auto border-b-green-500  "
          >
            Contact Us
          </Link>
          <Link to={"/donate"}>
            <button className="bg-[#0D6DB7] hover:scale-110 mx-[25%]  w-1/2 px-5 text-center p-2 h-[48px] rounded-md text-white">
              Donation
            </button>
          </Link>

          <Link to={"/Sponser"}>
            <button className="bg-[#8DC63F] hover:scale-110 p-2   mx-[25%]  hover:text-white w-1/2  px-5  h-[48px] rounded-md   text-white">
              SponserShip
            </button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Mobile;
