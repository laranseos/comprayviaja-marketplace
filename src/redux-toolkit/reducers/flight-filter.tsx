import { createReducer } from "@reduxjs/toolkit";

interface IFlightReducerProps {
  [key: string]: any;
  stopStatus: string[];
  departureStatus: string[];
  arriveStatus: string[];
  airlineStatus: string[];
}
var initialState: IFlightReducerProps = { stopStatus: [], departureStatus: [], arriveStatus: [], airlineStatus: [], flightFilterTagStatus: [] };

export const flightFilterReducer = createReducer(initialState, {
  stopStatus: (state, action) => {
    state.stopStatus = action.payload;
  },

  departureStatus: (state, action) => {
    state.departureStatus = action.payload;
  },

  arriveStatus: (state, action) => {
    state.arriveStatus = action.payload;
  },
  airlineStatus: (state, action) => {
    state.airlineStatus = action.payload;
  },

  flightFilterTagStatus: (state, action) => {
    state.flightFilterTagStatus = action.payload;
  },
});
