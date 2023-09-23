import LinkButton from "../../button/LinkButton";
import CriteriaImg from "../../../assets/images/judge.png";
import CriteriaStars from "./CriteriaStars";
import PurpleLens from "../../../assets/icons/PurpleLens";
import Reveal from "../../utilis/Reveal";

const Criteria = () => {
  const judgingCrtieria = [
    {
      key: "Innovation and Creativity: ",
      value:
        "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      key: "Functionality: ",
      value:
        "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      key: "Impact and Relevance: ",
      value:
        "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
    },
    {
      key: "Technical Complexity: ",
      value:
        "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      key: "Adherence to Hackathon Rules",
      value:
        "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ];
  return (
    <div className="relative border-b-[1px] border-white/[0.12] pt-[62px] pb-[78px] px-[34px]">
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute left-[-300px] bottom-[-200px]">
          <PurpleLens />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute right-[-400px] bottom-[-400px]">
          <PurpleLens />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute right-[-600px] top-[-600px]">
          <PurpleLens />
        </div>
      </div>
      <CriteriaStars />
      <div className="max-w-[1255px] w-full mx-auto flex flex-col md:flex-row justify-start items-center md:items-end gap-[58px] md:gap-[100px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <Reveal>
            <div className="md:w-[710px] md:h-[587px] md:relative left-[-40px]">
              <div className="hidden md:block h-[134px] w-[134px] rounded-full bg-gradient-to-r from-pink to-primary absolute left-[80px] top-[-10px]"></div>
              <img
                src={CriteriaImg}
                alt="Big idea image"
                className="w-full h-full object-contain relative z-[10]"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col justify-center md:justify-start md:items-start items-center gap-[9px] md:gap-[16px] w-full md:w-1/2">
          <div className="text-[20px] md:text-[32px] font-[700] text-white font-clashDisplay text-center">
            <Reveal>
              <h3>Judging Criteria</h3>
            </Reveal>
            <Reveal>
              <h3 className="text-tertiary md:text-left">Key attributes</h3>
            </Reveal>
          </div>
          <div className="flex flex-col gap-[20px] md:gap-[28px] ">
            {judgingCrtieria.map((item, index) => {
              return (
                <Reveal key={index}>
                  <p className="text-white text-center md:text-left font-monteserat text-[13px] md:text-[14px] leading-[174%]">
                    <span className="text-pink font-[700]">{item.key}</span>
                    {item.value}
                  </p>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <div className="flex justify-center  w-full md:justify-start items-start">
              <LinkButton path="#" text="Read More" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
