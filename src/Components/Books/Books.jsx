import React, { useState } from "react";
import Loader from "../Loader/Loader";
import {
  AiOutlineDownload,
  AiOutlineShareAlt,
  AiOutlineFolderView,
} from "react-icons/ai";
import ShowTime from "../NavbarUpper/ShowTime";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Guide from "../Home/Guide/Guide";

const Books = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
          <Loader /> 
      {loading ? (
        <Loader />
      ) : (
        <>
        <ShowTime/>
        <Navbar/>
          <div className="main px-3 md:px-[8%]">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGCAfwOTpru2lqG5CDwIvPxiLD12wkvih7w&usqp=CAU"
                alt="image"
                className=" w-full h-[180px]  md:w-full md:h-[180px] object-cover bg-blend-screen "
              />
              <button className=" absolute top-1/2 left-[28%] text-center lg:text-3xl rounded-md p-1 font-bold bg-transparent bg-white px-8 text-blue-800 md:w-1/3 md:text-lg md:p-2">
                Books
              </button>
            </div>
            <div className="cards w-full   md:flex md:gap-8   md:flex-wrap  mt-8 md:mt-20">
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/63.png"
                  alt="img"
                  className="w-auto  p-5 mx-auto  "
                />
                <p className="text-center font-bold">Adab-E-MAIYAT</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/81.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AHKAM-E-QURAN</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/65.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AETIKAF</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5 hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/65.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AMMA</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/67.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold"> ANMOOL KHAZANA</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/64.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AQAID-E-ISLAMIYA</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/81.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AHKAM-E-QURAN</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/81.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AHKAM-E-QURAN</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              <div className="w-[200px] md:w-[200px] bg-[whiteSmoke] border border-green-500 mx-auto mt-5  hover:scale-105 rounded-lg">
                <img
                  src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647985154/website-images/static/81.png"
                  alt="img"
                  className="w-auto p-5 mx-auto"
                />
                <p className="text-center font-bold">AHKAM-E-QURAN</p>
                <p className="text-center mt-3">Hazrat Basheer Farooqui</p>
                <div className="flex items-center  gap-3 mb-3 mx-auto px-3">
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    {" "}
                    <AiOutlineDownload size={20} />
                  </h1>
                  <h1 className=" mt-2 font-bold border-r-2 px-3 ">
                    <AiOutlineFolderView />
                  </h1>
                  <h1 className=" mt-2 font-bold  px-3">
                    <AiOutlineShareAlt />
                  </h1>
                </div>
              </div>
              
            </div>

          </div>
          <Guide/>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Books;
