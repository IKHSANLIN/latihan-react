import React, { FormEvent, useEffect } from "react";
import { useState } from "react";
import Input from "../../components/input/Input";
import "./LatihanForm.css";
import Button from "../../components/button/Button";

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
    fetch("http://localhost:3001/biodata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        // alert(`Berhasil menambahkan data ${res.status}`);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [biodata, setBiodata] = useState<Biodata[]>();
  const getData = async () => {
    const data = await fetch("http://localhost:3001/biodata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        alert(`Gagal mengambil data ${err}`);
      });
    if (data) {
      setBiodata(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
      <ul>
        {biodata?.map((item, index) => (
          <li key={index}>
            {item.nama} - {item.email} - {item.phone}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LatihanFrom2;
