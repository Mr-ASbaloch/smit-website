import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
const Step = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'Complete All steps.';
  return (

    <div className='hidden md:block mt-32 mb-20'>
        <h1 className='text-center md:text-3xl mb-5 text-green-400 font-semibold'>Your Donations</h1>
      <Steps
      
        current={current}
        // onChange={onChange}
        items={[
          {
            title: 'Step 1',
      
          },
          {
            title: 'Step 2',
        
          },
          {
            title: 'Step 3',
        
          },
        ]}
      />

      {/* <Divider /> */}

     
    </div>
  );
};
export default Step;