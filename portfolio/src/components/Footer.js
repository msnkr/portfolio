import { Link } from "react-scroll";
import arrowIcon from "../images/arrow-up.svg";
import logo from "../images/github-mark.svg";

export default function Footer() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="text-center my-16">
        <p className="text-5xl font-bold tracking-wide">msnkr</p>
      </div>
      <div>
        <a href="https://github.com/msnkr" target="_black" rel="noreferrer">
          <img src={logo} className="w-[50px]" />
        </a>
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
