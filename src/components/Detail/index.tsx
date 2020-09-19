import React from "react";
import "./styles.scss";
import { Idol } from "../../models/idol";

function Detail(props: { idol: Idol | undefined }) {
  return (
    <div className="detail">
      {props.idol ? (
        props.idol.name
      ) : (
        <div>左のアイドル一覧からアイドルを選んでください</div>
      )}
    </div>
  );
}

export default Detail;
