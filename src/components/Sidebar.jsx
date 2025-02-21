import React from 'react';

const Sidebar = ({ darkMode }) => {
  return (
    <div className={`w-64 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} text-white fixed left-0 top-0 flex flex-col shadow-lg`}>
      <h2 className={`text-xl font-bold p-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sidebar</h2>
      <ul className="flex-grow p-4 space-y-2">
        <li className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-2 rounded cursor-pointer`}>Home</li>
        <li className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-2 rounded cursor-pointer`}>About</li>
        <li className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-2 rounded cursor-pointer`}>Services</li>
        <li className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-2 rounded cursor-pointer`}>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
