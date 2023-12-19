import React from 'react';
import NavbarComponent from '../Components/NavbarComponent'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {useNavigate} from 'react-router-dom';

const Status = () => {
    const navigate = useNavigate();
    function statusDetails() {
        navigate('/statusdetails')
    }

  return (
    <div className='h-screen m-0 p-0'>
        <div className='sticky top-0 z-50 h-1/5'> <NavbarComponent/> </div>
        <div className='h-4/5 flex flex-col items-center bg-gray-200 p-24 pt-28'> 
            <h1 className='text-2xl font-serif font-bold'> Know Your Application Status </h1>
            <div className='w-1/2 justify-center items-center mt-6'>
                <div>
                    <TextField className="w-full px-8 py-2 rounded-lg font-medium text-gray-800 bg-gray-50 border-2 border-gray-100 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Application Number" 
                    InputProps={{ startAdornment: (<InputAdornment position="start"><KeyboardIcon /> </InputAdornment>),}}/>
                </div>
            </div>
            <div className='mt-10'>
                <button onClick={statusDetails} className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'> Continue </button>
            </div>
        </div>
    </div>
  );
};

export default Status;
