import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listAPI } from "../services/API";
import { date } from "yup";

export const getAllMovieThunk = createAsyncThunk(
  "movie/getAllMovieThunk",
  async (data, thunkAPI) => {
    // goij du lieu lay danh sach phim
    console.log(data);
    const result = await listAPI.get_movie();
    return result.data.content;
  }
);
const initialState = {
  arrMovie: [],
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fulfilled la trạng thái thunk lấy thành công
    builder.addCase(getAllMovieThunk.fulfilled, (state, actions) => {
      state.arrMovie = actions.payload;
      console.log(actions.payload);
    });
  },
});

export const {} = MovieSlice.actions;

export default MovieSlice.reducer;
// const fetchUserById = createAsyncThunk(
//   "users/fetchByIdStatus",
//   async (userId: number, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );
