import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MyForm from './Pages/Form';

const App = () => {
  return (
    <div className="">
      <Router>
        <div className="">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/form" element={<MyForm/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
