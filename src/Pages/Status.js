import React, { useState } from 'react';
import Header from '../Components/Header';

const Status = () => {
  const [selectedOption, setSelectedOption] = useState('applicationNumber');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='m-0 p-0'>
        <Header/>
        <div className='w-full flex flex-col justify-between items-center mt-28'> 

            <h1 className='text-2xl font-serif font-bold'> Know Your Application Status </h1>

            <div className='flex flex-row justify-between items-center mt-10 text-lg font-semibold'>

                <div className='flex flex-row p-4'>
                    <p className='w-full p-1'>Application Number</p>
                    <label className='p-2'>
                        <input type="radio" value="applicationNumber" checked={selectedOption === 'applicationNumber'} onChange={handleOptionChange} className='h-6 w-6'/> 
                    </label>
                </div>

                <div className='flex flex-row p-4'>
                    <p className='w-full  p-1'>Get OTP</p>
                    <label className='p-2 '>
                        <input type="radio" value="getOTP" checked={selectedOption === 'getOTP'} onChange={handleOptionChange} className='h-6 w-6'/> 
                    </label>
                </div>
            </div>  

            <div className='w-1/2 justify-center items-center mt-6'>
                {selectedOption === 'applicationNumber' && (
                <div className=''>
                    <input type="text" className='border-2 rounded-md' placeholder='Enter Application Number'/>
                </div>
                )}

                {selectedOption === 'getOTP' && (
                <div>
                    <input type="text" className='border-2 rounded-md' placeholder="Mobile Number" />
                    
                </div>
                )}
            </div>
            
            <div className='mt-10'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Get OTP </button>
            </div>

        </div>
    </div>
  );
};

export default Status;
