import { FormEvent, useContext, useEffect, useState } from "react";
import Biodata from "../../models/biodata";
import { BiodataContext } from "../../context/biodataContext";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./LatihanForm.css";

const BiodataForm = () => {
  const defaultState: Biodata = {
    nama: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState<Biodata>(defaultState);
  const { setBiodata } = useContext(BiodataContext);

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
        alert("post data berhasil");
        getListBiodata();
      })
      .catch((err) => {
        alert("post data gagal");
      });
  };
  const getListBiodata = async () => {
    const data = await fetch("http://localhost:3001/biodata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {});
    if (data) {
      setBiodata(data);
    }
  };
  useEffect(() => {
    getListBiodata();
  }, []);

  return (
    <>
      <form action="" className="latihan_form" onSubmit={handleSubmit}>
        <h2>Form Biodata</h2>
        <div className="latihan_form_item">
          <label htmlFor="nama">Nama</label>
          <Input
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            placeholder="Masukan Nama Anda"
            style={{ marginLeft: 10 }}
            required
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="email">Email</label>
          <Input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Masukan Email Anda"
            style={{ marginLeft: 10 }}
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="phone">Phone</label>
          <Input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Masukan Phone Anda"
            style={{ marginLeft: 10 }}
          />
        </div>
        <div className="" style={{ marginLeft: 10 }}>
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </>
  );
};

export default BiodataForm;
