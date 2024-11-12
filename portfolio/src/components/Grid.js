export default function Grid({ arr }) {
  return (
    <div>
      {arr.map((image, index) => (
        <div key={index}>
          <img src={image} />
        </div>
      ))}
    </div>
  );
}
