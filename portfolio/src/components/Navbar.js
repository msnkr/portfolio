import { Link } from "react-scroll";
import burger from "../images/burger.svg";

import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function handleClick() {
    setNavbar((prev) => !prev);
  }

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-5xl">msnkr</p>
      </div>

      <div className="burger-section flex space-x-8 items-center">
        <div>
          <img
            src={burger}
            className="w-[40px] cursor-pointer md:invisible"
            alt="burger-icon"
            onClick={handleClick}
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 md:text-xl lg:text-2xl">
            <Link to="projects" smooth={true} duration={800}>
              <li className="cursor-pointer font-semibold z-50">Projects</li>
            </Link>
            <Link to="skills" smooth={true} duration={800}>
              <li className="cursor-pointer font-semibold">Skills</li>
            </Link>
            <Link to="about-me" smooth={true} duration={800}>
              <li className="cursor-pointer font-semibold">About Me</li>
            </Link>
          </ul>
        </div>
        <div className="relative md:hidden">
          <ul
            className={`absolute text-end right-8 top-8 duration-100 space-y-4 pl-40 p-2 text-xl font-semibold`}
          >
            <Link to="projects" smooth={true} duration={800}>
              <li
                className={` ${
                  navbar
                    ? "opacity-100 translate-x-0 visible  duration-100"
                    : "opacity-0 -translate-x-1/2 invisible duration-300"
                } cursor-pointer ease-linear`}
              >
                Projects
              </li>
            </Link>
            <Link to="skills" smooth={true} duration={800}>
              <li
                className={` ${
                  navbar
                    ? "opacity-100 translate-x-0 visible  duration-200"
                    : "opacity-0 -translate-x-1/2 invisible duration-200"
                } cursor-pointer ease-linear`}
              >
                Skills
              </li>
            </Link>
            <Link to="about-me" smooth={true} duration={800}>
              <li
                className={` ${
                  navbar
                    ? "opacity-100 translate-x-0 visible duration-300"
                    : "opacity-0 -translate-x-1/2 invisible duration-100"
                } cursor-pointer w-40 ease-linear`}
              >
                About Me
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
