import { useMediaQuery } from "react-responsive";
import MobileTimeline from "./MobileTimeline";
import DesktopTimeline from "./DesktopTimeline";
import Reveal from "../../utilis/Reveal";

const Timeline = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="px-[30px] md:pt-[72px] pb-[115px] relative">
      <div className="text-white max-w-[350px] w-full mx-auto mb-[56px] md:mb-[90px]">
        <Reveal>
          <h2 className="font-clashDisplay text-center text-[20px] md:leading-[28px] md:text-[32px] md:mb-[22px] font-[700] leading-[28px] mb-[5px]">
            Timeline
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-[12px] text-center md:text-[14px] md:leading-[28px] leading-[21px] font-monteserat">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </Reveal>
      </div>
      {/* Mobile Timeline */}

      {isMobile && <MobileTimeline />}
      {isDesktop && <DesktopTimeline />}
    </div>
  );
};

export default Timeline;
