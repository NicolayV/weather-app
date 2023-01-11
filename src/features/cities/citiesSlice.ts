import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { City, Extra, FetchCity } from "types";
import { stateAdapter } from "./helper";
import { CitiesSlice, LoadCity } from "./types";

export const loadCity = createAsyncThunk<
  Omit<City, "name" | "country">,
  LoadCity,
  { extra: Extra }
>("@@cities/load", async (coord, { extra: { client, api } }) => {
  type Fetch = Omit<FetchCity, "name" | "country"> & {
    lat: string;
    lon: string;
  };
  const data = await client<Fetch>(api.getCityByCoord(coord));
  return stateAdapter(data);
});

const initialState: CitiesSlice = {
  status: "idle",
  list: [],
  error: null,
};

const citiesSlice = createSlice({
  name: "@@cities",
  initialState,
  reducers: {
    deleteCity: (state, { payload }: PayloadAction<string>) => {
      state.list = state.list.filter((city) => city.id !== payload);
    },

    updateCity: (state, { payload }: PayloadAction<string>) => {
      const city = state.list.find(({ id }) => id === payload);
      if (city) {
        city.temp_unit =
          city.temp_unit === "fahrenheit" ? "celsius" : "fahrenheit";
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCity.fulfilled, (state, { payload, meta }) => {
        const currentCity = {
          name: meta.arg.name,
          country: meta.arg.country,
          ...payload,
        };
        state.list = [currentCity, ...state.list];
        state.status = "received";
      })

      .addCase(loadCity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCity.rejected, (state) => {
        state.status = "rejected";
        state.error = "Cannot load data";
      });
  },
});

export const citiesSliceReducer = citiesSlice.reducer;
export const { deleteCity, updateCity } = citiesSlice.actions;
export const selectCities = (state: RootState) => state.cities;
