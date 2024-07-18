import { FC,ButtonHTMLAttributes,HtmlHTMLAttributes } from "react";
import "./Button.css";

type variant = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  label?: string;
  variant?: variant;
}
const Button: FC<Props> = ({ label, variant, ...Props }) => {
  const style = "button_" + variant;
  return (
    <>
      <button className={style} {...Props}>{label}</button>
    </>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
