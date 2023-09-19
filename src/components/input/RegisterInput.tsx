/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";

interface IRegisterInput {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: string | ChangeEvent<any>) => void;
  value: string;
  error: any;
  touched: any;
  label: string;
}

const RegisterInput: React.FC<IRegisterInput> = ({
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  touched,
  label,
}) => {
  return (
    <div className="flex flex-col justify-start items-start w-full relative">
      <label htmlFor={name} className="text-[13px] text-white mb-[5px]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="border-[1px] bg-white/[0.03] border-white placeholder:text-white/[0.25] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
      />
      {touched && error && (
        <p className="text-red-500 text-[12px] absolute bottom-[-25px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default RegisterInput;
