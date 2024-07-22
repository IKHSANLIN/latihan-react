import { useContext } from "react";
import { BiodataContext } from "../../context/biodataContext";


const ListBiodata = () => {
  const { biodata } = useContext(BiodataContext);
  return (
    <>
      <div className="">
        <ul>
          {biodata?.map((item, index) => (
            <li key={index}>
              <h1>{item.nama}</h1>
              <h2>{item.email}</h2>
              <h3>{item.phone}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListBiodata;
