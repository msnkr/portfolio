import burger from "../images/burger.svg";
import light from "../images/lightmode.svg";
import dark from "../images/nightmode.svg";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function changeMode() {
    setDarkMode((prev) => !prev);
  }

  function handleClick() {
    setNavbar((prev) => !prev);
  }

  return (
    <div className="p-16 flex justify-between items-center">
      <div>
        <p>msn</p>
      </div>

      <div className="burger-section flex space-x-8 items-center">
        <div className="mode-section">
          <img
            onClick={changeMode}
            src={darkMode ? dark : light}
            className="w-[30px] cursor-pointer"
            alt="mode"
          />
        </div>
        <div>
          <img
            src={burger}
            className="w-[40px] cursor-pointer"
            alt="burger-icon"
            onClick={handleClick}
          />
        </div>
        <div className="relative">
          <ul
            className={`absolute text-end right-8 top-8 duration-100 space-y-4 pl-40 p-2 text-xl font-semibold`}
          >
            <li
              className={` ${
                navbar
                  ? "opacity-100 translate-x-0 visible  duration-100"
                  : "opacity-0 -translate-x-1/2 invisible duration-300"
              } cursor-pointer`}
            >
              Projects
            </li>
            <li
              className={` ${
                navbar
                  ? "opacity-100 translate-x-0 visible"
                  : "opacity-0 -translate-x-1/2 invisible"
              } cursor-pointer w-40 duration-200`}
            >
              About Me
            </li>
            <li
              className={` ${
                navbar
                  ? "opacity-100 translate-x-0 visible  duration-300"
                  : "opacity-0 -translate-x-1/2 invisible duration-100"
              } cursor-pointer`}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
