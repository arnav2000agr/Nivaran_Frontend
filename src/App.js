import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Carousel from './Components/Carousel1';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
// import './App.css';
// import Header from './Components/Header';
// import Login from './Pages/Login';

// function App() {
//   return (
//     <div className="h-screen w-screen flex flex-col">
//       <div className='sticky'>
//         <Header/>
//       </div>
//       <Login/>
//     </div>
//   );
// }

// export default App;
