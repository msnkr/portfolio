import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

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
          <p className="mt-8">
            I create websites using JavaScript, ReactJs, Tailwind. I'm also
            proffecient in Wordpress, Python, Django and Machine Learning
            technologies
          </p>
        </div>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}
