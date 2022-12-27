import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Languages } from "types";

const initialState: { lang: Languages } = {
  lang: "EN",
};

const languageSlice = createSlice({
  name: "@@selector",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<Languages>) => {
      state.lang = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;

export const selectLanguage = (state: RootState) => state.selector;
