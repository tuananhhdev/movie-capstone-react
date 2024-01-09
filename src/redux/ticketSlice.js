import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listAPI, quanLiVe } from "../services/API";

const initialState = {
  arrDanhsachGhe: [],
  arrGheDangDat: [],
  thongTinPhongVe: {},
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    getDetailRoomTicket: (state, action) => {
      state.thongTinPhongVe = action.payload;
    },
    datGhe: (state, actions) => {
      let gheDaDat = actions.payload;
      let index = state.arrGheDangDat.findIndex(
        (item) => item.maGhe === gheDaDat.maGhe
      );
      index != -1
        ? state.arrGheDangDat.splice(index, 1)
        : state.arrGheDangDat.push(gheDaDat);
    },
    huyGhe: (state, actions) => {
      let huyGhe = actions.payload;
      state.arrGheDangDat = state.arrGheDangDat.filter(
        (item) => item.soGhe != huyGhe
      );
    },
  },
});

export const { huyGhe, datGhe, getDetailRoomTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
