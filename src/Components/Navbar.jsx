import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDarkMode } from "../Context/DarkModeContext.jsx";
import DarkMode from "./DarkMode.jsx";
import {Menu,X} from "lucide-react";

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const { isDarkMode } = useDarkMode();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navbarBg = isHome
    ? "bg-transparent"
    : isDarkMode
    ? "bg-gray-900"
    : "bg-sky-100";

  const textColor = "text-gray-600 dark:text-gray-200";
  const hoverColor = "hover:text-sky-800 dark:hover:text-white";
  const activeColor = "text-blue-600 dark:text-blue-400";
  const lineColor = "bg-pink-900 dark:bg-gray-200";

const navbarlinks=[
            { path: "/", text: "Home" },
            { path: "/About", text: "About" },
            { path: "/Skills", text: "Skills" },
            { path: "/Projects", text: "Projects" },
            { path: "/Achievements", text: "Achievements" },
            { path: "/Contact", text: "Contact" },
];


  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="flex items-center justify-between py-2 font-medium mx-10">
        <Link to="/">
          <div className="text-xl sm:text-2xl font-bold font-urbanist cursor-pointer gradient-text dark:text-white">
            RB
          </div>
        </Link>

        {/* Mobile menu button for nevbar */}

        <button onClick={()=>setIsOpen(!isOpen)} className="sm:hidden text-white">
          {isOpen? < X size={28}/>:< Menu size={28}/>}
        </button>

        <ul className={`hidden sm:flex gap-5 text-sm mx-5 ${textColor}`}>
          {navbarlinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${hoverColor} ${
                  isActive ? activeColor : ""
                }`
              }
            >
              <p>{link.text}</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] ${lineColor} hidden hover:block`}
              />
            </NavLink>
          ))}

          <div className="flex items-center">
            <DarkMode />
          </div>
        </ul>
      </div>

      {/* Mobil dropdown menu  */}

      {isOpen&&(
          <div className={`sm:hidden px-5 pb-4 ${navbarBg} bg-slate-50 translate-all`}>
            <ul className="flex flex-col gap-4">
              {navbarlinks.map((link)=>(
                <NavLink
                key={link.path}
                to={link.path}
                onClick={()=> setIsOpen(false)} //class menu after click
                className={({isActive})=>`flex flex-col ${textColor} ${hoverColor} ${isActive ? activeColor:" "}`
                }
                >
                {link.text}
                </NavLink>
              ))}
              <DarkMode/>
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
