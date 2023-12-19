import React, { useRef } from 'react';
import Navbar from '../Components/NavbarComponent';
import MicIcon from '@mui/icons-material/Mic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SpeechArena from './SpeechArena';
import { useNavigate } from 'react-router-dom';

const Grievance = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  function speechArena() {
    navigate('/speecharena');
  }

  const handleFileUpload = () => {
    const selectedFile = fileInputRef.current.files[0];
    console.log('Selected File:', selectedFile);
    // Perform file upload logic here
  };

  return (
    <div>
      <div className='h-1/3'>
        <Navbar />
      </div>
      <div className='h-2/3 flex flex-col w-screen mt-10 justify-center items-center'>
        <div className='w-full flex justify-center'>
          <textarea
            rows='16'
            className='block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Start writing your grievance...'
          ></textarea>
        </div>
        <div className='mt-5 flex'>
          <button onClick={speechArena} className='bg-blue-700 hover:bg-blue-900 text-white p-3 rounded-lg'>
            <MicIcon /> 
            Record Grievance
          </button>

          <label  htmlFor='fileUpload' className='bg-blue-700 hover:bg-blue-900 text-white p-3 rounded-lg ml-2 cursor-pointer'>
            <AttachmentIcon /> 
            Upload File
            <input type='file' id='fileUpload' ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileUpload}/>
          </label>


        </div>
      </div>
    </div>
  );
};

export default Grievance;
