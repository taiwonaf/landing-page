import ChainImg from "../../../assets/images/chain.png";
import FireImg from "../../../assets/images/fire.png";

const Chain = () => {
  return (
    <div className="w-full md:max-w-[86px] md:h-[86px] max-w-[32px] [32px]">
      <img src={ChainImg} alt="" className="w-full h-full object-contain" />
    </div>
  );
};

const Fire = () => {
  return (
    <div className="w-full md:max-w-[58px] md:h-[58px] max-w-[22px] [22px]">
      <img src={FireImg} alt="" className="w-full h-full object-contain" />
    </div>
  );
};

export { Chain, Fire };
