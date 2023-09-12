import { Button, Input } from "antd";
import React from "react";

const Donate = () => {
  return (
    <div className="donate-main">
      <div className="bg-[#F0FCDB]">
        <div>
          <Input prefix={"general"} ></Input>
          <Button>Blood Bank / Thalassemia Treatment</Button>
          <Button>Family Kifalat</Button>
          <Button>Medical </Button>
          <Button> Food</Button>
          <Button >Quick Donate</Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
