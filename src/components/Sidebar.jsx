import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Icons from '../components/sideBare/Icons';


const Sidebar = ({ darkMode }) => {
  return (
    <aside
      className={`w-20 h-screen fixed left-0 top-0 flex flex-col items-center justify-between py-6 shadow-lg transition-all ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="text-2xl font-bold">BM</div>

      <ul className="flex flex-col space-y-15 ">
        {["Projects", "Details", "Articles", "Contact"].map((item, index) => (
          <li
            key={index}
            className="text-lg font-medium cursor-pointer transform rotate-90 origin-center 
              transition-all hover:scale-110 hover:text-teal-400  "
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col space-y-4">
        <Icons href="https://www.linkedin.com/in/mohamed-boukouch-b889b824a/" icon={FaLinkedin} />
        <Icons href="https://www.instagram.com/mohmadboukouch/" icon={FaSquareInstagram} />
        <Icons href="https://github.com/MohamedBoukouch" icon={FaGithub} />
      </div>



          


    </aside>
  );
};

export default Sidebar;
