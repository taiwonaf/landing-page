import DesktopTimeLineItem from "./DesktopTimeLineItem";
import DesktopTimelineStars from "./DesktopTimelineStars";

const timelineItems = [
  {
    name: "Hackathon Announcement",
    detail:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    number: 1,
  },
  {
    name: "Teams Registration begins",
    detail:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    number: 2,
  },
  {
    name: "Teams Registration ends",
    detail: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    number: 3,
  },
  {
    name: "Announcement of the accepted teams and ideas",
    detail:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    number: 4,
  },
  {
    name: "Getlinked Hackathon 1.0 Offically Begins",
    detail:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    number: 5,
  },
  {
    name: "Demo Day",
    detail:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    number: 6,
  },
];

const DesktopTimeline = () => {
  return (
    <>
      <DesktopTimelineStars />
      <div>
        <div className="max-w-[1255px] w-full mx-auto relative">
          <div className="space-y-[20px]">
            {timelineItems.map((item, index) => {
              return <DesktopTimeLineItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTimeline;
