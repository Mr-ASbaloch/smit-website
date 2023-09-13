import { Button, Card, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="donate-main  md:px-[8%] ">
      <div className="bg-[#F0FCDB] md:h-[200px]  rounded-md">
        <div className="p-5 mt-3 flex flex-wrap  justify-evenly gap-5 md:gap-10 m-5">
          <Input prefix={"general"} suffix={"$"} className="w-[180px]"></Input>
          <button className="bg-white  mt-3 rounded-md hover:bg-black hover:text-white font-semibold p-3 hover:scale-105">
            Blood Bank / Thalassemia Treatment
          </button>
          <button className="bg-white h-[60px] mt-3 rounded-md hover:bg-black hover:text-white font-semibold p-3 hover:scale-105">
            Family Kifalat
          </button>
          <button className="bg-white h-[60px] mt-3 rounded-md hover:bg-black hover:text-white font-semibold p-3 hover:scale-105">
            Medical{" "}
          </button>
          <button className="bg-white h-[60px] mt-3 rounded-md  hover:bg-black hover:text-white font-semibold p-3 hover:scale-105">
            {" "}
            Food
          </button>
          <button
            className="bg-[#8DC63F] h-[60px]  rounded-md  md:w-1/5  font-semibold p-3 hover:scale-105"
            onClick={showModal}
          >
            Quick Donate
          </button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        title="Qucik Donation"
        onOk={handleOk}
      >
        <Form className="md:w-[300px] mx-auto">
          <Form.Item label="Currency" required>
            <Select
              placeholder="Donation type"
              disabled
              className="p-3"
            ></Select>
          </Form.Item>
          <Form.Item label="Donation Type" required>
            <Select placeholder="Donation type">
              <Select.Option>General Donation</Select.Option>
              <Select.Option>Medical</Select.Option>
              <Select.Option>Food</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="amount" required>
            <Input
              type="number"
              placeholder="amount"
              prefix="$ "
              className="p-3"
            />
          </Form.Item>
          <Form.Item label="Donar Name" required>
            <Input type="text" className="p-3" />
          </Form.Item>
          <Form.Item label="Phone " required>
            <Input prefix="+92" placeholder="Phone " className="p-3" />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input placeholder="email" className="p-3" />
          </Form.Item>
          <Form.Item label="Country" required >
            <Select placeholder="Country" className="p-3">
              <Select.Option>Pak</Select.Option>
              <Select.Option>USA</Select.Option>
              <Select.Option>Ind</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button className="bg-blue-500 w-full text-white font-bold h-full p-2">
              Donate
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <img
        src="/95f11c54-b518-4d7f-8d24-b280acc9.jpg"
        alt="img"
        className="rounded-md mt-5 md:h-[550px]  mb-5 md:w-full object-fit"
      />
    </div>
  );
};

export default Donate;
