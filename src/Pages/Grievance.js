import React, { useRef,useState } from 'react';
import Navbar from '../Components/NavbarComponent';
import MicIcon from '@mui/icons-material/Mic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SpeechArena from './SpeechArena';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Grievance = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [text,setText]=useState("");
  const [caption,setCaption]=useState("")


  function speechArena() {
    navigate('/speecharena');
  }
  function officialtemplate(){
    localStorage.setItem("text",text);
    const formData = new FormData();
    formData.append("complaint", text);
    axios.post("http://localhost:8080/api/grievance/text",{
      description:text
    })
      .then(function(response){
        navigate("/officialtemplate")
        localStorage.setItem("ministry",response.data)
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })

    
  }

  const handletextchange = (e) => {
    setText(e.target.value);
  };

  const handleFileUpload = () => {
    const selectedFile = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("image", selectedFile);
    
    axios.post("http://localhost:8080/api/grievance/image",formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(function(response){
      setCaption(response.data)
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  };

  return (
    <div>
      <div className='h-1/3'>
        <Navbar />
      </div>
      <div className='h-2/3 flex flex-col w-screen mt-10 justify-center items-center'>
        <div className='w-full flex flex-row'>
          <div className='w-2/3 flex flex-col justify-center items-center'>
            <textarea type="text" value={text} onChange={handletextchange} rows='16' className='block p-2.5 w-5/6 text-sm text-gray-900 bg-gray-100 rounded-lg border-2 border-teal-600 focus:ring-teal-500 focus:border-teal-800 dark:bg-teal-400 dark:border-teal-400 dark:placeholder-teal-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500' placeholder='Start writing your grievance...'/>
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
