import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Home from '../views/HomeView';
import { CiLight } from "react-icons/ci"; 
import { LuSunMoon } from "react-icons/lu"; 
import '../styles/index.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Sidebar darkMode={darkMode} />
      <div className="flex-grow pl-6 pr-5 pt-5 ml-20 relative">
        
        <Home className="" />

        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`w-10 h-10 absolute top-5 right-5 flex items-center justify-center rounded-full hover:bg-teal-300 ${darkMode ? 'text-white' : 'text-gray-900'}`} // Adjust the size of the button here
        >
          {darkMode ? (
            <CiLight className="w-7 h-7" /> // Adjust the size of the CiLight icon here
          ) : (
            <LuSunMoon className="w-7 h-7" /> // Adjust the size of the LuSunMoon icon here
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
