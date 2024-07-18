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
      <input type={type} placeholder={placeholder} value={value} {...props} />
    </div>
  );
};
Input.defaultProps = { placeholder: "Masukan data", type: "text" };
export default Input;
