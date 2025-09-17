import { createSlice } from "@reduxjs/toolkit";
import category1 from "../../assets/images/cat1.png";
import category2 from "../../assets/images/cat2.png";
import category3 from "../../assets/images/cat3.png";
import category4 from "../../assets/images/cat4.png";
import category5 from "../../assets/images/cat5.png";
import category6 from "../../assets/images/cat6.png";
import category7 from "../../assets/images/cat7.png";
import category8 from "../../assets/images/cat8.png";
interface Category {
  id: number;
  name: string;
  image: string;
}

const initialState: Category[] = [
  { id: 1, name: "Art", image: category1 },
  { id: 2, name: "Collectibles", image: category2 },
  { id: 3, name: "Music", image: category3 },
  { id: 4, name: "Photo", image: category4 },
  { id: 5, name: "Video", image: category5 },
  { id: 6, name: "Utility", image: category6 },
  { id: 7, name: "Sport", image: category7 },
  { id: 8, name: "Virtual Worlds", image: category8 },
];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
