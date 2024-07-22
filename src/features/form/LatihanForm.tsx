import React, { FormEvent, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./LatihanForm.css";

const LatihanForm = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(nama);
    console.log(email);
    console.log(phone);
  };
  return (
    <>
      <form action="" className="latihan_form" onSubmit={handleSubmit}>
        <h2>Form Biodata</h2>
        <div className="latihan_form_item">
          <label htmlFor="">Nama</label>
          <Input
            style={{ marginLeft: 10 }}
            value={nama}
            placeholder="Masukan Nama Anda"
            onChange={(e) => {
              setNama(e.target.value);
            }}
            required
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Email</label>
          <Input
            type="email"
            value={email}
            style={{ marginLeft: 10 }}
            placeholder="Masukan Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Telephon</label>
          <Input
            type="number"
            value={phone}
            placeholder="Masukan nomer anda"
            style={{ marginLeft: 10 }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="" style={{ marginLeft: 10, marginTop: 10 }}>
          <Button label="Submit" />
        </div>
      </form>
      <h1>{nama}</h1>
      <h2>{email}</h2>
      <h3>{phone}</h3>
    </>
  );
};
export default LatihanForm;
