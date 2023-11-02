import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const getFlights = createAsyncThunk<IFlightProps[], void, {}>("/api/flight", async () => {
  const response = await axios.get("/api/flight");
  return response.data;
});

interface IFlightState {
  data: IFlightProps[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IFlightState = {
  data: [],
  loading: "idle",
  error: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "succeeded";
      }
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "failed";
        state.error = "Error occurred";
      }
    });
  },
});

export default flightSlice.reducer;

export const selectFlight = (state: RootState) => state.flight;
