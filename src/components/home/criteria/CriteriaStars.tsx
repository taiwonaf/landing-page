import { PurpleStar, WhiteStar } from "../../../assets/icons/Stars";

const CriteriaStars = () => {
  return (
    <>
      <div className="absolute top-[15px] md:top-[90px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[1080px]  max-w-[150px] w-full left-[50%] translate-x-[-50%] flex md:justify-start justify-center items-center ">
          <div className="h-[14px] w-[12px] md:w-[30px] md:h-[36px]">
            <PurpleStar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[80px] md:bottom-[170px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[1170px]  max-w-[290px] w-full left-[50%] translate-x-[-50%] flex justify-end md:justify-center items-center ">
          <div className="h-[10px] w-[8px] md:w-[26px] md:h-[32px]">
            <WhiteStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CriteriaStars;
