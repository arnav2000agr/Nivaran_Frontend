import React, { useState } from 'react'
import Nivaran from '../Assets/Images/Nivaran.png'
import  Nivaran_icon from '../Assets/Images/Nivaran_icon.png'
import 'react-phone-number-input/style.css'
import 'tailwindcss/tailwind.css';
import Header from '../Components/Header';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavbarComponent';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Login = () => {
    const backgroundImageUrl = 'https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz';

    const navigate=useNavigate();

    function register(){

        navigate("/register");

    }
    return (
        <div className='w-screen flex flex-col justify-between bg-red-600'>

            <div className='sticky top-0 z-50'> <Navbar/> </div>

            <div className=" bg-gray-100 text-gray-900 flex justify-center">

                <div className="m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">

                    <div className="flex flex-col items-center lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                        <div className='w-1/3 flex items-center'>
                            <img src={Nivaran_icon} className=""/>
                        </div>

                        <div className="mt-4 flex flex-col items-center">
                            <div className="w-full flex-1">

                                <div className="mx-auto max-w-xs my-2">
                                    <div className='flex flex-col justify-between'> 

                                        <div>
                                            <TextField className="w-full px-8 py-2 rounded-lg font-medium text-gray-800 bg-gray-100 border-2 border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Mobile Number" InputProps={{ startAdornment: (<InputAdornment position="start">
                                                <PersonIcon />
                                                </InputAdornment>),}}/>
                                        </div>

                                        <div className='my-2'>
                                            <TextField className="w-full px-8 py-2 rounded-lg text-gray-800 font-medium bg-gray-100 border-2 border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" InputProps={{ startAdornment: (<InputAdornment position="start">
                                                <LockOpenIcon />
                                            </InputAdornment>),}}/>
                                        </div>

                                    </div>
                                    <button className="mt-4 tracking-wide font-semibold bg-gray-800 text-white w-full py-2 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <PersonOutlineIcon/> 
                                        <span className="ml-2">
                                            Sign In
                                        </span>
                                    </button>
                                    <button className="w-full mt-2 opacity-70 text-center text-teal-800 text-lg" onClick={register}> 
                                    <PersonAddIcon/>
                                    <span className='ml-1  underline'> Sign up </span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Login
