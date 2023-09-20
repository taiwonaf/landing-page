import PinkSlash from "../../../assets/images/pink-slash.png";

const TopText = () => {
  return (
    <div className="flex flex-col items-end">
      <h5 className="text-white text-[36px] font-[700] italic ">
        Igniting a Revolution in HR innovation
      </h5>
      <div className="w-[253px] h-[11px] relative top-[-10px]">
        <img src={PinkSlash} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default TopText;
