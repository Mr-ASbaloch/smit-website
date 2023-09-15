import React from "react";
import ShowTime from "../NavbarUpper/ShowTime";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Guide from "../Home/Guide/Guide";
import Loader from "../Loader/Loader";

const Intro = () => {
  return (
    <>
    <Loader/>
      <ShowTime />
      <Navbar />
      <div className="md:px-[8%]">
        <div className="md:flex w-full mt-8 lg:mb-8">
          <div className="p-5 md:w-[50%] mt-5">
            <p className="font-semibold text-3xl capitalize mt-5 lg:text-5xl lg:py-5 lg:mb-8  ">
              Welcome to the{" "}
              <span className="text-[#97CB50] font-bold"> Saylani</span> welfare
            </p>
            <p className="mt-3">
              Saylani Welfare is on the ground and already working with local
              communities to assess how best to support underprivileged families
              in more than 63 areas of day to day lives
            </p>
          </div>
          <div className="hidden md:flex md:w-[50%]">
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647964514/website-images/static/62.jpg"
              alt="main"
            />
          </div>
          
        </div>
        <div className="px-3 mb-6">
            <p className="text-xl font-bold md:text-4xl md:mb-5">Assalam-o-Alaikum</p>
            <p className="mt-2 text-blue-600 font-bold">
              Who is it that would loan Allah a goodly loan so He may multiply
              it for him many times over?
            </p>
            <h1 className="text-green-600 font-semibold mt-2">( Surat Baqara, Verse 245 )</h1>
            <p className="text-xl mt-3">
              It should be noted that Allah, who is in need of no one and
              nothing, instills upon his men to give Qarz-e-Hasana because it is
              in man’s nature to be frugal whilst spending his wealth. Allah
              speaks about qarz because it is returned and Allah promises that
              He will return the goodly loan by 70 folds. Allah conveys his
              message to the Muslim ummah through the Holy Prophet Muhammad
              prompting Muslims to spend their wealth in a certain way. He
              says,Oh children of Adam! Trust me with your wealth. If you do so,
              no fire, flood or thieves will be able to rob you off your money.{" "}
            </p>
            <p className="text-xl mt-3">
              Alhamdollilah, Allah has accorded Saylani Welfare with the highest
              favor by sending those people our way who follow the teachings of
              the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and
              other donations to help us help those in need. The purpose of
              sending this message to you is so that you not only spread this
              message to others but also play your part in helping us to
              continue serving and helping the needy till the Day of Judgment.
            </p>
            <p className="text-2xl text-green-700 mt-4">Chairman Saylani Welfare</p>
          </div>

        <Guide />
      </div>
      <Footer />
    </>
  );
};

export default Intro;
