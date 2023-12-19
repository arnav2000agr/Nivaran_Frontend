import React, { useState, useEffect } from "react";
import "./Navbar.css";
import icon from "../Assets/Images/NivaranLogoLight.png";
import Nivaran from "../Assets/Images/NivaranIcon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const languages = ['निवारण', 'Nivaran', 'নিবারণ', 'નિવારણ', 'നിവാരൻ', 'நிவாரன்',  'ನಿವಾರಣ್', 'నివారణ'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isFading, setFading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
        setFading(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []); 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function home() {
    navigate("/");
  }
  function login(){
    navigate("/login");
  }
  function register(){
    navigate("/register");
  }
  function grievance(){
    navigate("/grievance");
  }
  function state(){
    navigate("/state_ministries");
  }
  function central(){
    navigate("/central_ministries");
  }
  function status(){
    navigate("/status");
  }


  return (
    <>
      <div className="p-2 flex flex-row justify-between bg-gray-100">

        <div className="p-2 text-white h-20">
          <img className="h-full object-cover cursor-pointer" onClick={home} src="https://pgportal.gov.in/Images/iconHome/logo.png" alt=""/>
        </div>

        <div className="p-2 h-20">
          <img className="h-full object-cover" src={Nivaran} alt="" />
        </div>

      </div>

      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="w-8 pl-3">
          <h1 className={`nivaran ${isFading ? 'fade' : ''}`}>{languages[currentLanguageIndex]}</h1>
        </div>
        <div className={`navbar-hamburger`} onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>

          <li className="navbar-item">
            <a className="px-8">Grievances</a>
            <div className="navbar-dropdown">
              <ol>
                <li>
                  <button onClick={grievance} className="font-semibold text-md text-gray-600 py-1">New Grievance</button>
                </li>
                <li>
                  <button onClick={status} className="font-semibold text-md text-gray-600 py-1">View Status</button>
                </li>
              </ol>
            </div>
          </li>

          <li className="navbar-item">
            <a className="px-8">Redress</a>
            <div className="navbar-dropdown">
              <ol className="">
                <li>
                  <button className="font-semibold text-md text-gray-600 py-1">Send Reminder</button>
                </li>
                <li>
                  <button className="font-semibold text-md text-gray-600 py-1">File Complaint</button>
                </li>
              </ol>
            </div>
          </li>

          <li className="navbar-item">
            <a className="px-8">Ministries</a>
            <div className="navbar-dropdown">
              <ol className="">
                <li>
                  <button onClick={state} className="font-semibold text-md text-gray-600 py-1">State Government</button>
                </li>
                <li>
                  <button onClick={central} className="font-semibold text-md text-gray-600 py-1">Central Government</button>
                </li>
              </ol>
            </div>
          </li>

          <li className="navbar-item">
            <a className="px-8">Contact</a>
            <div className="navbar-dropdown">
              <ol className="">
                <li>
                  <button className="font-semibold text-md text-gray-600 py-1">Contact us</button>
                </li>
                <li>
                  <button className="font-semibold text-md text-gray-600 py-1">Feedback</button>
                </li>
              </ol>
            </div>
          </li>

        </ul>
        <div className="but">
          <div className="navbar-login px-10">
            <button onClick={login}>Login</button>
          </div>
          {/* <div className="navbar-login">
            <button onClick={register}>Signup</button>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
