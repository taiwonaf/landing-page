import Faq from "./Faq";
import FaqImage from "../../../assets/images/faqImage.png";
import { PinkQuestion, PurpleQuestion } from "../../../assets/icons/Question";
import {
  GreyStar,
  PinkStar,
  PurpleStar,
  WhiteStar,
} from "../../../assets/icons/Stars";

const FaqSection = () => {
  return (
    <div className="border-b-[1px] border-white/[0.12] md:pt-[100px] pt-[60px]">
      <div className="max-w-[1255px] w-full relative mx-auto flex justify-start items-center md:gap-[86px] gap-[80px] flex-col md:flex-row pb-[50px] md:pb-[63px] md:pt-[100px] pt-[60] px-[50px] ">
        <div className="md:max-w-[430px] w-full relative z-[3]">
          <div className="text-[20px] md:text-[32px] font-[700] text-white font-clashDisplay text-center md:text-left mb-[16px] md:mb-[6px] relative">
            <div className="max-w-[18px] h-[22px] md:h-[36px] md:max-w-[30px] w-full absolute top-[0] left-[0px] md:top-[-50px] md:left-[-30px]">
              <PurpleStar />
            </div>
            <h3>Frequently Asked</h3>
            <h3 className="text-tertiary">Question</h3>
          </div>
          <p className="text-[13px] md:text-[14px] leading-[27.5px] font-monteserat text-white text-center md:text-left mb-[45px] md:mb-[68px]">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <Faq />
        </div>
        <div className="w-full relative inset-0 flex justify-end items-center md:absolute right-0 z-[1]">
          <div className="w-full md:w-[741px] md:h-[741px] md:relative ">
            <div className="absolute z-[10] top-[-20px] md:top-[-80px] right-0 left-0">
              <div className="w-full md:max-w-[545px] max-w-[320px] mx-auto flex justify-start">
                <div className="max-w-[160px] md:max-w-[365px] w-full flex justify-between items-end relative">
                  <div className="">
                    <PurpleQuestion />
                  </div>
                  <div className="">
                    <PinkQuestion />
                  </div>
                  <div className="">
                    <PurpleQuestion />
                  </div>
                  <div className="max-w-[10px] h-[10px] md:h-[25px] md:max-w-[21px] w-full absolute bottom-[20px] right-[45px] md:bottom-[50px] md:right-[100px]">
                    <PinkStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[10px] h-[10px] md:h-[25px] md:max-w-[21px] w-full absolute top-[100px] left-[65px] md:top-[130px] md:left-[150px]">
              <PinkStar />
            </div>
            <div className="max-w-[10px] h-[10px] md:h-[25px] md:max-w-[21px] w-full absolute top-[160px] left-[20px] md:top-[375px] md:left-[50px]">
              <GreyStar />
            </div>
            <div className="max-w-[10px] h-[10px] md:h-[25px] md:max-w-[21px] w-full absolute bottom-[50px] right-[60px] ">
              <WhiteStar />
            </div>
            <img src={FaqImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
