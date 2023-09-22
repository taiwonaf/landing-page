import PinkImg from "../images/pink-question.svg";
import PurpleImg from "../images/purple-question.svg";

const PinkQuestion = () => {
  return (
    <div className="md:h-[120px] md:w-[115px] h-[46px] w-[50px]">
      <img src={PinkImg} alt="" className="w-cover h-full w-full" />
    </div>
  );
};

const PurpleQuestion = () => {
  return (
    <div className="md:h-[70px] md:w-[115px] h-[30px] w-[50px]">
      <img src={PurpleImg} alt="" className="w-cover h-full w-full" />
    </div>
  );
};

export { PinkQuestion, PurpleQuestion };
