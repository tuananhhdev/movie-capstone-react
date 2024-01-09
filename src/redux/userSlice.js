import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../utils/Local";

const initialState = {
  user: getLocal(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
