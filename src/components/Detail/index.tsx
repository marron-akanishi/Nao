import React from "react";
import "./styles.scoped.scss";
import { Idol } from "../../models/idol";

function Detail(props: { idol: Idol | undefined }) {
  return (
    <div className="detail">
      <div className="container">
        {props.idol ? (
          <table className={props.idol.type.toLowerCase()}>
            <tbody>
              <tr>
                <th>名前</th>
                <td>{props.idol.name}</td>
              </tr>
              <tr>
                <th>分類</th>
                <td>{props.idol.group}</td>
              </tr>
              <tr>
                <th>属性</th>
                <td>{props.idol.type}</td>
              </tr>
              <tr>
                <th>年齢</th>
                <td>{props.idol.age}歳</td>
              </tr>
              <tr>
                <th>誕生日</th>
                <td>{props.idol.birth}</td>
              </tr>
              <tr>
                <th>血液型</th>
                <td>{props.idol.blood}</td>
              </tr>
              <tr>
                <th>身長</th>
                <td>{props.idol.height}cm</td>
              </tr>
              <tr>
                <th>体重</th>
                <td>{props.idol.weight}kg</td>
              </tr>
              <tr>
                <th>バスト</th>
                <td>{props.idol.bust}cm</td>
              </tr>
              <tr>
                <th>ウエスト</th>
                <td>{props.idol.waist}cm</td>
              </tr>
              <tr>
                <th>ヒップ</th>
                <td>{props.idol.hip}cm</td>
              </tr>
              <tr>
                <th>出身地</th>
                <td>{props.idol.country}</td>
              </tr>
              <tr>
                <th>趣味</th>
                <td>{props.idol.hobby}</td>
              </tr>
              <tr>
                <th>特技</th>
                <td>{props.idol.skill}</td>
              </tr>
              <tr>
                <th>好きなもの</th>
                <td>{props.idol.favorite}</td>
              </tr>
              <tr>
                <th>CV</th>
                <td>{props.idol.cv}</td>
              </tr>
            </tbody>
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
