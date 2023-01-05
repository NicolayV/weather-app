import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { geoApiOptions } from "config";
import { RootState } from "store";
import { Extra, Status, SearchListItem } from "types";
import { stateAdapter } from "./helper";
import { IFetchAutoCompeteCityName, SearchSlice } from "./types";

export const loadAutoCompeteCityName = createAsyncThunk<
  {
    data: IFetchAutoCompeteCityName;
  },
  string,
  { extra: Extra }
>("@@search/load-auto-comp-names", (name, { extra: { client, api } }) => {
  return client.get(api.getAutoCompeteCityName(name), geoApiOptions);
});

export const loadCitiesNames = createAsyncThunk<
  SearchListItem[],
  string,
  { extra: Extra }
>("@@search/load-cities-names", async (name, { extra: { client, api } }) => {
  const { data } = await client.get(api.getCitiesNames(name));
  return stateAdapter(data);
});

const initialState: SearchSlice = {
  status: "idle",
  auto_comp_list: [],
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
      })

      .addCase(loadAutoCompeteCityName.fulfilled, (_, { payload }) => {
        console.log(payload);
      });
  },
});

export const searchCitiesNamesSliceReducer = searchCitiesNamesSlice.reducer;
export const { setStatus } = searchCitiesNamesSlice.actions;
export const selectCitiesNames = (state: RootState) => state.search;
