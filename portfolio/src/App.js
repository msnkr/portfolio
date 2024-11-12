import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import projects from "./data/projects";
import machineLearning from "./data/machineLearning";

export default function App() {
  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="main-container p-16">
        <div>
          <p>
            <span className="text-3xl">Hi.</span>
            <br /> <span className="text-4xl font-bold">I'm Mikyle Kruger</span>
          </p>
          <p className="my-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <Grid arr={projects} />
          </div>
        </div>
      </div>
      <div className="projects-container"></div>
      <div className="about-me-container px-16">
        <div>
          <p className="text-3xl font-semibold">About Me</p>
        </div>
        <p className="my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <Grid arr={machineLearning} />
        </div>
      </div>
    </div>
  );
}
