import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="text-[15px] md:text-[36px] font-[700] ">
        <span className="text-white">get</span>
        <span className="text-tertiary">Linked</span>
      </div>
    </Link>
  );
};

export default Logo;
