import RulesImg from "../../../assets/images/rules.png";
import RulesStars from "./RulesStars";

const Rules = () => {
  return (
    <div className="border-b-[1px] border-white/[0.12] px-[36px] py-[40px] md:py-0 relative">
      <RulesStars />
      <div className="max-w-[1255px] w-full mx-auto flex flex-col md:flex-row justify-start items-center gap-[10px] md:gap-[100px]">
        <div className="md:order-1 order-2 flex flex-col justify-center md:justify-start md:items-start items-center gap-[9px] md:gap-[16px] w-full md:w-1/2">
          <div className="text-[20px] md:text-[32px] font-[700] text-white font-clashDisplay text-center md:text-left">
            <h3>Rules and</h3>
            <h3 className="text-tertiary">Guidelines</h3>
          </div>
          <p className="text-[13px] md:text-[14px] leading-[27.5px] font-monteserat text-white text-center md:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end items-center md:h-[650px]">
          <div className="w-full">
            <div className="w-full h-full">
              <img
                src={RulesImg}
                alt="Big idea image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
