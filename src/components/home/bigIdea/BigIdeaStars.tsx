import { PurpleStar, PinkStar } from "../../../assets/icons/Stars";

const BigIdeaStars = () => {
  return (
    <>
      <div className="absolute top-[110px] md:top-[220px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[1170px]  max-w-[150px] w-full left-[50%] translate-x-[-50%] flex justify-start items-center ">
          <div className="h-[13px] w-[11px] md:w-[21px] md:h-[25px]">
            <PinkStar />
          </div>
        </div>
      </div>
      <div className="absolute top-[363px] md:top-[220px] left-0 right-0 px-[36px]">
        <div className="relative  md:max-w-[1170px]  max-w-[150px] w-full left-[50%] translate-x-[-50%] flex justify-end items-center ">
          <div className="h-[10px] w-[8px] md:w-[30px] md:h-[36px]">
            <PurpleStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigIdeaStars;
