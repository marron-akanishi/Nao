// https://api.matsurihi.me/docs/#mltd-v1-cards
// スキル系未定義

export interface Card {
  id: number;
  name: string;
  sortId: number;
  idolId: number;
  idolType: number;
  resourceId: string;
  rarity: number;
  eventId?: number;
  category: string;
  extraType: number;
  costume: Costume;
  bonusCostume?: Costume;
  rank5Costume?: Costume;
  flavorText: string;
  flavorTextAwakened: string;
  addDate?: Date;
}

export interface Costume {
  id: number;
  name: string;
  description: string;
  resourceId: string;
  modelId: string;
  sortId: number;
}
