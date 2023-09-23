import Image from "../../../assets/images/successfully-done.png";

const SuccessCheckImg = () => {
  return (
    <div className="h-[174px] max-w-[174px] w-full md:max-w-[290px] md:h-[290px] w-full overflow-hidden absolute bottom-[20px] left-0">
      <img
        src={Image}
        alt="success check image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SuccessCheckImg;
