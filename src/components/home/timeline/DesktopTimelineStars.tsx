import { GreyStar, PurpleStar, WhiteStar } from "../../../assets/icons/Stars";

const DesktopTimelineStars = () => {
  return (
    <>
      <div className="absolute top-[200px] left-[200px] right-0 px-[36px]">
        <div className="relative  md:max-w-[835px]  w-full left-[50%] translate-x-[-50%] flex md:justify-start justify-end items-center ">
          <div className="h-[14px] w-[12px] md:w-[30px] md:h-[36px]">
            <PurpleStar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[600px] left-0 right-0 px-[36px]">
        <div className="relative  max-w-[975px]  w-full left-[50%] translate-x-[-50%] flex justify-end items-center ">
          <div className=" md:w-[26px] md:h-[32px]">
            <WhiteStar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[100px]  left-0 right-0 px-[36px]">
        <div className="relative  max-w-[1155px] w-full left-[50%] translate-x-[-50%] flex justify-start items-center ">
          <div className="h-[10px] w-[8px] md:w-[26px] md:h-[32px]">
            <GreyStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTimelineStars;
