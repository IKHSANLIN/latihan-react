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
      <Input />
    </div>
  );
}

export default App;
