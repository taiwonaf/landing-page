import Pink from "../images/stars/pinkStar.svg";
import Grey from "../images/stars/greyStar.svg";
import White from "../images/stars/WhiteStar.svg";
import Purple from "../images/stars/purpleStar.svg";

const PinkStar = () => {
  return (
    <img
      src={Pink}
      alt=""
      className="w-full h-full object-cover animate-pulse"
    />
  );
};

const GreyStar = () => {
  return (
    <img
      src={Grey}
      alt=""
      className="w-full h-full object-cover animate-pulse"
    />
  );
};

const WhiteStar = () => {
  return (
    <img
      src={White}
      alt=""
      className="w-full h-full object-cover animate-pulse"
    />
  );
};

const PurpleStar = () => {
  return (
    <img
      src={Purple}
      alt=""
      className="w-full h-full object-cover animate-pulse"
    />
  );
};

export { PinkStar, GreyStar, WhiteStar, PurpleStar };
