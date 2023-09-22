import { GreyStar, WhiteStar } from "../../../assets/icons/Stars";

const HeroStars = () => {
  return (
    <>
      <div className="absolute top-[150px] md:top-[200px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[1300px]  max-w-[150px] w-full left-[50%] translate-x-[-50%] flex justify-start items-center ">
          <div className="h-[10px] w-[9px] md:w-[15px] md:h-[18px]">
            <WhiteStar />
          </div>
        </div>
      </div>
      <div className="absolute top-[150px] md:top-[290px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[200px]  max-w-[270px] w-full left-[50%] translate-x-[-50%] flex justify-end items-center ">
          <div className="h-[8px] w-[6px] md:w-[26px] md:h-[32px]">
            <GreyStar />
          </div>
        </div>
      </div>
      <div className="absolute top-[390px] md:top-[750px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[370px]  max-w-[215px] w-full left-[50%] translate-x-[-50%] flex justify-end md:justify-start items-center ">
          <div className="h-[8px] w-[6px] md:w-[26px] md:h-[32px]">
            <GreyStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroStars;
