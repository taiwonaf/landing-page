import Hero from "../components/home/hero/Hero";
import Globe from "../assets/images/planet.png";
import ManWearingGlasses from "../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import BigIdea from "../components/home/bigIdea/BigIdea";
import Rules from "../components/home/rules/Rules";
import Criteria from "../components/home/criteria/Criteria";
import FaqSection from "../components/home/faq/FaqSection";
import Sponsor from "../components/home/sponsor/Sponsor";
import Reward from "../components/home/reward/Reward";
import PrivacyPolicy from "../components/home/privacy/PrivacyPolicy";

const Home = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className="border-white/[0.12] border-b-[1px] md:h-screen relative pt-[73.5px] md:pt-[145px] overflow-hidden px-[33px]">
        <Hero />
        {/* Destkop bg-images  */}
        <div className="absolute inset-0 md:flex justify-end items-end hidden">
          <div className="h-[715px] w-[828px] relative">
            <img src={ManWearingGlasses} alt="" />
            <div className="absolute w-[667px] h-[641px] left-[66px] bottom-[56px]">
              <img src={Globe} alt="" />
            </div>
          </div>
        </div>
        {/* Mobile bg-images */}
        <div className="w-full md:hidden relative">
          <img
            src={ManWearingGlasses}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 top-0">
            <div className="w-full h-full">
              <img src={Globe} alt="" className="w-ful h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
      <BigIdea />
      <Rules />
      <Criteria />
      <FaqSection />
      <Reward />
      <Sponsor />
      <PrivacyPolicy />
    </div>
  );
};

export default Home;
