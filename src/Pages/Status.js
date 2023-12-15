import React, { useState } from 'react';
import Header from '../Components/Header';
import NavbarComponent from '../Components/NavbarComponent'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Status = () => {
  const [selectedOption, setSelectedOption] = useState('applicationNumber');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='m-0 p-0'>
        <NavbarComponent/>
        <div className='w-full flex flex-col justify-between items-center mt-20'> 

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
                <div>
                    <TextField className="w-full px-8 py-2 rounded-lg font-medium text-gray-800 bg-gray-100 border-2 border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Application Number" 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><KeyboardIcon /> </InputAdornment>),}}/>
                </div>
                )}

                {selectedOption === 'getOTP' && (
                <div>
                    <TextField className="w-full px-8 py-2 rounded-lg font-medium text-gray-800 bg-gray-100 border-2 border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Registered Mobile Number" 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><PhoneAndroidIcon /> </InputAdornment>),}}/>
                </div>
                )}
            </div>
            
            <div className='mt-10'>
                {selectedOption === 'getOTP' ? <button className='bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'> Get OTP </button> : <button className='bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'> Continue </button>}
            </div>

        </div>
    </div>
  );
};

export default Status;
