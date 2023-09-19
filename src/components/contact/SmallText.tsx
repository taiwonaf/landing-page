interface ISmallText {
  text: string;
}

const SmallText: React.FC<ISmallText> = ({ text }) => {
  return <span className="text-[16px] text-white">{text}</span>;
};

export default SmallText;
