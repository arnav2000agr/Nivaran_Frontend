import React, { useState } from "react";
import "./Navbar.css";
import icon from "../Assets/Images/NivaranLogoLight.png";
import Nivaran from "../Assets/Images/NivaranIcon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
  return (
    <>
      <div className="p-2 flex flex-row justify-between bg-gray-100">
        <div className="p-2 text-white h-20">
          <img
            className="h-full object-cover cursor-pointer"
            onClick={home}
            src="https://pgportal.gov.in/Images/iconHome/logo.png"
            alt=""
          />
        </div>
        <div></div>

        <div className="p-2 h-20">
          <img className="h-full object-cover" src={Nivaran} alt="" />
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-brand flex">
          <img className="h-10 w-10" src={icon} alt="Logo" />
        </div>

        <div className={`navbar-hamburger`} onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <a>Grievances</a>
            <div className="navbar-dropdown">
              <ol>
                <li>
                  <button onClick={grievance}>New Grievance</button>
                </li>
                <li>
                  <button>View Status</button>
                </li>
              </ol>
            </div>
          </li>
          <li className="navbar-item">
            <a>Redress</a>
            <div className="navbar-dropdown">
              <ol className="">
                <li>
                  <button>Reminder</button>
                </li>
                <li>
                  <button>Complaint</button>
                </li>
              </ol>
            </div>
          </li>
          <li className="navbar-item">
            <a>Ministries</a>
            <div className="navbar-dropdown">
              <ol className="">
                <li>
                  <button onClick={state}>State</button>
                </li>
                <li>
                  <button onClick={central}>Central</button>
                </li>
              </ol>
            </div>
          </li>
          <li className="navbar-item">
            <a>Contact</a>
            <div className="navbar-dropdown">
              <ol className="">
                <li>
                  <button>Contact</button>
                </li>
                <li>
                  <button>Feedback</button>
                </li>
              </ol>
            </div>
          </li>
        </ul>
        <div className="but">
          <div className="navbar-login px-10">
            <button onClick={login}>Login</button>
          </div>
          <div className="navbar-login">
            <button onClick={register}>Signup</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
