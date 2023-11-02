import { createReducer } from "@reduxjs/toolkit";

interface ITourReducerProps {
    [key: string]: any;
    flightStatus: string[];
    travelStatus: string[];
    tripDurationStatus: string[];
    filterTourTags: string[];
}
var initialState: ITourReducerProps = { flightStatus: [], travelStatus: [], tripDurationStatus: [], filterTourTags: [] };

export const tourFilterReducer = createReducer(initialState, {
    flightStatus: (state, action) => {
        state.flightStatus = action.payload;
    },

    travelStatus: (state, action) => {
        state.travelStatus = action.payload;
    },

    tripDurationStatus: (state, action) => {
        state.tripDurationStatus = action.payload;
    },
    filterTourTags: (state, action) => {
        state.filterTourTags = action.payload;
    },
});
