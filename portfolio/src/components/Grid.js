export default function Grid({ arr }) {
  return (
    <div className="grid gap-4">
      {arr.map((image, index) => (
        <div key={index}>
          <img
            className="scale-95 hover:scale-100 duration-100 rounded-lg"
            src={image}
            alt={""}
          />
        </div>
      ))}
    </div>
  );
}
