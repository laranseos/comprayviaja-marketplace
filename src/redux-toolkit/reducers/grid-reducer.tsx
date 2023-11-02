import { createReducer } from "@reduxjs/toolkit";

interface IGridReducerProps {
  gridSize: number;
  gridStyle: string;
  toPage: number;
  totalPages: number;
  productCount: string;
}

var initialState: IGridReducerProps = { gridSize: 2, gridStyle: "", toPage: 1, totalPages: 1, productCount: "" };

export const gridReducer = createReducer(initialState, {
  gridSize: (state, action) => {
    state.gridSize = action.payload;
  },
  gridStyle: (state, action) => {
    state.gridStyle = action.payload;
  },
  totalPages: (state, action) => {
    state.totalPages = action.payload;
  },
  productCount: (state, action) => {
    state.productCount = action.payload;
  },
  toPage: (state, action) => {
    state.toPage = action.payload;
  },
});
