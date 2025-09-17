import { createSlice } from "@reduxjs/toolkit";
import trerndingImg from "../../assets/images/trending.png";
import trerndingImg2 from "../../assets/images/trending2.png";
import trerndingImg3 from "../../assets/images/trending3.png";
interface TrendingItem {
  id: number;
  title: string;
  author: string;
  images: string[];
  total: string;
}

const initialState: TrendingItem[] = [
  {
    id: 1,
    title: "DSGN Animals",
    author: "MrFox",
    images: [trerndingImg],
    total: "1025+",
  },
  {
    id: 2,
    title: "Magic Mushrooms",
    author: "Shroomie",
    images: [trerndingImg2],
    total: "1025+",
  },
  {
    id: 3,
    title: "Disco Machines",
    author: "BeKind2Robots",
    images: [trerndingImg3],
    total: "1025+",
  },
];

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
});

export default trendingSlice.reducer;
