import React, {useState} from 'react'
import Navbar from '../Components/NavbarComponent'
import officialtemplate_image from '../Assets/Images/officialtemplate_image.png';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import GavelIcon from '@mui/icons-material/Gavel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OfficialTemplate = () => {
    const [official, setOfficial]= useState(true);
    const [data,setData]=useState("");


    function create(){

    }

    // function generateEmailTemplate(name, email, subject, body) {
    //     return `<div><h1>${name}</h1>
    //             <p><strong>Email:</strong> ${email}</p>
    //             <p><strong>Subject:</strong> ${subject}</p>
    //             <p><strong>Body:</strong> ${body}</p>
    //             </div>`;
    //   }
      
      const navigate=useNavigate()
    const ministry=localStorage.getItem("ministry");
    const text=localStorage.getItem("text");

    const handleOfficial = () =>{
        setOfficial(!official);
        // const resp=generateEmailTemplate("Tanya","a@gmail.com",text,text);
        // setData(resp)
    }
    


    const home=()=>{
        axios.post("http://localhost:8080/api/grievance/create",{
            ministry:ministry,
            description:text
        })
        .then(function(response){
            console.log(response)
            navigate("/thankyou")
        })
        .catch(function(error){
            console.log(error)
        })
    }
  return (
    <div className='h-screen'>
        <div className=''>
            <Navbar/>
        </div>

      <div className='pt-10 flex flex-row w-screen'>

        <div className='flex justify-center'> 
            <img src={officialtemplate_image} className='object-contain h-96 w-96'  alt="" />
        </div>

        <div className='h-full w-2/3 flex flex-col justify-center items-center'>

            <div className='w-full p-3 flex flex-row bg-gray-200  justify-around rounded-t-md'>
                <button onClick={handleOfficial} className='flex justify-center text-white bg-teal-700 hover:bg-teal-800 p-3 mx-1 rounded-md'>
                    <WaterfallChartIcon/>
                    Raw Grievance
                </button>

                <button value={data} onClick={handleOfficial} className='flex justify-center text-white bg-teal-700  hover:bg-teal-800 p-3 mx-1 rounded-md '>
                    <GavelIcon/>
                    Official Template
                </button>

                <div className= 'mx-1 rounded-md'>
                    <select className=' text-white p-2 bg-teal-700 hover:bg-teal-800  rounded-md'>
                        <option>{ministry}</option>
                    </select>
                </div>

            </div>
            {official && <div className='w-full bg-gray-100 text-gray-600 flex justify-center mb-2 p-4 rounded-b-md'>
            {text}
            </div>
            } 
            {!official && <div className='w-full bg-gray-100 text-gray-600 flex justify-center mb-2 p-4 rounded-b-md'>
            <div dangerouslySetInnerHTML={{ __html: data }} />
                    
            </div>}
            

            {/* <button>Language Select</button> */}
            <button onClick={home} className='flex justify-center items-center w-20 h-10 p-3 bg-blue-800 hover:bg-blue-900 rounded-lg  text-white'>Submit</button>

        </div>
      </div>
    </div>
  )
}

export default OfficialTemplate
