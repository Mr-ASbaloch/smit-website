import { Form, Input } from "antd";
import React from "react";

import ShowTime from "../NavbarUpper/ShowTime";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Guide from "../Home/Guide/Guide";
import Loader from "../Loader/Loader";
const ContactUs = () => {
  return (
    <>
    <Loader/>
      <ShowTime />
      <Navbar />
      <div className="w-full md:px-[8%]">
        <div className="relative">
          <img
            src="https://img.freepik.com/free-vector/contact-us-button_23-2147501291.jpg?size=626&ext=jpg"
            alt="image"
            className=" w-full h-[180px]  md:w-full md:h-[180px] object-cover bg-blend-screen "
          />
        
        </div>
        <div className="md:flex md:flex-row flex flex-col mt-8 md:mt-28 md:mb-16 ">
          <div className="  md:w-[40%]">
            <Form className="px-3">
              <Form.Item
                label="Name"
                name="name"
                required
                hasFeedback
                rules={[
                  {
                    required: true,

                    message: "please enter your full name",
                  },
                  { min: 7 },
                ]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,

                    message: "please enter valid email ",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Subject"
                name="query"
                hasFeedback
                rules={[
                  {
                    required: true,

                    message: "please write your subject",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="Message"
                hasFeedback
                rules={[
                  {
                    required: true,

                    message: "please write down message",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <button
                type="submit"
                className="bg-blue-500 px-8 p-2 rounded-md text-white font-bold w-full md:w-1/2 flex justify-center mx-auto text-center"
              >
                Submit
              </button>
            </Form>
          </div>
          <div className=" mx-auto flex md:w-[45%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046328117!2d72.92448740259354!3d31.423759041229868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694778574531!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" mt-8 md:mt-0 rounded-md h-[300px] w-[300px] md:w-full md:h-full "
            ></iframe>
          </div>
        </div>
      </div>
      <Guide />
      <Footer />
    </>
  );
};

export default ContactUs;
