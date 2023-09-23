import PurpleLens from "../../../assets/icons/PurpleLens";
import BigIdeaImg from "../../../assets/images/big-idea.png";
import BigIdeaStars from "./BigIdeaStars";

const BigIdea = () => {
  return (
    <div className="relative border-b-[1px] border-white/[0.12] pt-[62px] pb-[78px] px-[34px]">
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute left-[-200px] bottom-[-800px]">
          <PurpleLens />
        </div>
      </div>
      <BigIdeaStars />
      <div className="max-w-[1255px] w-full mx-auto flex flex-col md:flex-row justify-start items-center gap-[58px] md:gap-[100px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="w-[264px] h-[257px] md:w-[490px] md:h-[477px]">
            <img
              src={BigIdeaImg}
              alt="Big idea image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-[9px] md:gap-[16px] w-full md:w-1/2">
          <div className="text-[20px] md:text-[32px] font-[700] text-white font-clashDisplay text-center">
            <h3>Introduction to getlinked</h3>
            <h3 className="text-tertiary md:text-left">tech Hackathon 1.0</h3>
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
      </div>
    </div>
  );
};

export default BigIdea;
