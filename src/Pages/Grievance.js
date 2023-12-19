import React, { useRef } from 'react';
import Navbar from '../Components/NavbarComponent';
import MicIcon from '@mui/icons-material/Mic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SpeechArena from './SpeechArena';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Grievance = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  function speechArena() {
    navigate('/speecharena');
  }
  function officialtemplate(){
    navigate('/officialtemplate');
  }

  const handleFileUpload = () => {
    const selectedFile = fileInputRef.current.files[0];
    console.log('Selected File:', selectedFile);
  };

  return (
    <div>
      <div className='h-1/3'>
        <Navbar />
      </div>
      <div className='h-2/3 flex flex-col w-screen mt-10 justify-center items-center'>
        <div className='w-full flex flex-row'>
          <div className='w-2/3 flex flex-col justify-center items-center'>
            <textarea rows='16' className='block p-2.5 w-5/6 text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-teal-600 focus:ring-teal-500 focus:border-teal-800 dark:bg-teal-400 dark:border-teal-400 dark:placeholder-teal-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500' placeholder='Start writing your grievance...'/>
            <button onClick={officialtemplate} className='mt-4 w-52 bg-blue-700 hover:bg-blue-900 text-white p-3 rounded-lg'>Submit</button>
          </div>
          <div className='w-1/3 flex flex-col justify-center'>
            <button onClick={speechArena} className='w-52 bg-blue-700 hover:bg-blue-900 text-white p-3 rounded-lg'>
              <MicIcon /> 
              Record Grievance
            </button>

            <label  htmlFor='fileUpload' className='pl-12 w-52 bg-blue-700 hover:bg-blue-900 text-white p-3 mt-2 rounded-lg cursor-pointer'>
              <AttachmentIcon /> 
              Upload File
              <input type='file' id='fileUpload' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileUpload}/>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievance;
