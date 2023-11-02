import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { I18n } from "next-i18next";

interface LangState {
  i18LangStatus: string;
}

const initialState: LangState = {
  i18LangStatus: "",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.i18LangStatus = action.payload;
    },
  },
});

export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;
export const selectCab = (state: RootState) => state.language;
