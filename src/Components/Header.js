import React from 'react'
import DropdownButton from '../Assets/Buttons/DropdownButton';
import Nivaran from '../Assets/Images/Nivaran.png';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  return (
    <div className='max-w-screen flex flex-col justify-center'>

      <div className='flex flex-row justify-between items-center bg-gray-100'>

        <div className='p-2 text-white h-20'>
          <img className='h-full object-cover' src="https://pgportal.gov.in/Images/iconHome/logo.png" alt="" />
        </div>

        <div className='p-2 h-20'>
          <img className='h-full object-cover' src={Nivaran} alt="" />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-between bg-slate-900 items-center'>

        <div className='flex flex-col sm:flex-row bg-slate-900 items-center sm:absolute w-full sm:w-auto'>
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Grievances', options: ['New Grievance', 'View Status'] }} />
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Redress Process', options: ['Set Reminder', 'Complaint'] }} />
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Ministries', options: ['State Government', 'Central Government'] }} />
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'Contact & Support', options: ['Contact US', 'Feedback'] }} />
        </div>

        <div className='flex flex-col sm:flex-row bg-slate-900 items-center sm:ml-auto'>
          <div className="flex items-center px-2 mb-2 sm:mb-0">
            <div className="flex items-center">
              <input type="text" className="px-2 text-purple-700 bg-white border rounded-md focus:border-purple-400" placeholder="Search..." />
              <button className="flex items-center justify-center px-2 text-white bg-slate-900"> Search </button>
            </div>
          </div>
          <DropdownButton buttonConfig={{ color: 'bg-slate-900', buttonName: 'English', options: ['Hindi', 'Tamil', 'Gujarati', 'Marathi', 'Telugu', 'Odia', 'Malyalam', 'Sanskrit'] }} />
        </div>

        <div className='flex flex-row justify-between text-white items-center px-2'>
          <button className='px-2 flex flex-row justify-between items-center text-white'>
            <p className='px-1'> Login </p>
            <LoginIcon className />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
