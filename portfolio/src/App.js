import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import projects from "./data/projects";
import machineLearning from "./data/machineLearning";
import Skills from "./components/Skills";

import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
const skillArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "Tailwind",
  "Bootstrap",
  "Python",
  "Django",
  "Data Science",
  "Machine Learning",
  "Wordpress",
  "Elementor",
  "Wix",
  "Photoshop",
  "CorelDraw",
  "Illustrator",
];
export default function App() {
  const { ref: mainRef, inView: mainInView } = useInView({
    threshold: 0.4,
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.4,
  });

  return (
    <div className="px-16 py-8 font-custom md:px-32 lg:px-52 xl:px-80 select-none">
      <div className="navbar-section py-16">
        <Navbar />
      </div>
      <div className="main-container mt-20 tracking-tighter">
        <div>
          <div
            ref={mainRef}
            className={`${
              mainInView
                ? "translate-x-0 visible opacity-100"
                : "-translate-x-1/2 invisible opacity-0"
            } wording duration-500`}
          >
            <p>
              <span className="text-3xl tracking-wider lg:text-4xl">Hi.</span>
              <br />{" "}
              <span className="text-4xl font-bold lg:text-5xl tracking-wider lg:w-1/2">
                I'm Mikyle Kruger
              </span>
            </p>
            <p className="mt-8 md:w-1/2">
              A digital printer and graphic designer with a love for programming
              and web-development
            </p>
          </div>
          <Element name="projects">
            <div className="py-16">
              <Grid arr={projects} />
            </div>
          </Element>
        </div>
      </div>
      <Element name="skills">
        <div className="skills-container py-16">
          <p className="text-3xl font-semibold lg:text-4xl tracking-wide">
            Skills
          </p>
          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {skillArr.map((skill, index) => (
                <Skills skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </Element>
      <div className="about-me-container">
        <Element name="about-me">
          <div
            ref={aboutRef}
            className={`${
              aboutInView
                ? "translate-x-0 visible opacity-100"
                : "-translate-x-1/2 invisible opacity-0"
            } wording duration-500`}
          >
            <div>
              <p className="text-3xl font-semibold lg:text-4xl tracking-wide">
                About Me
              </p>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Element>
        <div className="py-16">
          <Grid arr={machineLearning} />
          <p className="px-4 underline underline-offset-4 text-sm text-gray-500 cursor-pointer">
            <a
              href="https://github.com/msnkr/kaggle_comps"
              target="_blank"
              rel="noreferrer"
            >
              View more...
            </a>
          </p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
