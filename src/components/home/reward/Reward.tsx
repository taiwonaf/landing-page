import RewardImg from "../../../assets/images/Rewards.png";
import Trophy from "../../../assets/images/trophy.png";

const Reward = () => {
  return (
    <div className="md:pt-[75px] md:pb-[150px] pt-[60px] pb-[80px] px-[45px] bg-deepBg">
      <div className="md:flex justify-end items-start max-w-[1255px] w-full mx-auto mb-[60px] md:mb-[80px]">
        <div className="md:max-w-[540px] w-full flex justify-start">
          <div className="flex justify-center md:items-start items-center flex-col text-white max-w-[280px] w-full md:max-w-[400px] mx-auto">
            <h2 className="font-clashDisplay text-center text-[20px] md:leading-[28px] md:text-[32px] md:mb-[22px] font-[700] leading-[28px] mb-[5px]">
              Prizes and
            </h2>
            <h2 className="font-clashDisplay text-center text-[20px] md:leading-[28px] text-tertiary md:text-[32px] md:mb-[22px] font-[700] leading-[28px] mb-[5px]">
              Rewards
            </h2>
            <p className="text-[12px] md:text-left text-center md:text-[14px] md:leading-[28px] leading-[21px] font-monteserat">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-[50px] md:gap-[37px] max-w-[1255px] w-full mx-auto ">
        <div>
          <div className="max-w-[548px] w-full md:relative bottom-[60px] ">
            <img src={Trophy} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="h-full">
          <div className="max-w-[692px] w-full h-full ">
            <img
              src={RewardImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
