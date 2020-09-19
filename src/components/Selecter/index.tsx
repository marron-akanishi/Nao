import React, { useState } from "react";
import "./styles.scoped.scss";
import { Idol } from "../../models/idol";

interface Props {
  idols: Idol[];
  icons: any;
  selectIdol: (index: number) => void;
}

function Selecter(props: Props) {
  const [selectIdol, setSelectIdol] = useState(-1);

  const handleClick = (index: number) => {
    setSelectIdol(index);
    props.selectIdol(index);
  };

  return (
    <div className="selecter">
      <ul>
        {props.icons &&
          props.idols.map((item, index) => (
            <li
              className={"idol" + (selectIdol === index ? " selected" : "")}
              key={item.id}
              onClick={(_) => handleClick(index)}
            >
              <img
                src={`data:image/png;base64,${props.icons[item.name]}`}
                alt=""
                className="icon"
              ></img>
              <div className="name">{item.name}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Selecter;
