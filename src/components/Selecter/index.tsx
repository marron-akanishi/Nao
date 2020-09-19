import React from "react";
import "./styles.scss";
import { Idol } from "../../models/idol";

type Props = {
  idols: Idol[];
  icons: any;
  selectIdol: (index: number) => void;
};

function Selecter(props: Props) {
  return (
    <div className="selecter">
      <ul>
        {props.icons &&
          props.idols.map((item, index) => (
            <li key={item.id} onClick={(_) => props.selectIdol(index)}>
              <img
                src={`data:image/png;base64,${props.icons[item.name]}`}
                alt=""
              ></img>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Selecter;
