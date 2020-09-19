import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import Header from "../Header";
import Selecter from "../Selecter";
import Detail from "../Detail";
import { Idol } from "../../models/idol";

function App() {
  const [idols, setIdol] = useState<Idol[]>([]);
  const [icons, setIcon] = useState<any>();
  const [selectIdol, setSelectIdol] = useState<Idol>();

  useEffect(() => {
    const getIdolIcon = async () => {
      const res = await axios.get("assets/icon.json");
      setIcon(res.data);
    };

    const getIdolData = async () => {
      const res = await axios.get<Idol[]>("assets/idol.json");
      setIdol(res.data);
    };

    getIdolIcon();
    getIdolData();
  }, []);

  const handleSelect = (index: number) => {
    setSelectIdol(idols[index]);
  };

  return (
    <div className="container">
      <Header />
      <div className="main">
        <Selecter idols={idols} icons={icons} selectIdol={handleSelect} />
        <Detail idol={selectIdol} />
      </div>
    </div>
  );
}

export default App;
