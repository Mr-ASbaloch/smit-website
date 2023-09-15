import React from "react";
import Loader from "../Loader/Loader";
import ShowTime from "../NavbarUpper/ShowTime";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Guide from "../Home/Guide/Guide";

const Smit = () => {
  return (
    <div>
        <Loader/>
        <ShowTime/>
        <Navbar/>
      <div className="md:px-[8%] mt-8">
        <div className="md:flex w-full mt-8 lg:mb-8">
          <div className="p-5 md:w-[50%] mt-5">
            <p className="font-semibold text-3xl capitalize mt-5 lg:text-5xl lg:py-5 lg:mb-8  ">
              Welcome to the{" "}
              <span className="text-[#97CB50] font-bold"> SMIT</span>
            </p>
            <p className="mt-3">
              <h1>Services - Education - Technical Education - SMIT</h1>
              <span className=" text-2xl block font-semibold mt-2 mb-2">
                {" "}
                Saylani Mass IT Training
              </span>
              Today is the age of information technology and we aim to equip our
              youth with computer programming skills and prepare them for the
              development of the country. In this regard, our Saylani Mass IT
              Training Program providing vocational training to more than 75,000
              students in{" "}
              <span className="text-xl text-blue-600 ml-2">
                Web and Mobile Application Development
              </span>{" "}
              , <span className="text-xl text-green-600">CCNA</span>,{" "}
              <span className="text-xl text-red-600 ml-2"> Graphics
              Designing</span>, Computer Based Accounting in Karachi, Hyderabad,
              Faisalabad, Islamabad. Our goal is to develop more than 1 million
              software developers across the country, which will add about $100
              billion annually to Pakistan's economy. Saylani Guide
            </p>
          </div>
          <div className=" md:flex md:w-[50%]">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646497311/website-images/static/24.jpg"
              alt="main"
            />
          </div>
        </div>
      </div>
      <Guide/>
      <Footer/>
    </div>
  );
};

export default Smit;
