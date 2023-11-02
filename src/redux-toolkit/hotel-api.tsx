import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const getHotels = createAsyncThunk<IHotelProps[], void, {}>("api/hotel", async () => {
  const response = await axios.get("/api/hotel");
  return response.data.hotel_filter;
});

interface HotelState {
  data: IHotelProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: HotelState = {
  data: [],
  loading: "idle",
  error: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotels.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getHotels.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "succeeded";
      }
    });
    builder.addCase(getHotels.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "failed";
        state.error = "Error occurred";
      }
    });
  },
});

export default hotelSlice.reducer;

export const selectHotel = (state: RootState) => state.hotel;
