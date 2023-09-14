import { Select, message } from "antd";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
    if (count < 1) {
      message.error("please select at least one");
      setCount(count);
    }
  };
  return (
    <div className="flex flex-col mx-auto pb-5 w-2/3 ">
      <div className="flex mx-auto  mt-5 mb-3">
        <button
          className="bg-blue-400 hover:scale-105 p-1 font-bold text-2xl  rounded-md px-5 mx-3"
          onClick={decrease}
        >
          -
        </button>
        <h1 className="font-bold text-xl text-center"> {count}</h1>
        <button
          className="bg-green-400 hover:scale-105 p-1 font-bold text-2xl rounded-md px-5 mx-3"
          onClick={increase}
        >
          +
        </button>
      </div>
      <div className="flex flex-col mx-auto  w-full">
        <Select className="border border-green-400 w-2/3 mx-auto mb-4 mt-4" placeholder="Amount">
          <Select.Option >1000 Pkr</Select.Option>
          <Select.Option>20 USD</Select.Option>
        </Select>
        <Select className="border border-green-400 w-2/3 mx-auto mb-5 outline-none  " placeholder="Donation type">
          <Select.Option> Sadqa</Select.Option>
          <Select.Option>Zakat</Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default Counter;
