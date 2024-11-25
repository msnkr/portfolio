import { Link } from "react-scroll";
import arrowIcon from "../images/arrow-up.svg";
import logo from "../images/github-mark.svg";

export default function Footer() {
  return (
    <div className="md:grid grid-cols-3 gap-2 items-center flex">
      <div className="my-16">
        <p className="md:text-5xl font-bold tracking-wide text-3xl">msnkr</p>
      </div>
      <div className="mx-auto">
        <a href="https://github.com/msnkr" target="_black" rel="noreferrer">
          <img src={logo} className="w-[50px]" />
        </a>
      </div>
      <div>
        <div className="relative xl:flex justify-end">
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
