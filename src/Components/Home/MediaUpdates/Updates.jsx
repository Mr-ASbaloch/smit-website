import React from "react";
import Media from "./Media";

const Updates = () => {
  return (
    <div className="md:px-[8%]">
        <h1 className='text-center md:text-3xl md:font-semibold mb-5'>Media Updates</h1>
      <div className='main-Updates md:flex  md:flex-wrap md:gap-3  md:mx-auto'>
     <Media/>
     <Media/>
     <Media/>
     <Media/>
  

      </div>
    </div>
  );
};

export default Updates;
