import { GreyStar, WhiteStar } from "../../../assets/icons/Stars";

const RulesStars = () => {
  return (
    <>
      <div className="absolute top-[445px] md:top-[120px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[635px]  max-w-[150px] w-full left-[50%] translate-x-[-50%] flex md:justify-start justify-end items-center ">
          <div className="h-[14px] w-[12px] md:w-[26px] md:h-[32px]">
            <GreyStar />
          </div>
        </div>
      </div>
      <div className="absolute top-[190px] md:top-[405px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[1170px]  max-w-[150px] w-full left-[50%] translate-x-[-50%] flex justify-center items-center ">
          <div className="h-[10px] w-[8px] md:w-[26px] md:h-[32px]">
            <WhiteStar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[20px] md:hidden md:top-[405px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[170px]  max-w-[170px] w-full left-[50%] translate-x-[-50%] flex justify-start items-center ">
          <div className="h-[10px] w-[8px] md:w-[26px] md:h-[32px]">
            <WhiteStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default RulesStars;
