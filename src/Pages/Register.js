import React, { useState } from "react";
import Nivaran from "../Assets/Images/Nivaran.png";
import Nivaran_icon from "../Assets/Images/Nivaran_icon.png";
import "react-phone-number-input/style.css";
import "tailwindcss/tailwind.css";
import Header from "../Components/Header";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import otp from "../Assets/Images/otp.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavbarComponent";

const Register = () => {
  const backgroundImageUrl =
    "https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz";
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

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
        console.log(response);
        alert("OTP sent Successfully");
      })
      .catch(function (error) {
        alert("Failed");
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
        alert("Verified");
        navigate("/form")
      })
      .catch(function (error) {
        console.log(error);
        alert("Not verified");
      });
  }

  

  return (
    <div className="max-w-screen flex flex-col justify-between">
      <div className="sticky top-0">
        {" "}
        <Navbar/>{" "}
      </div>

      <div className=" bg-gray-100 text-gray-900 flex justify-center">
        <div className=" m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex flex-col items-center lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
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
                              <img className="h-7 w-8" src={otp} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <button
                        onClick={verifyotp}
                        className="bg-green-100 rounded"
                      >
                        Verify OTP
                      </button>
                    </div>
                    
                  </div>
                  <button className="mt-4 tracking-wide font-semibold bg-gray-800 text-white w-full py-2 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2 mr-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-">Sign In</span>
                  </button>

                  {/* <button className="w-72 h-7 opacity-70 text-center text-teal-800 text-2xl font-normal font-['Lato']" onClick={register}>New user? Sign up.</button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
