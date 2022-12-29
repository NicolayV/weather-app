import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Extra, Status } from "types";
import { FetchCitiesNames, SearchSlice } from "./types";

export const loadCitiesNames = createAsyncThunk<
  {
    data: FetchCitiesNames;
  },
  string,
  { extra: Extra }
>("@@search/load-cities-names", (name, { extra: { client, api } }) => {
  return client.get(api.getCitiesNames(name));
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
      .addCase(loadCitiesNames.fulfilled, (state, { payload }) => {
        state.list = payload.data.list.map(
          ({ id, name, sys, coord, weather }) => ({
            id,
            name,
            country: sys.country,
            coord: { lat: coord.lat, lon: coord.lon },
            weather_icon: weather[0].icon,
          })
        );
        state.status = "received";
      })

      .addMatcher(
        (action) => action.type.endsWith("/load-cities-names/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/load-cities-names/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      );
  },
});

export const searchCitiesNamesSliceReducer = searchCitiesNamesSlice.reducer;
export const { setStatus } = searchCitiesNamesSlice.actions;
export const selectCitiesNames = (state: RootState) => state.search;
