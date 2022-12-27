import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Extra, LoadCityNamesProps, Status } from "types";
import { CityNamesDataProps } from "./types";

export const loadCityNames = createAsyncThunk<
  {
    data: CityNamesDataProps;
  },
  string,
  { extra: Extra }
>("@@search/load-city-names", (name, { extra: { client, api } }) => {
  return client.get(api.getCityByName(name));
});

interface CitiesNamesProps {
  status: Status;
  list: LoadCityNamesProps[];
  error: string | null;
}

const initialState: CitiesNamesProps = {
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
      .addCase(loadCityNames.fulfilled, (state, { payload }) => {
        state.list = payload.data.list.map(({ id, name, sys, coord }) => ({
          id,
          name,
          country: sys.country,
          coord: { lat: coord.lat, lon: coord.lon },
        }));
        state.status = "received";
      })

      .addMatcher(
        (action) => action.type.endsWith("/load-city-names/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/load-city-names/pending"),
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
