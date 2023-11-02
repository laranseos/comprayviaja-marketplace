import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const getCabs = createAsyncThunk<ICabProps[], void, {}>("/api/cab", async () => {
    const response = await axios.get("/api/cab");
    return response.data;
});

interface ICabState {
    data: ICabProps[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ICabState = {
    data: [],
    loading: "idle",
    error: null,
};

const cabSlice = createSlice({
    name: "cab",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCabs.pending, (state) => {
            if (state.loading === "idle") {
                state.loading = "pending";
            }
        });
        builder.addCase(getCabs.fulfilled, (state, action) => {
            if (state.loading === "pending") {
                state.data = action.payload;
                state.loading = "succeeded";
            }
        });
        builder.addCase(getCabs.rejected, (state, action) => {
            if (state.loading === "pending") {
                state.loading = "failed";
                state.error = "Error occurred";
            }
        });
    },
});

export default cabSlice.reducer;

export const selectCab = (state: RootState) => state.cab;
