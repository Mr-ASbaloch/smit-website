import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous operation like fetching data
    // In a real application, replace this with your actual loading logic
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Change the timeout as needed
  }, []);

  return (
    <div  className={`fixed top-0 left-0 w-full text-green-600  h-full flex items-center justify-center ${loading ? 'block' : 'hidden'}`}>
      <Spin size="large"  className='text-green-400 font-bold'/>
    </div>
  );
};

export default Loader;
