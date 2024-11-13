export default function Skills({ skill }) {
  return (
    <li className="font-semibold cursor-pointer hover:animate-bounce tracking-tighter text-sm md:tracking-normal md:text-md">
      {skill}
    </li>
  );
}
