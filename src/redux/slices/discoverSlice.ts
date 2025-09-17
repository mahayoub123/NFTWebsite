import { createSlice } from "@reduxjs/toolkit";
import discover1 from "../../assets/images/discover1.png";
import discover2 from "../../assets/images/discover2.png";
import discover3 from "../../assets/images/discover3.png";

export interface Discover {
  id: number;
  name: string;
  totalSales: string;
  image: string;
}

const initialState: Discover[] = [
  {
    id: 1,
    name: "Distant Galaxy",
    totalSales: "1.63 ETH",
    image: discover1,
  },
  {
    id: 2,
    name: "Life On Edena",
    totalSales: "1.63 ETH",
    image: discover2,
  },
  {
    id: 3,
    name: "AstroFiction",
    totalSales: "1.63 ETH",
    image: discover3,
  },
];

const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {},
});

export default discoverSlice.reducer;
