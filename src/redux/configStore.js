import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
import LoadingSlice from "./LoadingSlice";
import ticketSlice from "./ticketSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    MovieSlice,
    LoadingSlice,
    ticketSlice,
  },
});
