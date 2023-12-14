import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <div className="w-full">
      <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
