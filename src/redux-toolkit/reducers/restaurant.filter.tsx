import { createReducer } from "@reduxjs/toolkit";

interface IRestaurantReducerProps {
  [key: string]: any;
  popularStatus: string[];
  cuisinesStatus: string[];
  deliverTimeStatus: string[];
}
var initialState: IRestaurantReducerProps = { popularStatus: [], cuisinesStatus: [], deliverTimeStatus: [] };

export const restaurantFilerReducer = createReducer(initialState, {
  popularStatus: (state, action) => {
    state.popularStatus = action.payload;
  },

  cuisinesStatus: (state, action) => {
    state.cuisinesStatus = action.payload;
  },

  deliverTimeStatus: (state, action) => {
    state.deliverTimeStatus = action.payload;
  },
});
