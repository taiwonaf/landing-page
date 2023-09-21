const timelineItems = [
  {
    name: "Hackathon Announcement",
    detail:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    number: "1",
  },
  {
    name: "Teams Registration begins",
    detail:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    number: "2",
  },
  {
    name: "Teams Registration ends",
    detail: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    number: "3",
  },
  {
    name: "Announcement of the accepted teams and ideas",
    detail:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    number: "4",
  },
  {
    name: "Getlinked Hackathon 1.0 Offically Begins",
    detail:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    number: "5",
  },
  {
    name: "Demo Day",
    detail:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    number: "6",
  },
];

const MobileTimeline = () => {
  return (
    <div className="flex flex-col gap-[35px] justify-center items-center">
      {timelineItems.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-[290px] w-full flex justify-start items-start gap-[8px]"
          >
            <div className="flex flex-col gap-[12px] h-full">
              <div className="flex gap-[9px]">
                <div className="flex-1 px-[9px]">
                  <div className="flex-1 w-[2px] bg-tertiary h-full mx-auto"></div>
                </div>
                <div>
                  <h4 className="mb-[8px] text-[12px] font-monteserat font-[700] text-tertiary">
                    {item.name}
                  </h4>
                  <h5 className="text-white text-[12px] leading-[21px] font-monteserat ">
                    {item.detail}
                  </h5>
                </div>
              </div>
              <div className="flex gap-[9px]">
                <div className="h-[20px] w-[20px] bg-gradient-to-r from-[#903AFF] to-[#D434FE] rounded-full flex justify-center items-center">
                  <span className="text-[12px] font-[700] font-monteserat text-white">
                    {item.number}
                  </span>
                </div>
                <h4 className="mb-[8px] text-[12px] font-monteserat font-[700] text-tertiary">
                  {item.date}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileTimeline;
