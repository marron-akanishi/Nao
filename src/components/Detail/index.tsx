import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scoped.scss";
import { config } from "../../app.config";
import { Idol } from "../../models/idol";
import { Card } from "../../models/card";

function Detail(props: { idol: Idol | undefined }) {
  const [cardImgSrc, setCardImgSrc] = useState("");
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    setPreload(false);
    const getCardImg = async (id: number) => {
      const res = await axios.get<Card[]>(
        `${config.matsurihimeCardApiUrl}?idolId=${id}`
      );
      const imgUrl = `${config.matsurihimeCardSrcUrl}${res.data[0].resourceId}_0_a.png`;
      setCardImgSrc(imgUrl);
      return imgUrl;
    };

    if (props.idol) {
      getCardImg(props.idol.id).then((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => setPreload(true);
      });
    }
  }, [props.idol]);

  return (
    <div className="detail">
      <div className="container">
        {props.idol && preload ? (
          <>
            <img src={cardImgSrc} alt=""></img>
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
            <div className="annotation">
              画像取得に<a href="https://www.matsurihi.me/">matsurihi.me</a>
              様のAPIを利用しています。
            </div>
          </>
        ) : props.idol ? (
          <div className="message">読み込み中...</div>
        ) : (
          <div className="message">←左の一覧からアイドルを選んでください</div>
        )}
      </div>
    </div>
  );
}

export default Detail;
