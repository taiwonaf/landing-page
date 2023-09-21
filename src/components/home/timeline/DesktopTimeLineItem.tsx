interface TimelineProp {
  name: string;
  detail: string;
  number: number;
  date: string;
}

const DesktopTimeLineItem: React.FC<TimelineProp> = ({
  name,
  detail,
  number,
  date,
}) => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div>
          <div className="bg-tertiary w-[4px] h-[135px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[80px]">
        <div
          className={` w-[40%] ${
            number % 2 === 0 ? "order-3 text-left" : "order-1 text-right"
          }`}
        >
          <h4 className="text-[24px] font-[700] mb-[12px] text-tertiary font-monteserat">
            {name}
          </h4>
          <p className="text-white font-monteserat text-[14px] leading-[24px]">
            {detail}
          </p>
        </div>
        <div className="flex justify-center items-center order-2">
          <div className="flex justify-center items-center rounded-full h-[53px] w-[53px] bg-gradient-to-r from-[#903AFF] to-[#D434FE]">
            <span className="text-white font-[700] text-[24px] font-monteserat">
              {number}
            </span>
          </div>
        </div>
        <div
          className={`${
            number % 2 === 0 ? "order-1 text-right" : "order-3 text-left"
          } w-[40%]`}
        >
          <h5 className="text-[24px] font-[700] font-monteserat text-tertiary ">
            {date}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DesktopTimeLineItem;
