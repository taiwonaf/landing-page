import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";

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

const usefulLinks = [
  {
    link: "Overview",
    path: "#overview",
  },
  {
    link: "Timeline",
    path: "#timeline",
  },
  {
    link: "FAQs",
    path: "#faq",
  },
  {
    link: "Register",
    path: "/register",
  },
];

const contactItems = [
  {
    detail: "+234 679 81819",
    icon: <PiPhoneCallFill className="text-white h-[15px] w-[15px]" />,
  },
  {
    detail: "27,Alara Street Yaba 100012 Lagos State",
    icon: <HiLocationMarker className="text-white h-[15px] w-[15px]" />,
  },
];

const Footer = () => {
  return (
    <footer className="pb-[40px] px-[40px] pt-[70px] bg-deepBg ">
      <div className="flex flex-col gap-[30px] mb-[60px] max-w-[1100px] w-full mx-auto md:flex md:flex-wrap md:flex-row justify-between items-start md:gap-[30px]">
        <div className="max-w-[412px] w-full">
          <div className="mb-[12px] md:mb-0">
            <span className="font-clashDisplay font-[700] text-[20px] text-white md:text-[30px] ">
              get<span className="text-tertiary">linked</span>
            </span>
          </div>
          <p className="text-white text-[12px] font-[500] leading-[21px] mb-[40px] md:mb-[80px] font-monteserat">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex justify-start items-center gap-[15px] text-white ">
            <Link to="#privacy">
              <span className="text-[12px] leading-[21px]">Terms of use</span>
            </Link>
            <div className="w-[2px] bg-tertiary h-[18px]"></div>
            <Link to="#privacy">
              <span className="text-[12px] leading-[21px]">Privacy Policy</span>
            </Link>
          </div>
        </div>
        <div className="text-white">
          <h5 className="text-tertiary text-[14px] font-[600] leading-[24px] font-monteserat mb-[6px]">
            Useful Links
          </h5>
          <ul className="flex flex-col gap-[11px] mb-[12px]">
            {usefulLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[12px] leading-[20px] text-white"
                  >
                    {item.link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-start gap-[16px] items-center">
            <span className="text-[12px] text-tertiary font-monteserat font-[500]">
              Follow us
            </span>
            <div className="flex gap-[20px] justify-center items-center">
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
        </div>
        <div>
          <h5 className="text-tertiary text-[14px] font-[600] leading-[24px] font-monteserat mb-[10px]">
            Contact Us
          </h5>
          <ul className="flex flex-col gap-[25px] w-full">
            {contactItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-start items-start gap-[16px] text-white text-[12px] font-monteserat "
                >
                  <span>{item.icon}</span>
                  <span className="max-w-[90px] w-full">{item.detail}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-white text-[12px]">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
