import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import projects from "./data/projects";
import machineLearning from "./data/machineLearning";
import Skills from "./components/Skills";

import { useState } from "react";
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
  return (
    <div className="px-16 py-8">
      <div className="navbar-section py-16">
        <Navbar />
      </div>
      <div className="main-container mt-20">
        <div>
          <p>
            <span className="text-3xl tracking-wider">Hi.</span>
            <br /> <span className="text-4xl font-bold">I'm Mikyle Kruger</span>
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="py-16">
            <Grid arr={projects} />
          </div>
        </div>
      </div>
      <div className="skills-container py-16">
        <p className="text-3xl font-semibold">Skills</p>
        <div className="mt-8">
          <ul className="grid grid-cols-2 gap-2">
            {skillArr.map((skill, index) => (
              <Skills skill={skill} />
            ))}
          </ul>
        </div>
      </div>
      <div className="about-me-container">
        <div>
          <p className="text-3xl font-semibold">About Me</p>
        </div>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="py-16">
          <Grid arr={machineLearning} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
