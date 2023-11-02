import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currencyData } from "@/data/common-data";

interface ICurrencyProps {
  currency: string;
  name: string;
  symbol: string;
  currencyValue: number;
}

const initialState: ICurrencyProps = {
  currency: "USD",
  name: "dollar",
  symbol: "$",
  currencyValue: 1,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrencyChange: (state, action: PayloadAction<string>) => {
      const currencyDetails = currencyData[action.payload];

      if (currencyDetails) {
        state.currency = action.payload;
        state.name = currencyDetails.name;
        state.symbol = currencyDetails.symbol;
        state.currencyValue = currencyDetails.currencyValue;
      }
    },
  },
});

export const { setCurrencyChange } = currencySlice.actions;

export default currencySlice.reducer;
export const selectCurrency = (state: RootState) => state.currency;
