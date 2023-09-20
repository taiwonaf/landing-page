import LibertyImg from "../../../assets/images/Liberty company logo white colour.png";
import LibertyPayImg from "../../../assets/images/liberty pay.png";
import WinWise from "../../../assets/images/win wise.png";
import WhisPersms from "../../../assets/images/wisper logo white.png";
import Paybox from "../../../assets/images/Paybox.png";
import Vuzual from "../../../assets/images/Vizual Plus.png";

const VertifcalLine = () => (
  <div className="w-[2px] bg-tertiary h-[30px] md:h-[115px]" />
);
const HorizontalLine = () => (
  <div className="h-[2px] bg-tertiary w-[68px] md:w-[255px]" />
);

const Sponsor = () => {
  return (
    <div className="border-b-[1px] border-white/[18%]">
      <div className="max-w-[1255px] w-full mx-auto px-[30px] pb-[105px] md:pb-[150px] pt-[30px] md:pt-[110px]">
        <div className="max-w-[300px] md:max-w-[450px] w-full mx-auto mb-[40px] md:mb-[65px] text-white">
          <h2 className="font-clashDisplay text-center text-[20px] md:leading-[28px] md:text-[32px] md:mb-[22px] font-[700] leading-[28px] mb-[5px]">
            Partners and Sponsors
          </h2>
          <p className="text-[12px] text-center md:text-[14px] md:leading-[28px] leading-[21px] font-monteserat">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="w-full border-[1px] border-tertiary rounded-[5px] flex justify-center items-center px-[45px] py-[38px]">
          <div className="max-w-[900px] w-full flex flex-col gap-[7px] md:gap-[25px]">
            <div className="flex justify-center items-center gap-[10px] md:gap-[30px]">
              <div className="md:max-w-[255px] max-w-[75px] h-[30px] w-full md:h-[113px]">
                <img
                  src={LibertyImg}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <VertifcalLine />
              <div className="md:max-w-[255px] max-w-[75px] h-[30px] w-full md:h-[113px]">
                <img
                  src={LibertyPayImg}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <VertifcalLine />
              <div className="md:max-w-[255px] max-w-[75px] h-[30px] w-full md:h-[113px]">
                <img
                  src={WinWise}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center gap-[30px] md:gap-[60px]">
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
            </div>
            <div className="flex justify-center items-center gap-[10px] md:gap-[30px]">
              <div className="md:max-w-[255px] max-w-[75px] h-[30px] w-full md:h-[113px]">
                <img
                  src={WhisPersms}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <VertifcalLine />
              <div className="md:max-w-[255px] max-w-[75px] h-[30px] w-full md:h-[113px]">
                <img
                  src={Paybox}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <VertifcalLine />
              <div className="md:max-w-[255px] max-w-[75px] h-[30px] w-full md:h-[113px]">
                <img
                  src={Vuzual}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
