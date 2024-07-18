import { useEffect, useState } from "react";
import Avatar from "../avatar/avatar";
import "./Profile.css";

interface profileModel {
  name: string;
  email: string;
}
const Profile = () => {
  const data: profileModel = {
    name: "Ikhsan",
    email: "ikhsan@gmail.com",
  };
  const [profile, setProfile] = useState<profileModel>(data);
  useEffect(() => {
    setProfile({
      name: "dafa",
      email: "dafa@gmail.com",
    });
  }, []);
  return (
    <div className="profile">
      <div className="profile_container">
        <Avatar
          url="https://avatars.githubusercontent.com/u/62358703?v=4"
          label="Jhon"
          size="lg"
        />
        <div className="profile_label">
          <h1>{profile.name}</h1>
          <h2>{profile.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
