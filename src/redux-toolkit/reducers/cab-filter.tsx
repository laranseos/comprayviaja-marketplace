import { createReducer } from "@reduxjs/toolkit";

interface ICabReducerProps {
  [key: string]: any;
  cabTypeStatus: string[];
  capacityStatus: string[];
  cabOptionStatus: string[];
}
var initialState: ICabReducerProps = { cabTypeStatus: [], capacityStatus: [], cabOptionStatus: [] };

export const cabFilterReducer = createReducer(initialState, {
  cabTypeStatus: (state, action) => {
    state.cabTypeStatus = action.payload;
  },

  capacityStatus: (state, action) => {
    state.capacityStatus = action.payload;
  },

  cabOptionStatus: (state, action) => {
    state.cabOptionStatus = action.payload;
  },
});
