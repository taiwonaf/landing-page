interface IFormBtn {
  text: string;
  handleClick: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const FormButton: React.FC<IFormBtn> = ({ text, handleClick }) => {
  return (
    <button
      type="submit"
      onClick={() => handleClick()}
      className="max-w-[172px] w-full rounded-[4px] text-white py-[16px] flex justify-center items-center btnGradient hover:border-primary hover:border-[1px] text-[16px]"
    >
      {text}
    </button>
  );
};

export default FormButton;
