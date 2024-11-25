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
  "Pandas",
  "Scikit-Learn",
  "Catboost",
  "XGBoost",
  "Neural Networks",
  "Random Forest",
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
    <div className="px-16 py-8 font-custom md:px-32 lg:px-52 xl:px-96 select-none">
      <Element name="navbar">
        <div className="navbar-section py-16">
          <Navbar />
        </div>
      </Element>
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
                <div key={index}>
                  <Skills skill={skill} />
                </div>
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
              Hello! I'm a tech enthusiast from the bustling city of
              Johannesburg, South Africa. With a high school certificate and a
              passion for technology, I've spent my career as a graphic designer
              and printer. But my true calling lies in the world of front-end
              development. <br /> <br />
              I'm fascinated by the latest tech trends, and you'll often find me
              gaming, hitting the gym, or experimenting with my Raspberry Pi. I
              love diving into machine learning with scikit-learn and competing
              in Kaggle competitions. At home, I enjoy spending time with my
              wonderful wife and our adorable cat, watching movies, and
              exploring the endless possibilities of Python and JavaScript. My
              guiding principle is simple: work hard now so I can enjoy life
              later. <br /> <br /> With a keen interest in web development, I'm
              on a mission to transition from graphic design and printing to
              becoming a skilled web developer.
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
