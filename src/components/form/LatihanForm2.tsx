import React, { FormEvent } from "react";
import { useState } from "react";
import Input from "../input/Input";
import "./LatihanForm.css";
import Button from "../button/Button";

interface Biodata {
  nama: string;
  email: string;
  phone: string;
}
const LatihanFrom2 = () => {
  const defaultState: Biodata = {
    nama: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState<Biodata>(defaultState);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="latihan_form">
        <h2>Form Biodata</h2>
        <div className="latihan_form_item">
          <label htmlFor="">Nama</label>
          <Input
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            style={{ marginLeft: 10 }}
            placeholder="Masukan Nama Anda"
            required
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Email</label>
          <Input
            value={form.email}
            type="email"
            style={{ marginLeft: 10 }}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Telepon</label>
          <Input
            value={form.phone}
            type="number"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={{ marginLeft: 10 }}
          />
        </div>
        <div className="" style={{ marginTop: 20 }}>
          <Button label="Submit" />
        </div>
      </form>
      <h3>{form.nama}</h3>
      <h3>{form.email}</h3>
      <h3>{form.phone}</h3>
    </>
  );
};

export default LatihanFrom2;
