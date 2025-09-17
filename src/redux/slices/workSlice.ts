import { createSlice } from "@reduxjs/toolkit";
import workImg from "../../assets/images/work1 (1).png";
import workImg2 from "../../assets/images/work1 (2).png";
import workImg3 from "../../assets/images/work1 (3).png";
export interface Work {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Work[] = [
  {
    id: 1,
    title: "Setup Your wallet",
    desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    image: workImg,
  },
  {
    id: 2,
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    image: workImg2,
  },
  {
    id: 3,
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    image: workImg3,
  },
];

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

export default workSlice.reducer;
