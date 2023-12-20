import React from "react";
import Navbar from "../Components/NavbarComponent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';

const Thankyou = () => {
    const navigate = useNavigate();
    function home(){
        navigate('/')
    }
    return (
    <div className="h-screen p-0 m-0">
        <div className="h-1/6"> <Navbar/> </div>
        <div className="h-5/6 flex flex-col justify-center items-center">
            <h1 className="w-1/3 font-serif text-gray-800 text-3xl pb-4">Your complaint has been registered successfully </h1>
            <h1 className="w-1/2 text-gray-600 flex justify-center text-2xl pb-4">Your complaint will be resolved in stipulated time. You can check the status of your complaint by your reference number: MBA71832682105339A95</h1>
            <button className="p-3 mb-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white">Generate PDF of submitted complaint</button>
            <button className="mt-3 text-blue-900 flex justify-center items-center"> <ArrowBackIcon/> Goto Homepage</button>
        </div>
    </div>

)};
export default Thankyou;