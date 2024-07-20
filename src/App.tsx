import Button from "./components/button/Button";
import Avatar from "./components/avatar/avatar";
import Input from "./components/input/Input";
import Profile from "./components/profile/Profile";
import StateInput from "./features/state-input/StateInput";
import { ChangeEvent, useState } from "react";
import ContohList from "./features/list/List";
import ContohList2 from "./features/list/List";
import LatihanForm from "./components/form/LatihanForm";
import LatihanForm2 from "./components/form/LatihanForm2";

function App() {
  // const handleClickButton = () => {
  //   alert("Handle Click button");
  // };
  const [nama, setNama] = useState<string>();
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };
  // const show: boolean = true;
  // if (show) {
  //   return (
  //     <>
  //       <h1>Tampilkan</h1>
  //     </>
  //   );
  // }
  return (
    <div className="App">
      <LatihanForm2 />
      {/* <LatihanForm /> */}
      {/* <h1>{show ? "Tampilkan" : "default"}</h1> */}
      {/* <Button
        label="Button primary"
        variant="primary"
        onClick={handleClickButton}
      />
      <Button label="Button secondary" variant="secondary" />
      <Button label="Button default" />
      <Avatar
        url="https://avatars.githubusercontent.com/u/62358703?v=4"
        label="Avatar"
        size="lg"
      />
      <Avatar
        url="https://avatars.githubusercontent.com/u/62358703?v=4"
        label="Avatar"
        size="sm"
      /> */}
      {/* <Input type="email" placeholder="email" />
      <br />
      <br />
      <Input type="password" placeholder="password" />
      <br />
      <br />
      <Input type="number" placeholder="Masukan umur anda" />
      <br />
      <br />
      <Input type="date" placeholder="Masukan tanggal lahir anda" />
      <br />
      <br /> */}
      {/* <Input placeholder="username" onChange={handleOnchange} />

      <br />
      <StateInput /> */}
      {/* <Profile /> */}
      <Input onChange={handleOnchange} />
      <h1>{nama}</h1>
      <br />
      {nama === "jhon" ? (
        <div>
          <h1>Nama Kamu adalah Jhon</h1>
        </div>
      ) : (
        <div>
          <h1>Nama Kamu buka jhon, {nama}</h1>
        </div>
      )}
      {/* <ContohList /> */}
      <ContohList2 />
    </div>
  );
}

export default App;
