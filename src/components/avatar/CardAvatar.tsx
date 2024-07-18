import { FC } from "react";
import "./Avatar.css";
import Avatar from "./avatar";

type Props = {
  name: string;
  age: number;
  image: string;
};

const CardAvatar: FC<Props> = ({ name, age, image }) => {
  return (
    <>
      <div style={{ display: "flex", marginBottom: 15, alignItems: "center" }}>
        <div className="">
          <Avatar label={name} url={image} size="md" />
        </div>
        <div style={{ marginLeft: 10 }}>
          <h3 style={{ padding: 0, margin: 0 }}>{name}</h3>
          <h3 style={{ padding: 0, margin: 0 }}>{age}</h3>
        </div>
      </div>
    </>
  );
};
export default CardAvatar;
