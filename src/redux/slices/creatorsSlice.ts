import { createSlice } from "@reduxjs/toolkit";
import creator1 from "../../assets/images/Artist Avatar.png";
import creator2 from "../../assets/images/Artist Avatar 2.png";
import creator3 from "../../assets/images/Artist Avatar 3.png";
import creator4 from "../../assets/images/Artist Avatar 4.png";
import creator5 from "../../assets/images/Artist Avatar 5.png";
import creator6 from "../../assets/images/Artist Avatar 6.png";
import creator7 from "../../assets/images/Artist Avatar 7.png";
import creator8 from "../../assets/images/Artist Avatar 8.png";
import creator9 from "../../assets/images/Artist Avatar 9.png";
import creator10 from "../../assets/images/Artist Avatar 10.png";
import creator11 from "../../assets/images/Artist Avatar 11.png";
import creator12 from "../../assets/images/Artist Avatar 12.png";
export interface Creator {
  id: number;
  name: string;
  totalSales: string;
  image: string;
}

const initialState: Creator[] = [
  {
    id: 1,
    name: "Keepitreal",
    totalSales: "34.53 ETH",
    image: creator1,
  },
  {
    id: 2,
    name: "DigiLab",
    totalSales: "34.53 ETH",
    image: creator2,
  },
  {
    id: 3,
    name: "GravityOne",
    totalSales: "34.53 ETH",
    image: creator3,
  },
  {
    id: 4,
    name: "Juanie",
    totalSales: "34.53 ETH",
    image: creator4,
  },
  {
    id: 5,
    name: "BlueWhale",
    totalSales: "34.53 ETH",
    image: creator5,
  },
  {
    id: 6,
    name: "Mr Fox",
    totalSales: "34.53 ETH",
    image: creator6,
  },
  {
    id: 7,
    name: "Shroomie",
    totalSales: "34.53 ETH",
    image: creator7,
  },
  {
    id: 8,
    name: "Robotica",
    totalSales: "34.53 ETH",
    image: creator8,
  },
  {
    id: 9,
    name: "RustyRobot",
    totalSales: "34.53 ETH",
    image: creator9,
  },
  {
    id: 10,
    name: "Animakid",
    totalSales: "34.53 ETH",
    image: creator10,
  },
  {
    id: 11,
    name: "Dotgu",
    totalSales: "34.53 ETH",
    image: creator11,
  },
  {
    id: 12,
    name: "Ghiblier",
    totalSales: "34.53 ETH",
    image: creator12,
  },
];

const creatorsSlice = createSlice({
  name: "creators",
  initialState,
  reducers: {},
});

export default creatorsSlice.reducer;
