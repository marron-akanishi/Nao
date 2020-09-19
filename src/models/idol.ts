export interface Idol {
  id: number;
  name: string;
  group: "AS" | "THEATER";
  type: "Princess" | "Fairy" | "Angel";
  age: number;
  birth: string;
  blood: "O" | "A" | "B" | "AB";
  height: number;
  weight: number;
  bust: number;
  waist: number;
  hip: number;
  country: string;
  hobby: string;
  skill: string;
  favorite: string;
  cv: string;
}
