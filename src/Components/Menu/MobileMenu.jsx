import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      MobileMenu
      <Button
        className="md:hidden"
        onClick={() => {
          setMenu(true);
        }}
      >
        click{" "}
      </Button>
      <Drawer 
     
        open={menu}
        onClose={() => {
          setMenu(false);
        }}
        placement="left"
      >
<Menu>
        
</Menu>

      </Drawer>
    </>
  );
};

export default MobileMenu;
