import burger from "../images/burger.svg";
import light from "../images/lightmode.svg";
import dark from "../images/nightmode.svg";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

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
          <img src={dark} className="w-[30px] cursor-pointer" />
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
            className={`${
              navbar
                ? "opacity-100 translate-x-0 visible"
                : "opacity-0 -translate-x-1/2 invisible"
            } absolute text-end right-8 top-8 duration-100 space-y-4 pl-40 p-2 text-xl font-semibold`}
          >
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer w-40">About Me</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
