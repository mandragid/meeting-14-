import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  // function button ubah data menggunakan useState
  const [data, setData] = useState(false);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const handleAge = (param) => {
    const time = new Date().getFullYear();
    const birth = parseInt(param);
    const age = time - birth;
    setAge(age.toString());
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleData = () => {
    setData(!data);
  };

  // const [res, setRes] = useState([
  //   {
  //     id: 1,
  //     title: "teacher",
  //   },
  //   {
  //     id: 2,
  //     title: "police officer",
  //   },
  // ]);

  return (
    <div className="App">
      <h1>Hallo {!!data ? "aktif" : "tidak aktif"}</h1>
      <button onClick={handleData}>Ubah Data</button>

      {/* {res.map((item) => (
        <div>{item.title}</div>
      ))} */}

      {!!age.length ? age : null}
      <button onClick={() => handleAge(name)}>tampilkan usia</button>
      <input placeholder="masukkan tahun lahir" onChange={handleName} />
      <p>{name}</p>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
