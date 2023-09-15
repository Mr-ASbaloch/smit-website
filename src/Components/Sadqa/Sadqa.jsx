import React from "react";
import Step from "./StepVerification";
import Faqs from "./FAQS";
import { Divider } from "antd";
import Footer from "../Footer/Footer";
import Guide from "../Home/Guide/Guide";
import Navbar from "../Navbar/Navbar";
import ShowTime from "../NavbarUpper/ShowTime";
import Loader from "../Loader/Loader";
import { useState } from "react";

const Sadqa = () => {
  const [loading, setLoading] =useState(false)
  return (
    <>

{loading ? (
        <Loader />
      ) :( <> 
    <ShowTime/>
    <Navbar/>
    <div className="main  md:px-[8%] md:mb-10">
      <div>
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtoOuiAQ6zyzHTpI8-zYT7EeaahRQUVi42g&usqp=CAU"
            alt="image"
            className=" w-full h-[180px]  md:w-full md:h-[180px] object-cover bg-blend-screen grayscale"
          />
          <button className=" absolute top-1/2 left-[28%] text-center lg:text-3xl rounded-md p-1 font-bold bg-transparent bg-white px-8 text-blue-800 md:w-1/3 md:text-lg md:p-2">
            Donations
          </button>
        </div>
        <div>
          <Step />
        </div>
        <div className="cards w-full   md:flex md:gap-8   md:flex-wrap ">
          <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1678944812/website-images/static/116.png"
              alt="img"
              className="w-[100px] p-5 mx-auto"
            />
            <p className="text-center font-bold">Blood Bank</p>
          </div>
          <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1674113561/website-images/static/105.png"
              alt="img"
              className="w-[100px] p-5 mx-auto"
            />
            <p className="text-center font-bold">Family Kiflat</p>
          </div>
          <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646655697/website-images/dynamic/Goat_q5fe3x.png"
              alt="img"
              className="w-[100px] p-5 mx-auto"
            />
            <p className="text-center font-bold">Sadqah</p>
          </div>
          <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5 hover:scale-105 rounded-lg">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646655556/website-images/dynamic/payment-method_1_tuu0xu.png"
              alt="img"
              className="w-[100px] p-5 mx-auto"
            />
            <p className="text-center font-bold">Zakat</p>
          </div>
          <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646655556/website-images/dynamic/payment-method_1_tuu0xu.png"
              alt="img"
              className="w-[100px] p-5 mx-auto"
            />
            <p className="text-center font-bold"> Electricity Bill Support</p>
          </div>
          <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646655652/website-images/dynamic/donation_1_ryrqjp.png"
              alt="img"
              className="w-[100px] p-5 mx-auto"
            />
            <p className="text-center font-bold">Other Donation</p>
          </div>
        </div>
        <Divider/>
        <div className="px-2 mt-8">
          <h1 className="text-center font-semibold text-xl text-blue-500 md:text-4xl mb-5">Donation FAQs</h1>
          <Divider/>
        <Faqs />

        </div>
      </div>
      
    </div>
    <Guide/>
    <Footer/>
    </>)}
    </>
   
  );
};

export default Sadqa;
