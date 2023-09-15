import { Form, Input, message } from "antd";
import React from "react";

const Guide = () => {
  return (
    <div className="main md:px-[8%] px-2 mt-8 mb-5 ">
      <div className="wraper relative ">
        <img
          src="https://i.tribune.com.pk/media/images/2178912-image-1584559620/2178912-image-1584559620.jpg"
          alt="img"
          className="md:h-[300px] md:w-full md:object-cover"
        />
        <div className="bg-[#8DC63F] absolute top-0 w-full h-full md:h-[300px] opacity-80">
          <div className="p-8">
            <h1 className="text-center font-bold text-white md:text-5xl ">
              Saylani Guide
            </h1>
            <div className="w-[85%] md:w-[30%] flex md:p-5  flex-col mt-3 mx-auto">
              <Form>
                <Form.Item name="Email" hasFeedback  rules={[
                  {
                    required: true,
                    message: "please enter valid email ",
                  },
                ]}>
                  <Input
                    type="email"
      
                   
                    id=""
                    placeholder="Enter E-mail Address"
                    className=" outline-none border  rounded-md w-full md:p-2 mb-3 bg-white"
                  />
                </Form.Item>
                <button
                  type="submit"
                  className="bg-white text-black rounded-md p-1  md:p-2 font-bold capitalize  w-full mx-auto hover:scale-110 "
                >
                  subscribe
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
