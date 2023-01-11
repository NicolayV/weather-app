import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Extra, Status, SearchListItem } from "types";
import { stateAdapter } from "./helper";
import { FetchSearchList, SearchSlice } from "./types";

export const loadCitiesNames = createAsyncThunk<
  SearchListItem[],
  string,
  { extra: Extra }
>("@@search/load-cities-names", async (name, { extra: { client, api } }) => {
  const data = await client<FetchSearchList>(api.getCitiesNames(name));
  return stateAdapter(data);
});

const initialState: SearchSlice = {
  status: "idle",
  list: [],
  error: null,
};

const searchCitiesNamesSlice = createSlice({
  name: "@@search",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCitiesNames.fulfilled, (_, { payload }) => {
        return {
          status: "received",
          auto_comp_list: [],
          list: payload,
          error: null,
        };
      })
      .addCase(loadCitiesNames.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCitiesNames.rejected, (state) => {
        state.status = "rejected";
        state.error = "Cannot load data";
      });
  },
});

export const searchCitiesNamesSliceReducer = searchCitiesNamesSlice.reducer;
export const { setStatus } = searchCitiesNamesSlice.actions;
export const selectCitiesNames = (state: RootState) => state.search;
