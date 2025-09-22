import { createSlice } from "@reduxjs/toolkit";
import nftImg1 from "../../assets/images/nft1.png";
import nftImg2 from "../../assets/images/nft2.png";
import nftImg3 from "../../assets/images/nft3.png";
import nftImg4 from "../../assets/images/nft4.png";
import nftImg5 from "../../assets/images/nft5.png";
import nftImg6 from "../../assets/images/nft6.png";
import nftImg7 from "../../assets/images/nft7.png";
import nftImg8 from "../../assets/images/nft8.png";
import nftImg9 from "../../assets/images/nft9.png";

export interface Card {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const initialState: Card[] = [
  {
    id: 1,
    image: nftImg1,
    title: "Foxy Life",
    desc: "1.63 ETH",
  },
  {
    id: 2,
    image: nftImg2,
    title: "Cat from future",
    desc: "1.83 ETH",
  },
  {
    id: 3,
    image: nftImg3,
    title: "Psycho Dog",
    desc: "1.63 ETH",
  },
  {
    id: 4,
    image: nftImg4,
    title: "Designer Bear",
    desc: "1.63 ETH",
  },
  {
    id: 5,
    image: nftImg5,
    title: "ColorfulDog 0524",
    desc: "1.63 ETH",
  },
  {
    id: 6,
    image: nftImg6,
    title: "Dancing Robot 0375",
    desc: "1.63 ETH",
  },
  {
    id: 7,
    image: nftImg7,
    title: "Dancing Robot 0356",
    desc: "1.63 ETH",
  },
  {
    id: 8,
    image: nftImg8,
    title: "Dancing Robot 0321",
    desc: "1.63 ETH",
  },
  {
    id: 9,
    image: nftImg9,
    title: "Dancing Robot 0024 ",
    desc: "1.63 ETH",
  },
];

const cardSlice = createSlice({
  name: "nftcard",
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
