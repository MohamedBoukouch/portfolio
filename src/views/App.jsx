import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/index.css'; // Ensure Tailwind CSS is imported

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Sidebar darkMode={darkMode} />
      <div className={`flex-grow ml-64 p-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="mb-4 p-2 bg-teal-500 text-white rounded hover:bg-teal-400"
        >
          Mode
        </button>
      </div>
    </div>
  );
}

export default App;
