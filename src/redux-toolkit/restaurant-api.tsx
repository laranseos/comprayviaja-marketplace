import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const getRestaurant = createAsyncThunk<IRestaurantProps[], void, {}>("/api/restaurant", async () => {
  const response = await axios.get("/api/restaurant");
  return response.data;
});

interface IRestaurantState {
  data: IRestaurantProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IRestaurantState = {
  data: [],
  loading: "idle",
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurant.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getRestaurant.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "succeeded";
      }
    });
    builder.addCase(getRestaurant.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "failed";
        state.error = "Error occurred";
      }
    });
  },
});

export default restaurantSlice.reducer;

export const selectCab = (state: RootState) => state.restaurant;
