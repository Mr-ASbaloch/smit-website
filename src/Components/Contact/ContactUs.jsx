import { Form ,Input } from "antd";
import React from "react";


const ContactUs = () => {
  return (
    <div>
      <Form className="w-full px-4">
        <Form.Item label="Name">
          <Input type="text"/>
        </Form.Item>
        <Form.Item label="Email">
        <Input type="email"/>
        </Form.Item>
        <Form.Item label="Subject">
        <Input type="text"/>
        </Form.Item>
        <Form.Item label="Message">
        <Input/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
