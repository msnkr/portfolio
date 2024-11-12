import burger from "../images/burger.svg";
import light from "../images/lightmode.svg";
import dark from "../images/nightmode.svg";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="p-16 flex justify-between items-center">
      <div>
        <p>msn</p>
      </div>

      <div className="burger-section flex space-x-8 items-center">
        <div className="mode-section">
          <img src={dark} className="w-[30px] cursor-pointer" />
        </div>
        <div className="relative">
          <img
            src={burger}
            className="w-[40px] cursor-pointer"
            alt="burger-icon"
          />
        </div>
      </div>
    </div>
  );
}
