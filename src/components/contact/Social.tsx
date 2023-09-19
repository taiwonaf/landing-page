import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const Social = () => {
  const socialsItems = [
    {
      name: "instagram",
      icon: <BsInstagram className="text-white h-[18px] w-[18px]" />,
      link: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      icon: <RiTwitterXFill className="text-white h-[18px] w-[18px]" />,
      link: "https://www.x.com",
    },
    {
      name: "Facebook",
      icon: <BiLogoFacebook className="text-white h-[18px] w-[18px]" />,
      link: "https://www.facebook.com",
    },
    {
      name: "LinkedIn",
      icon: <BiLogoLinkedin className="text-white h-[18px] w-[18px]" />,
      link: "https://www.linkedin.com",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-tertiary text-[16px] mb-[5px]">Share on</span>
      <div className="flex gap-[14px] justify-center items-center">
        {socialsItems.map((social, index) => {
          return (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary"
            >
              {social.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
