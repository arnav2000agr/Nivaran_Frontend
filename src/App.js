import './App.css';
import Header from './Components/Header';
import Login from './Pages/Login';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className='sticky'>
        <Header/>
      </div>
      <Login/>
    </div>
  );
}

export default App;
