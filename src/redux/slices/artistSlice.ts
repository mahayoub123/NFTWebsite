import { createSlice } from "@reduxjs/toolkit";
import artistImg1 from "../../assets/images/Image1.png";
import artistImg2 from "../../assets/images/Image2.png";
import artistImg3 from "../../assets/images/Image3.png";
import artistImg4 from "../../assets/images/Image4.png";
import artistImg5 from "../../assets/images/Image5.png";
import artistImg6 from "../../assets/images/Image6.png";
import artistImg7 from "../../assets/images/Image7.png";
import artistImg8 from "../../assets/images/Image8.png";
import artistImg9 from "../../assets/images/Image9.png";

export interface Artist {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const initialState: Artist[] = [
  {
    id: 1,
    image: artistImg1,
    title: "Distant Galaxy",
    desc: "1.63 ETH",
  },
  {
    id: 2,
    image: artistImg2,
    title: "Life On Edena",
    desc: "1.83 ETH",
  },
  {
    id: 3,
    image: artistImg3,
    title: "AstroFiction",
    desc: "1.63 ETH",
  },
  {
    id: 4,
    image: artistImg4,
    title: "CryptoCity",
    desc: "1.63 ETH",
  },
  {
    id: 5,
    image: artistImg5,
    title: "ColorfulDog 0524",
    desc: "1.63 ETH",
  },
  {
    id: 6,
    image: artistImg6,
    title: "Space Tales",
    desc: "1.63 ETH",
  },
  {
    id: 7,
    image: artistImg7,
    title: "Cherry Blossom Girl 037",
    desc: "1.63 ETH",
  },
  {
    id: 8,
    image: artistImg8,
    title: "Dancing Robots 0987",
    desc: "1.63 ETH",
  },
  {
    id: 9,
    image: artistImg9,
    title: "IceCream Ape ",
    desc: "1.63 ETH",
  },
];

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
});

export default artistSlice.reducer;
