import PinkSlash from "../../../assets/images/pink-slash.png";

const TopText = () => {
  return (
    <div className="flex justify-center items-center md:justify-end">
      <div className="relative">
        <h5 className="text-white text-[14x] md:text-[36px] font-[700] italic ">
          Igniting a Revolution in HR innovation
        </h5>
        <div className="md:w-[253px] md:h-[11px] w-[115px] h-[7px] absolute bottom-[-5px] right-0">
          <img
            src={PinkSlash}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TopText;
