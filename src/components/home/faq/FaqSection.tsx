import Faq from "./Faq";
import FaqImage from "../../../assets/images/faqImage.png";

const FaqSection = () => {
  return (
    <div className="max-w-[1255px] w-full relative mx-auto flex justify-start items-center md:gap-[86px] gap-[25px] flex-col md:flex-row pb-[50px] md:pb-[63px] md:pt-[100px] pt-[60] px-[50px]">
      <div className="max-w-[430px] w-full relative z-[3]">
        <div className="text-[20px] md:text-[32px] font-[700] text-white font-clashDisplay text-center md:text-left mb-[16px] md:mb-[6px]">
          <h3>Frequently Asked</h3>
          <h3 className="text-tertiary">Question</h3>
        </div>
        <p className="text-[13px] md:text-[14px] leading-[27.5px] font-monteserat text-white text-center md:text-left mb-[45px] md:mb-[68px]">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <Faq />
      </div>
      <div className="w-full inset-0 flex justify-end items-center md:absolute right-0 z-[1]">
        <div className="w-full md:w-[741px] md:h-[741px] md:relative ">
          <img src={FaqImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
