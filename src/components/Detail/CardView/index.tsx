import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.scoped.scss";
import { config } from "../../../app.config";
import { Card } from "../../../models/card";

interface Props {
  id: number;
}

interface CardImg {
  normalSrc: string;
  awakenedSrc: string;
  cardName: string;
  rarity: string;
}

function CardView(props: Props) {
  const [cardImages, setCardImages] = useState<CardImg[]>([]);
  const [selectImage, setSelectImage] = useState(0);
  const [isAwakened, setAwakened] = useState(false);
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    // リセット
    setPreload(false);
    setSelectImage(0);
    setAwakened(false);

    const getCardImg = async (id: number) => {
      const res = await axios.get<Card[]>(
        `${config.matsurihimeCardApiUrl}?idolId=${id}`
      );
      const images = res.data.map(
        (card): CardImg => ({
          normalSrc: `${config.matsurihimeCardSrcUrl}${
            card.resourceId
          }_0_a.png`,
          awakenedSrc: `${config.matsurihimeCardSrcUrl}${
            card.resourceId
          }_1_a.png`,
          cardName: card.name,
          rarity: ["", "N", "R", "SR", "SSR"][card.rarity],
        })
      );
      setCardImages(images);
      return images[0].normalSrc;
    };

    getCardImg(props.id).then((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setPreload(true);
    });
  }, [props.id]);

  const changeImage = (step: number) => {
    let next = selectImage + step;
    if (next < 0) next = cardImages.length - 1;
    if (next >= cardImages.length) next = 0;
    setSelectImage(next);
  };

  return (
    <div>
      {preload ? (
        <div className="view-area">
          <div className="button" onClick={(_) => changeImage(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          </div>
          <div className="card-view">
            <div className="card-name">
              {`[${cardImages[selectImage].rarity}] ${
                cardImages[selectImage].cardName
              }`}
            </div>
            <img
              src={
                isAwakened
                  ? cardImages[selectImage].awakenedSrc
                  : cardImages[selectImage].normalSrc
              }
              alt=""
              onClick={(_) => setAwakened(!isAwakened)}
            />
            <div className="card-msg">
              クリックで覚醒前/覚醒後を切り替えられます。
            </div>
          </div>
          <div className="button" onClick={(_) => changeImage(1)}>
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </div>
        </div>
      ) : (
        <div className="message">読み込み中...</div>
      )}
    </div>
  );
}

export default CardView;
