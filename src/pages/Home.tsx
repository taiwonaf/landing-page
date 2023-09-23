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
import Timeline from "../components/home/timeline/Timeline";
import HeroStars from "../components/home/hero/HeroStars";

const Home = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className="border-white/[0.12] border-b-[1px] md:min-h-screen relative pt-[73.5px] md:pt-[145px] overflow-hidden px-[33px]">
        <HeroStars />
        <Hero />
        {/* Destkop bg-images  */}
        <div className="absolute inset-0 md:flex justify-end items-end hidden h-full">
          <div className="h-[715px] w-[828px] relative mt-auto">
            <img
              src={ManWearingGlasses}
              alt=""
              className="mix-blend-luminosity	 w-full h-full object-contain bg-[lightgray/50] relative right-[-25px]"
            />
            <div className="absolute w-[667px] h-[641px] left-[66px] bottom-[56px]">
              <img
                src={Globe}
                alt=""
                className="animate-pulse w-full h-full duration-1000"
              />
            </div>
          </div>
        </div>
        {/* Mobile bg-images */}
        <div className="w-full md:hidden relative">
          <img
            src={ManWearingGlasses}
            alt=""
            className="mix-blend-luminosity	 w-full h-full object-contain"
          />
          <div className="absolute inset-0 top-0">
            <div className="w-full h-full">
              <img
                src={Globe}
                alt=""
                className="w-ful h-full object-contain animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
      <BigIdea />
      <Rules />
      <Criteria />
      <FaqSection />
      <Timeline />
      <Reward />
      <Sponsor />
      <PrivacyPolicy />
    </div>
  );
};

export default Home;
