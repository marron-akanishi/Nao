import React from "react";
import "./styles.scoped.scss";
import { Idol } from "../../models/idol";

function Detail(props: { idol: Idol | undefined }) {
  return (
    <div className="detail">
      <div className="container">
        {props.idol ? (
          <table>
            <tr>
              <th>名前</th>
              <td>{props.idol.name}</td>
            </tr>
          </table>
        ) : (
          <div className="description">
            ←左の一覧からアイドルを選んでください
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
