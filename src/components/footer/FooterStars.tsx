import { GreyStar, PurpleStar, WhiteStar } from "../../assets/icons/Stars";

const FooterStars = () => {
  return (
    <>
      <div className="absolute top-[122px] md:top-[105px] left-0 right-0 px-[36px]">
        <div className="relative  max-w-[1300px] w-full left-[50%] translate-x-[-50%] flex justify-start items-center ">
          <div className="h-[10px] w-[9px] md:w-[15px] md:h-[18px]">
            <WhiteStar />
          </div>
        </div>
      </div>
      <div className="absolute top-[360px] md:top-[100px] left-0 right-0 px-[36px]">
        <div className="relative  max-w-[660px] w-full left-[50%] translate-x-[-50%] flex justify-end items-center ">
          <div className="w-[15px] h-[18px]">
            <GreyStar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[180px] md:bottom-[120px] left-0 right-0 px-[36px]">
        <div className="relative  max-w-[1286px] w-full left-[50%] translate-x-[-50%] flex justify-end items-center ">
          <div className="h-[10px] w-[9px] md:w-[15px] md:h-[18px]">
            <WhiteStar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[80px] left-[50%] translate-x-[-50%]">
        <PurpleStar />
      </div>
    </>
  );
};

export default FooterStars;
