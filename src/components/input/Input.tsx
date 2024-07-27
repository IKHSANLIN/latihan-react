import { FC, InputHTMLAttributes } from "react";

type typeInput = "text" | "password" | "number" | "email" | "date" | "datetime";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: typeInput;
  placeholder?: string;
  value?: string | number;
}

const Input: FC<InputProps> = ({ type, placeholder, value, ...props }) => {
  return (
    <div className="input">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
};
Input.defaultProps = { placeholder: "Masukan data", type: "text" };
export default Input;
