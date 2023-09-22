import LinkButton from "../../button/LinkButton";
import { Chain, Fire } from "./HeroTextImg";
import TopText from "./TopText";

const Hero = () => {
  return (
    <div className=" max-w-[1440px] mx-auto pt-[32px] relative z-[10]">
      <TopText />
      <div className="pt-[40px]">
        <div>
          <h1 className="text-[32px] md:text-[86px] text-white font-[700] font-clashDisplay md:relative top-[45px] text-center md:text-left">
            getLinked Tech
          </h1>
          <div className="flex justify-center md:justify-start items-center">
            <h1 className="text-[32px] md:text-[86px] text-white font-[700] font-clashDisplay mb-[8px] text-center md:text-left">
              Hackathon <span className="text-tertiary">1.0</span>
            </h1>
            <Chain />
            <Fire />
          </div>
          <p className="text-white text-[13px] md:text-[20px] leading-[33px] w-full md:w-[522px] mb-[24px] md:mb-[40px] text-center md:text-left">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="mb-[14px] md:mb-[77px] flex justify-center md:justify-start">
            <LinkButton path="/register" text="Register" />
          </div>
          <div className="text-white text-[64px] flex justify-center md:justify-start gap-[20px] font-unica">
            <span className="flex items-center">
              00{" "}
              <span className="text-[14px] font-monteserat relative bottom-[-18px]">
                H
              </span>
            </span>
            <span className="flex items-center">
              00{" "}
              <span className="text-[14px] font-monteserat relative bottom-[-18px]">
                M
              </span>
            </span>
            <span className="flex items-center">
              00{" "}
              <span className="text-[14px] font-monteserat relative bottom-[-18px]">
                S
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
