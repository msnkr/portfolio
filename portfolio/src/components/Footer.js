import { Link } from "react-scroll";
import arrowIcon from "../images/arrow-up.svg";
import logo from "../images/GitHub_Logo.png";

export default function Footer() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="text-center my-16">
        <p className="text-5xl font-bold tracking-wide">msnkr</p>
      </div>
      <div>
        <img src={logo} className="w-40" />
      </div>
      <div>
        <div className="relative">
          <Link to="navbar" smooth={true} duration={800}>
            <img
              src={arrowIcon}
              className="w-12 animate-bounce cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
