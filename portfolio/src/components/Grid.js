export default function Grid({ arr }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {arr.map((dict, index) => (
        <div key={index}>
          <a href={dict.link} target="_blank" rel="noopener noreferrer">
            <img
              className="scale-95 hover:scale-100 duration-100 rounded-lg"
              src={dict.image}
              alt={""}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
