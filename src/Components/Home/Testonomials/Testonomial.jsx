import { Avatar, Carousel } from "antd";
import React, { useRef } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testonomial = () => {
  const ref = useRef();
  return (
    <div className="main-div md:px-[8%] mb-10 ">
      <h1 className="text-[#8DC63F]  text-xl md:text-3xl text-center">
        Our Testimonials
      </h1>
      <h1 className="text-center mt-5 mb-3">What they Say ?</h1>
      <div className="bg-[#EEEEEE] px-6 pt-8 pb-5">
        <div className=" md:px-10 mx-auto border-black  ">
          <Carousel
            
            className="mb-6 p-10"
            dots={false}
            effect="scrollx"
            ref={ref}
          >
            <div>
              <Avatar
                size={80}
                icon={
                  <FaUserGraduate
                    size={50}
                    className="flex mx-auto text-green-950"
                  />
                }
                className="mx-auto flex items-center mb-5"
              />
              <h1 className="text-center text-xl font-semibold text-blue-900">
                Mr David
              </h1>
              <p className="text-center text-bold text-blue-900 mb-3">
                CEO of <span className="text-black text-lg">David's</span>{" "}
                Company
              </p>
              <p>
                When we talk about serving humanity, no second thought occurs
                other than Saylani Welfare Trust. Saylani is doing a tremendous
                job in terms of everything they do for a troubled humanity. From
                offering food to the hungry to arranging jobs for jobless
                people, arranging marriages and dowry for orphaned girls,
                offering free medical facilities, and much more. We sincerely
                wish them success in their future endeavors and in raising their
                standards of serving mankind in a better and more professional
                way.
              </p>
            </div>
            <div>
              <Avatar
                size={84}
                icon={
                  <FaUserGraduate
                    size={50}
                    className="flex mx-auto text-green-950"
                  />
                }
                className="mx-auto flex items-center mb-5"
              />
              <h1 className="text-center text-xl font-semibold text-blue-900">
                Mr David
              </h1>
              <p className="text-center text-bold text-blue-900 mb-3">
                CEO of <span className="text-black text-lg">David's</span>{" "}
                Company
              </p>
              <p></p>
              <p>
                When we talk about serving humanity, no second thought occurs
                other than Saylani Welfare Trust. Saylani is doing a tremendous
                job in terms of everything they do for a troubled humanity. From
                offering food to the hungry to arranging jobs for jobless
                people, arranging marriages and dowry for orphaned girls,
                offering free medical facilities, and much more. We sincerely
                wish them success in their future endeavors and in raising their
                standards of serving mankind in a better and more professional
                way.
              </p>
            </div>
          </Carousel>
          <div className="flex justify-center gap-5">
            <button className="bg-white p-3 px-5 rounded-md " onClick={()=>{
                ref.current.prev()
            }}>
              {" "}
              <AiOutlineLeft size={25} />
            </button>
            <button className="bg-[#8DC63F] p-3 px-5 rounded-md " onClick={()=>{
                ref.current.next()
            }}>
              <AiOutlineRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testonomial;
