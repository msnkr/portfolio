import Navbar from "./Navbar";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <ul className="flex space-x-8 justify-center text-xl font-semibold">
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">About Me</li>
        </ul>
      </div>
      <div className="text-center my-16">
        <p className="text-5xl font-bold tracking-wide cursor-pointer">msnkr</p>
      </div>
    </div>
  );
}
