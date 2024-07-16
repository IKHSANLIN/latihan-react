import { FC } from "react";
import "./Avatar.css";
interface Props {
  url: string;
  label: string;
}

const Avatar: FC<Props> = ({ url, label }) => {
  return <div className="avatar">{url && <img src={url} alt="{label}" />}</div>;
};
export default Avatar;
