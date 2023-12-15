import React from 'react'
import DropdownButton from '../Assets/Buttons/DropdownButton';
import Nivaran from '../Assets/Images/Nivaran.png';
import NivaranIcon from '../Assets/Images/NivaranIcon.png'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate=useNavigate();
  const [isOpen,setIsOpen]=useState(false);

  function login(){
    navigate("/login");
  }
  function home(){
    navigate("/");
  }
  function state(){
    navigate("/state_ministry");
  }
  
  return (
    <div className='w-full flex flex-col'>

      <div className='flex flex-row justify-between items-center bg-gray-100 px-6'>

        <div className='p-2 text-white h-20'>
          <img onClick={home} className='h-full object-cover cursor-pointer' h src="https://pgportal.gov.in/Images/iconHome/logo.png" alt="" />
        </div>

        <div className='p-2 h-20'>
          <img className='h-full object-cover' src={NivaranIcon} alt="" />
        </div>
      </div>
      
      <div className='flex flex-col sm:flex-row justify-between bg-slate-900 items-center'>

        <div className='flex flex-col sm:flex-row bg-slate-900 items-center sm:absolute w-full sm:w-auto z-50'>
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Grievances', options: ['New Grievance', 'View Status'] }} />
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Redress Process', options: ['Set Reminder', 'Complaint'] }} />
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Ministries', options: ['State Government', 'Central Government'] }} />
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Contact & Support', options: ['Contact US', 'Feedback'] }} />
        </div>

        <div className='flex flex-col sm:flex-row bg-slate-900 items-center sm:ml-auto'>
          <div className="flex items-center first-letter:px-2 mb-2 sm:mb-0">
            <div className="flex items-center">
              <div className="flex relative items-center mt-2">
                <input type="text" className="px-2 text-purple-700 bg-white border rounded-md focus:border-purple-400" placeholder="Search..." />
                <button className="absolute inset-y-0 right-0 flex items-center justify-center">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between text-white items-center px-2'>
        <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'English', options: ['Hindi', 'Tamil', 'Gujarati', 'Marathi', 'Telugu', 'Odia', 'Malyalam', 'Sanskrit'] }} />
          <button className='px-2 flex flex-row justify-between items-center text-white'>
            <p className='px-1'onClick={login}> Login </p>
            <LoginIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
