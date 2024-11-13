import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <ul className="flex space-x-8 justify-center text-xl font-semibold">
          <Link to="projects" smooth={true} duration={800}>
            <li className="cursor-pointer">Projects</li>
          </Link>
          <Link to="skills" smooth={true} duration={800}>
            <li className="cursor-pointer">Skills</li>
          </Link>
          <Link to="about-me" smooth={true} duration={800}>
            <li className="cursor-pointer font-semibold">About Me</li>
          </Link>
        </ul>
      </div>
      <div className="text-center my-16">
        <p className="text-5xl font-bold tracking-wide cursor-pointer">msnkr</p>
      </div>
    </div>
  );
}
