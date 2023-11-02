import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const getTourData = createAsyncThunk<ITravelProps[], void, {}>("api/tour", async () => {
  const response = await axios.get("/api/tour");
  return response.data;
});

interface TourState {
  data: ITravelProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TourState = {
  data: [],
  loading: "idle",
  error: null,
};

const TourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTourData.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getTourData.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "succeeded";
      }
    });
    builder.addCase(getTourData.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "failed";
        state.error = "Error occurred";
      }
    });
  },
});

export default TourSlice.reducer;

export const selectTour = (state: RootState) => state.tour;
