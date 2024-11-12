import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import projects from "./data/projects";
import machineLearning from "./data/machineLearning";

export default function App() {
  return (
    <div>
      <div className="navbar-section">
        <Navbar isDark={false} />
      </div>
      <div className="main-container p-16 xl:px-80">
        <div>
          <p>
            <span className="text-3xl">Hi.</span>
            <br /> <span className="text-4xl font-bold">I'm Mikyle Kruger</span>
          </p>
          <p className="my-16 xl:my-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <Grid arr={projects} />
          </div>
        </div>
      </div>
      <div className="projects-container"></div>
      <div className="about-me-container px-16 xl:px-80">
        <div>
          <p className="text-3xl font-semibold">About Me</p>
        </div>
        <p className="my-16 xl:my-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="my-16">
          <Grid arr={machineLearning} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
