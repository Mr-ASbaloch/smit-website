import { Card, Typography } from "antd";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const News = () => {
  return (
    <div className="md:px-[8%] md:mb-8">
      <h1 className="text-center text-xl md:text-3xl font-semibold mb-5">
        News
      </h1>
      <div className="md:flex ">
        <Card
          cover={
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1693455802/website-images/dynamic/9d1c0565-196f-416d-a18c-169599c3f34a.jpg"
              alt="image"
              className="w-full"
            />
          }
          className="mx-3 md:w-[300px] bg-[#EEEEEE] mt-5 md:mt-0"
        >
          <Typography.Text className="font-semibold">
            Certification Ceremony Saylani Mass It Training
          </Typography.Text>
          <button className="px-3 p-1 mt-2  block bg-[#8DC63F] text-white rounded-md">
            wed August 30 2023
          </button>
          <button className="bg-white text-center mt-3 flex items-center px-4 p-3 hover:scale-95">
            <IoMdArrowForward size={20} />
          </button>
        </Card>
        <Card
          cover={
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1693455802/website-images/dynamic/9d1c0565-196f-416d-a18c-169599c3f34a.jpg"
              alt="image"
              className="w-full"
            />
          }
          className="mx-3 md:w-[300px] bg-[#EEEEEE] mt-5 md:mt-0"
        >
          <Typography.Text className="font-semibold">
            Certification Ceremony Saylani Mass It Training
          </Typography.Text>
          <button className="px-3 p-1 mt-2  block bg-[#8DC63F] text-white rounded-md">
            wed August 30 2023
          </button>
          <button className="bg-white text-center mt-3 flex items-center px-4 p-3 hover:scale-95">
            <IoMdArrowForward size={20} />
          </button>
        </Card>
        <Card
          cover={
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1693455802/website-images/dynamic/9d1c0565-196f-416d-a18c-169599c3f34a.jpg"
              alt="image"
              className="w-full"
            />
          }
          className="mx-3 md:w-[300px] bg-[#EEEEEE] mt-5 md:mt-0"
        >
          <Typography.Text className="font-semibold">
            Certification Ceremony Saylani Mass It Training
          </Typography.Text>
          <button className="px-3 p-1 mt-2  block bg-[#8DC63F] text-white rounded-md">
            wed August 30 2023
          </button>
          <button className="bg-white text-center mt-3 flex items-center px-4 p-3 hover:scale-95">
            <IoMdArrowForward size={20} />
          </button>
        </Card>
        <Card
          cover={
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1693455802/website-images/dynamic/9d1c0565-196f-416d-a18c-169599c3f34a.jpg"
              alt="image"
              className="w-full"
            />
          }
          className="mx-3 md:w-[300px] bg-[#EEEEEE] mt-5 md:mt-0"
        >
          <Typography.Text className="font-semibold">
            Certification Ceremony Saylani Mass It Training
          </Typography.Text>
          <button className="px-3 p-1 mt-2  block bg-[#8DC63F] text-white rounded-md">
            wed August 30 2023
          </button>
          <button className="bg-white text-center mt-3 flex items-center px-4 p-3 hover:scale-95">
            <IoMdArrowForward size={20} />
          </button>
        </Card>
      </div>
    </div>
  );
};

export default News;
