import { createSlice } from "@reduxjs/toolkit";
import market1 from "../../assets/images/m1.png";
import market2 from "../../assets/images/m2.png";
import market3 from "../../assets/images/m3.png";
import market4 from "../../assets/images/m4.png";
import market5 from "../../assets/images/m5.png";
import market6 from "../../assets/images/m6.png";
import market7 from "../../assets/images/m7.png";
import market8 from "../../assets/images/m8.png";
import market9 from "../../assets/images/m9.png";
import market10 from "../../assets/images/m10.png";
import market11 from "../../assets/images/m11.png";
import market12 from "../../assets/images/m12.png";
export interface Market {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const initialState: Market[] = [
  {
    id: 1,
    image: market1,
    title: "Magic Mushroom 0325",
    desc: "1.63 ETH",
  },
  {
    id: 2,
    image: market2,
    title: "Happy Robot 032",
    desc: "1.83 ETH",
  },
  {
    id: 3,
    image: market3,
    title: "Happy Robot 024",
    desc: "1.63 ETH",
  },
  {
    id: 4,
    image: market4,
    title: "Designer Bear",
    desc: "1.63 ETH",
  },
  {
    id: 5,
    image: market5,
    title: "ColorfulDog 0524",
    desc: "1.63 ETH",
  },
  {
    id: 6,
    image: market6,
    title: "Dancing Robot 0375",
    desc: "1.63 ETH",
  },
  {
    id: 7,
    image: market7,
    title: "Dancing Robot 0356",
    desc: "1.63 ETH",
  },
  {
    id: 8,
    image: market8,
    title: "Cherry Blossom Girl 035",
    desc: "1.63 ETH",
  },
  {
    id: 9,
    image: market9,
    title: "Space Travel ",
    desc: "1.63 ETH",
  },
  {
    id: 10,
    image: market10,
    title: "Desert Walk",
    desc: "1.63 ETH",
  },
  {
    id: 11,
    image: market11,
    title: "IceCream Ape 0324",
    desc: "1.63 ETH",
  },
  {
    id: 12,
    image: market12,
    title: "Colorful Dog 0344",
    desc: "1.63 ETH",
  },
];

const marketSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {},
});

export default marketSlice.reducer;
