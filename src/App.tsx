import React from "react";
import Button from "./components/button/Button";
import Avatar from "./components/avatar/avatar";
import Input from "./components/input/Input";

function App() {
  return (
    <div className="App">
      <Button label="Button primary" variant="primary" />
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
      />
      <Input type="email" placeholder="email" />
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
      <br />
      <Input
        placeholder="username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
