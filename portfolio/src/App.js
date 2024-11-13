import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import projects from "./data/projects";
import machineLearning from "./data/machineLearning";

import { useState } from "react";
export default function App() {
  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="main-container">
        <div>
          <p>
            <span className="text-3xl">Hi.</span>
            <br />{" "}
            <span className="text-4xl font-bold md:text-5xl">
              I'm Mikyle Kruger
            </span>
          </p>
          <p className="md:w-2/3 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <Grid arr={projects} />
          </div>
        </div>
      </div>
      <div className="about-me-container">
        <div>
          <p className="text-3xl font-semibold md:text-4xl">About Me</p>
        </div>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="">
          <Grid arr={machineLearning} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
