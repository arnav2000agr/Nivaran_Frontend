import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownButton = ({ buttonConfig }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleOpen = () => {
    clearTimeout(timeoutRef.current);
    setOpen(!open);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 600);
  };

  const handleOptionClick = () => {
    clearTimeout(timeoutRef.current);
  };

  const { color, buttonName, options } = buttonConfig;

  const navigate=useNavigate();
  function grievance(){
    navigate("/grievance");
  }

  return (
    <div>
      <div onMouseLeave={handleClose}>

        <button onClick={handleOpen} type='button' className={`inline-flex items-center px-2 py-1 text-sm font-semibold text-white bg-${color}`}>
          {buttonName}
          <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className={`absolute mt-2 w-32 bg-${color} border rounded-md`}>
            {options.map((option, index) => (
              <a key={index} href="" className={`block px-4 py-2 text-sm text-${color} bg-white hover:bg-slate-300`} onClick={handleOptionClick}>
                <p onClick={grievance}> {option} </p>
              </a>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default DropdownButton;
