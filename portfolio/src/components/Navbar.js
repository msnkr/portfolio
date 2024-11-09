import burger from "../images/burger.svg";

export default function Navbar() {
  return (
    <div className="p-16 flex justify-between items-center">
      <div>
        <p>msn</p>
      </div>
      <div>
        <img className="w-[40px] cursor-pointer" src={burger} />
        <ul className="text-end flex space-x-4 hidden">
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}
