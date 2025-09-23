import { createSlice } from "@reduxjs/toolkit";
import rankImg1 from "../../assets/images/ai1 (1).svg";
import rankImg2 from "../../assets/images/ai1 (2).svg";
import rankImg3 from "../../assets/images/ai3.svg";
import rankImg4 from "../../assets/images/ai4.svg";
import rankImg5 from "../../assets/images/ai5.svg";
import rankImg6 from "../../assets/images/ai6.svg";
import rankImg7 from "../../assets/images/ai7.svg";
import rankImg8 from "../../assets/images/ai8.svg";
import rankImg9 from "../../assets/images/ai9.svg";
import rankImg10 from "../../assets/images/ai10.svg";
import rankImg11 from "../../assets/images/ai11.svg";
import rankImg12 from "../../assets/images/ai12.svg";
import rankImg13 from "../../assets/images/ai13.svg";
import rankImg14 from "../../assets/images/ai14.svg";
import rankImg15 from "../../assets/images/ai15.svg";
import rankImg16 from "../../assets/images/ai16.svg";
import rankImg17 from "../../assets/images/ai17.svg";
export interface Rank {
  id: number;
  image: string;
  title: string;
  change: string;
  nft: string;
  vlume: string;
}

const initialState: Rank[] = [
  {
    id: 1,
    image: rankImg1,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 2,
    image: rankImg2,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 3,
    image: rankImg3,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 4,
    image: rankImg4,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 5,
    image: rankImg5,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 6,
    image: rankImg6,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 7,
    image: rankImg7,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 8,
    image: rankImg8,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 9,
    image: rankImg9,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 10,
    image: rankImg10,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 11,
    image: rankImg11,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 12,
    image: rankImg12,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 13,
    image: rankImg13,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 14,
    image: rankImg14,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 15,
    image: rankImg15,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 16,
    image: rankImg16,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
  {
    id: 17,
    image: rankImg17,
    title: "Magic Mushroom 0325",
    change: "+1.41%",
    nft: "602",
    vlume: "12.4 ETH",
  },
];

const rankingSlice = createSlice({
  name: "ranking",
  initialState,
  reducers: {},
});

export default rankingSlice.reducer;
