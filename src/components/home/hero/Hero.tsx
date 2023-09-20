import LinkButton from "../../button/LinkButton";
import TopText from "./TopText";

const Hero = () => {
  return (
    <div>
      <TopText />
      <div>
        <div>
          <h1 className="text-[86px] text-white font-[700] font-clashDisplay relative top-[45px]">
            getLinked Tech
          </h1>
          <h1 className="text-[86px] text-white font-[700] font-clashDisplay mb-[8px]">
            Hackathon <span className="text-tertiary">1.0</span>
          </h1>
          <p className="text-white text-[20px] leading-[33px] w-[522px] mb-[40px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="mb-[77px]">
            <LinkButton path="/register" text="Register" />
          </div>
          <div className="text-white text-[64px] flex justify-start gap-[20px] font-unica">
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
