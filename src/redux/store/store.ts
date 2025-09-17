import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import trendingSlice from "../slices/trendingSlice";
import creatorsSlice from "../slices/creatorsSlice";
import categorySlice from "../slices/categorySlice";
import discoverSlice from "../slices/discoverSlice";
import workSlice from "../slices/workSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    trending: trendingSlice,
    creators: creatorsSlice,
    categories: categorySlice,
    discover: discoverSlice,
    work: workSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
