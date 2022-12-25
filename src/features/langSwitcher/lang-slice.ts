import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Languages } from "types";

interface LangSlice {
  lang: Languages;
}

const initialState: LangSlice = {
  lang: "EN",
};

const languageSlice = createSlice({
  name: "@@selector",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;

export const selectLanguage = (state: RootState) => state.selector;
