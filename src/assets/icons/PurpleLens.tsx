import Image from "../images/purle-lens.png";

const PurpleLens = () => {
  return (
    <img
      src={Image}
      alt="purple lens"
      className="hue-rotate-[-35deg]  opacity-40 object-cover w-full h-full"
    />
  );
};

export default PurpleLens;
