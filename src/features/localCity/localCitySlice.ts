import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Extra, City, FetchCity } from "types";
import { stateAdapter } from "./helper";
import { CityCoord, LocalCitySlice } from "./types";

export const loadCityByNav = createAsyncThunk<
  City,
  CityCoord,
  { state: RootState; extra: Extra }
>(
  "@@local-city/load",
  async (coords, { extra: { client, api } }) => {
    type FetchQ = {
      city: {
        name: string;
        country: string;
        coord: {
          lat: number & string;
          lon: number & string;
        };
      };
    };
    const {
      city: { name, country, coord },
    } = await client<FetchQ>(api.getLocalCityNameByCoord(coords));
    const { daily, current } = await client<FetchCity>(
      api.getCityByCoord({ lat: coord.lat, lon: coord.lon })
    );
    const result = stateAdapter({
      city: name,
      country,
      latitude: coord.lat,
      longitude: coord.lon,
      daily,
      current,
    });
    return result;
  },
  {
    condition: (_, store) => {
      const state = store.getState();
      if (state.locCity.status === "loading") {
        return false;
      }
    },
  }
);

const initialState: LocalCitySlice = {
  status: "idle",
  id: "",
  name: "",
  country: "",
  lat: "",
  lon: "",
  dt: "",
  weather_icon: "",
  weather_description: "",
  temp: "",
  temp_unit: "celsius",
  feels_like: "",
  wind: "",
  humidity: "",
  pressure: "",
  forecast: [],
  error: null,
};

const localCitySlice = createSlice({
  name: "@@local-city",
  initialState,
  reducers: {
    deleteLocalCity: (_, action: PayloadAction<undefined>) => ({
      ...initialState,
      status: "canceled",
    }),
    updateLocalCity: (state, { payload }: PayloadAction<string>) => {
      if (typeof payload === "string") {
        state.temp_unit =
          state.temp_unit === "fahrenheit" ? "celsius" : "fahrenheit";
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCityByNav.fulfilled, (_, { payload }) => {
        return {
          status: "received",
          ...payload,
          error: null,
        };
      })
      .addCase(loadCityByNav.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCityByNav.rejected, (state) => {
        state.status = "rejected";
        state.error = "Cannot load data";
      });
  },
});

export const localCityReducer = localCitySlice.reducer;
export const { deleteLocalCity, updateLocalCity } = localCitySlice.actions;

export const selectLocalCity = (state: RootState) => state.locCity;
