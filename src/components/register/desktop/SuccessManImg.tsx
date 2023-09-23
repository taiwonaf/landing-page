import Image from "../../../assets/images/successful-man.png";

const SuccessManImg = () => {
  return (
    <div className="max-w-[185px] h-[185px] md:max-w-[305px] md:h-[305px] w-full overflow-hidden">
      <img
        src={Image}
        alt="success man image"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default SuccessManImg;
