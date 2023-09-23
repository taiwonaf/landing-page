import PurpleLens from "../../../assets/icons/PurpleLens";
import { GreyStar, PurpleStar, WhiteStar } from "../../../assets/icons/Stars";
import RewardImg from "../../../assets/images/Rewards.png";
import Trophy from "../../../assets/images/trophy.png";
import Reveal from "../../utilis/Reveal";

const Reward = () => {
  return (
    <div className="relative md:pt-[75px] md:pb-[150px] pt-[60px] pb-[80px] px-[45px] bg-deepBg">
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute top-[700px] left-[-400px] ">
          <PurpleLens />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute ">
          <PurpleLens />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute right-[-500px] bottom-[-300px]">
          <PurpleLens />
        </div>
      </div>
      <div className="absolute top-[45px] md:top-[45px] left-0 right-0 flex justify-center items-center">
        <div className="max-w-[880px] w-full mx-[30px] flex justify-start items-center">
          <div className="h-[9px] max-w-[7px] w-full md:max-w-[21px] md:h-[25px]">
            <PurpleStar />
          </div>
        </div>
      </div>
      <div className="absolute top-[90px] md:top-[168px] left-0 right-0 flex justify-center items-center">
        <div className="max-w-[170px] md:max-w-[880px] w-full mx-[30px] flex justify-end items-center">
          <div className="h-[9px] max-w-[7px] w-full md:max-w-[21px] md:h-[25px]">
            <PurpleStar />
          </div>
        </div>
      </div>
      <div className="md:flex justify-end items-start max-w-[1255px] w-full mx-auto mb-[60px] md:mb-[80px]">
        <div className="md:max-w-[540px] w-full flex justify-start">
          <div className="flex justify-center md:items-start items-center flex-col text-white max-w-[280px] w-full md:max-w-[400px] mx-auto">
            <Reveal>
              <h2 className="font-clashDisplay text-center text-[20px] md:leading-[28px] md:text-[32px] md:mb-[22px] font-[700] leading-[28px] mb-[5px]">
                Prizes and
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="font-clashDisplay text-center text-[20px] md:leading-[28px] text-tertiary md:text-[32px] md:mb-[22px] font-[700] leading-[28px] mb-[5px]">
                Rewards
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-[12px] md:text-left text-center md:text-[14px] md:leading-[28px] leading-[21px] font-monteserat">
                Getlinked Hackathon 1.0 is honored to have the following major
                companies as its partners and sponsors
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-[50px] md:gap-[37px] max-w-[1255px] w-full mx-auto ">
        <div className="relative">
          <div className="h-[12px] max-w-[10px] md:max-w-[15px] md:h-[18px] w-full md:bottom-[-15px] md:left-[150px] absolute bottom-[0px] left-[30px]">
            <WhiteStar />
          </div>
          <div className="max-w-[548px] w-full md:relative bottom-[60px] ">
            <img src={Trophy} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="h-full relative">
          <div className="h-[12px] max-w-[10px] md:max-w-[26px] md:h-[32px] w-full md:top-[80px] md:right-[-5px] absolute top-[13px] right-[13px]">
            <WhiteStar />
          </div>
          <div className="h-[12px] hidden md:block max-w-[10px] md:max-w-[26px] md:h-[32px] w-full md:top-[-30px] md:left-[60px] absolute top-[13px] left-[13px]">
            <WhiteStar />
          </div>
          <div className="h-[12px] md:block max-w-[10px] md:max-w-[26px] md:h-[32px] w-full md:bottom-[-50px] md:right-[200px] absolute bottom-[-50px] right-[100px]">
            <GreyStar />
          </div>
          <Reveal>
            <div className="max-w-[692px] w-full h-full ">
              <img
                src={RewardImg}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Reward;
