import { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from "react";

type variant = "primary" | "secondary";
interface ButtonStyle {
  [key: string]: string;
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: variant;
}
const Button1: FC<Props> = ({ label, variant, ...props }) => {
  const buttonStyle: ButtonStyle = {
    primary: "bg-green-400 text-white px-4 py-3",
    secondary: "bg-blue-400 text-white px-4 py-3",
  };
  return (
    <button type="button" className={buttonStyle[variant ?? "primary"]}>
      {label}
    </button>
  );
};

Button1.defaultProps = {
  variant: "primary",
};
export default Button1;
