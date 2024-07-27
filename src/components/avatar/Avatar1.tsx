import { FC } from "react";

type size = "lg" | "sm" | "md";

interface Props {
  url?: string;
  label?: string;
  size?: size;
}

const Avatar1: FC<Props> = ({ url, label, size }) => {
  function sizeClass(): string {
    if (size === "lg") {
      return "h-[140px] w-[140px]";
    }
    if (size === "sm") {
      return "h-[70px] w-[70px]";
    }
    return "h-[100px] w-[100px]";
  }
  return (
<div className={`w-20 h-20 flex items-center justify-center bg-gray-400 cursor-pointer rounded-full overflow-hidden ${sizeClass()}`}>
    {url && <img src={url} alt={label} className="rounded-full" />}
  </div>
  );
};

Avatar1.defaultProps = { size: "md" };

export default Avatar1;
