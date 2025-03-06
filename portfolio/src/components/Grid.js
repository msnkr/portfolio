export default function Grid({ arr }) {
  const handleClick = (link) => {
    window.location.href = link;
  };
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {arr.map((dict, index) => (
        <div key={index}>
          <img
            onClick={() => handleClick(dict.link)}
            className="scale-95 hover:scale-100 duration-100 rounded-lg"
            src={dict.image}
            alt={""}
          />
        </div>
      ))}
    </div>
  );
}
