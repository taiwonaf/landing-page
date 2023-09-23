import LockImg from "../../../assets/images/man-lock.png";
import GuardImg from "../../../assets/images/guard.png";
import LinkButton from "../../button/LinkButton";
import CheckMark from "../../../assets/icons/CheckMark";
import PurpleLens from "../../../assets/icons/PurpleLens";
import Reveal from "../../utilis/Reveal";

const PrivacyPolicy = () => {
  const licencesItems = [
    {
      text: "The Standard License grants you a non-exclusive right tonavigate and register for our event",
    },
    {
      text: "You are licensed to use the item available at any free source sites, for your project developement",
    },
  ];
  return (
    <div className="md:pt-[170px] pt-[70px] px-[50px] pb-[80px] md:pb-[160px] relative">
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute top-[-300px] right-[-400px] ">
          <PurpleLens />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="md:max-w-[1037px] md:h-[948px] w-full absolute bottom-[-260px] left-[-220px] ">
          <PurpleLens />
        </div>
      </div>
      <div className="max-w-[1255px] w-full mx-auto relative flex flex-col gap-[144px] md:block">
        <div>
          <div className="mb-[30px] md:mb-[70px]">
            <div className="text-[20px] md:text-[32px] font-[700] text-white font-clashDisplay text-center md:text-left mb-[17px]">
              <Reveal>
                <h3>Privacy Policy and</h3>
              </Reveal>
              <Reveal>
                <h3 className="text-tertiary">Terms</h3>
              </Reveal>
            </div>
            <Reveal>
              <p className="text-center md:text-left leading-[28px] mb-[28px] text-[12px] md:text-[14px] md:leading-[28px] md:mb-[30px] font-monteserat text-white/[0.75]">
                Last updated on September 12, 2023
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[13px] md:text-[14px] leading-[27.5px] font-monteserat text-white text-center md:text-left max-w-[290px] mx-auto md:mx-0 md:max-w-[430px] w-full">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </Reveal>
          </div>
          <div className="max-w-[570px] w-full bg-[#D9D9D908] backdrop-blur-sm relative z-[10] md:py-[60px] pb-[50px] pt-[45px] px-[12px] rounded-[5px] border-[1px] border-tertiary">
            <div className="max-w-[425px] w-full mx-auto">
              <Reveal>
                <p className="text-white text-center text-[12px] leading-[216%] mb-[21px] md:mb-[24px] md:leading-[30px] md:text-[14px] font-monteserat md:text-left">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
              </Reveal>
              <Reveal>
                <h5 className="text-tertiary md:text-[16px] text-[13px] font-monteserat font-[700] leading-[34px]">
                  Licensing Policy
                </h5>
              </Reveal>
              <Reveal>
                <p className="text-white font-monteserat text-[12px] leading-[216%] md:text-[14px] font-[700] md:leading-[30px] md:mb-[18px] mb-[21px]">
                  Here are terms of our Standard License:
                </p>
              </Reveal>
              <ul className="md:mb-[20px] mb-[28px] flex flex-col gap-[24px] md:gap-[16px]">
                {licencesItems.map((item, index) => {
                  return (
                    <Reveal>
                      <li
                        className="flex justify-start items-start gap-[14px]"
                        key={index}
                      >
                        <span className="pt-[8px]">
                          <CheckMark />
                        </span>
                        <p className="text-white md:text-[14px] md:leading-[30px]">
                          {item.text}
                        </p>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
              <div className="flex justify-center items-center">
                <LinkButton path="#" text="Read More" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:absolute md:inset-0 w-full justify-center items-center flex md:justify-end md:items-center">
          <div className="md:max-w-[600px] max-w-[262px] w-full h-[350px] md:h-[750px] relative">
            <Reveal>
              <img
                src={LockImg}
                alt=""
                className="w-full h-full object-contain relative z-[2]"
              />
            </Reveal>
            <div className="absolute inset-0 md:max-w-[530px] max-w-[250px] w-full h-[310px] md:h-[648px] mb-[305px] md:left-[70px]  md:top-[-205px] left-[20px] top-[-100px]">
              <Reveal>
                <img
                  src={GuardImg}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
