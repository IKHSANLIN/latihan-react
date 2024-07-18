import { useState } from "react";
import Input from "../../components/input/Input";

export default function StateInput() {
  const [nama, setNama] = useState<string>();
  return (
    <>
      <Input placeholder="Masukan Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
      <h2>{nama}</h2>
    </>
  );
}
