import Pink from "../images/pink-star.png";
import Grey from "../images/grey-star.png";
import White from "../images/white star.png";
import Purple from "../images/purple star.png";

const PinkStar = () => {
  return <img src={Pink} alt="" className="w-full h-full object-cover" />;
};

const GreyStar = () => {
  return <img src={Grey} alt="" className="w-full h-full object-cover" />;
};

const WhiteStar = () => {
  return <img src={White} alt="" className="w-full h-full object-cover" />;
};

const PurpleStar = () => {
  return <img src={Purple} alt="" className="w-full h-full object-cover" />;
};

export { PinkStar, GreyStar, WhiteStar, PurpleStar };
