import React from "react";
import { Link } from "react-router-dom";

interface IButton {
  text: string;
  path: string;
}

const LinkButton: React.FC<IButton> = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="max-w-[172px] w-full rounded-[4px]  py-[16px] flex justify-center items-center btnGradient hover:border-primary hover:border-[1px] hover:py-[15px]"
    >
      <span className="text-[16px] text-white">{text}</span>
    </Link>
  );
};

export default LinkButton;
