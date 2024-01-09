import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  count: 0,
};

const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enableLoading: (state) => {
      state.isActive = true;
      state.count += 1;
    },
    disableLoading: (state) => {
      state.count -= 1;
      state.count == 0 ? (state.isActive = false) : (state.isActive = true);
    },
  },
});

export const { enableLoading, disableLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
