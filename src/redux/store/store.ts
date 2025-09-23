import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import trendingSlice from "../slices/trendingSlice";
import creatorsSlice from "../slices/creatorsSlice";
import categorySlice from "../slices/categorySlice";
import discoverSlice from "../slices/discoverSlice";
import workSlice from "../slices/workSlice";
import artistSlice from "../slices/artistSlice";
import cardSlice from "../slices/cardSlice";
import marketSlice from "../slices/marketSlice";
import rankingSlice from "../slices/rankingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    trending: trendingSlice,
    creators: creatorsSlice,
    categories: categorySlice,
    discover: discoverSlice,
    work: workSlice,
    artist: artistSlice,
    nftcard: cardSlice,
    marketplace: marketSlice,
    ranking: rankingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
