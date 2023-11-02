import { createReducer } from "@reduxjs/toolkit";

interface IHotelProps {
  [key: string]: any;
  districtStatus: string[];
  facilityStatus: string[];
  hostLangStatus: string[];
  rateStatus: string[];
  priceStatus: { min: number; max: number };
  filterTagStatus: string[];
}
var initialState: IHotelProps = { districtStatus: [], facilityStatus: [], hostLangStatus: [], rateStatus: [], priceStatus: { min: 10, max: 10000 }, filterTagStatus: [] };

export const hotelFilterReducer = createReducer(initialState, {
  districtStatus: (state, action) => {
    state.districtStatus = action.payload;
  },

  facilityStatus: (state, action) => {
    state.facilityStatus = action.payload;
  },

  hostLangStatus: (state, action) => {
    state.hostLangStatus = action.payload;
  },

  rateStatus: (state, action) => {
    state.rateStatus = action.payload;
  },

  priceStatus: (state, action) => {
    state.priceStatus = { min: action.payload[0] || action.payload.min, max: action.payload[1] || action.payload.max };
  },

  filterTagStatus: (state, action) => {
    state.filterTagStatus = action.payload;
  },
});
