import React, { useState } from "react";
import Nivaran_icon from "../Assets/Images/Nivaran_icon.png";
import "react-phone-number-input/style.css";
import "tailwindcss/tailwind.css";
import Header from "../Components/Header";
import { useRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavbarComponent";
import Snackbar from "../Components/Snackbar";
import AodIcon from '@mui/icons-material/Aod';
import loginlogo from '../Assets/Images/login_logo.png'

const Register = () => {
  const backgroundImageUrl = "https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz";
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const snackbarRef = useRef(null);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const [type,setType] = useState("");

  const handleMobileNumberChange = (e) => {
    setMobile(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  function sendotp() {
    localStorage.setItem("mobile",mobile)
    axios
      .post("http://localhost:8080/api/users/sendotp", {
        mobilenumber: mobile,
      })
      .then(function (response) {
        console.log(response)
        
        setMessage("OTP sent successfully");
        setType("success");
        snackbarRef.current.show();
        setShow(true);
        
      })
      .catch(function (error) {
        setMessage("Error via server side");
        setType("fail");
        snackbarRef.current.show();
        setShow(true);

        
      });
  }

  function verifyotp() {
    console.log(otp);
    axios
      .post("http://localhost:8080/api/users/verifyotp", {
        mobilenumber: mobile,
        otp: otp,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("Auth",true);
        setMessage("OTP verified successfully!");
        setType("success");
        snackbarRef.current.show();
        setShow(true);
        localStorage.setItem("User",response.data._id)
        localStorage.setItem("bearer",response.data.token)
        setTimeout(() => {
          navigate("/form")
          
        }, 2000);
        
      })
      .catch(function (error) {
        setMessage("OTP unverified!");
        setType("fail");
        snackbarRef.current.show();
        setShow(true);
      });
  }

  

  return (
    <div className="max-w-screen flex flex-col justify-between">
      <div className="sticky top-0">
        {" "}
        <Navbar/>{" "}
      </div>
      

      <div className="  text-gray-900 flex justify-center">
        <div className=" m-0 sm:m-10 bg-white sm:rounded-lg flex justify-center flex-1">
          <div className="flex flex-col items-center lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <Snackbar ref={snackbarRef} message={message} type={type} />

            <div className="w-1/3 flex items-center ">
              <img src={Nivaran_icon} className="" />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="w-full flex-1">
                <div className="mx-auto max-w-xs my-2">
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-row">
                      <TextField
                        className="w-full px-8 py-2 rounded-lg font-medium text-gray-800 bg-gray-100 border-2 border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={handleMobileNumberChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <button
                        onClick={sendotp}
                        className="bg-green-100 rounded"
                      >
                        Send OTP
                      </button>
                    </div>
                    <br />

                    <div className="flex flex-row">
                      <TextField
                        className="w-full px-8 py-2 rounded-lg font-medium text-gray-800 bg-gray-100 border-2 border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleOtpChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AodIcon/>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    
                  </div>
                  <button className="mt-4 tracking-wide font-semibold bg-gray-800 text-white w-full py-2 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span onClick={verifyotp} className="">
                      Verify  OTP
                      </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-teal-800 text-center hidden lg:flex rounded-r-lg">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${loginlogo}')`}}>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
