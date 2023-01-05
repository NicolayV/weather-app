import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Extra, City } from "types";
import { stateAdapter } from "./helper";
import { CityCoord, LocalCitySlice } from "./types";

export const loadCityByIp = createAsyncThunk<
  City,
  undefined,
  { state: RootState; extra: Extra }
>(
  "@@loc-city/city-by-ip",
  async (_, { extra: { client, api } }) => {
    const {
      data: { city, country, latitude, longitude },
    } = await client.get(api.getLocalCityNameByIp());

    const { data } = await client.get(
      api.getCityByCoord({ lat: latitude, lon: longitude })
    );

    const result = stateAdapter({
      city,
      country,
      latitude,
      longitude,
      ...data,
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

export const loadCityByNav = createAsyncThunk<
  City,
  CityCoord,
  { state: RootState; extra: Extra }
>(
  "@@loc-city/city-by-nav",
  async (coords, { extra: { client, api } }) => {
    const {
      data: {
        city: { name, coord, country },
      },
    } = await client.get(api.getLocalCityNameByCoord(coords));

    const {
      data: { daily, current },
    } = await client.get(
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
  name: "@@loc-city",
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
      .addCase(loadCityByIp.fulfilled, (_, { payload }) => {
        return {
          status: "received",
          ...payload,
          error: null,
        };
      })
      .addCase(loadCityByIp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCityByIp.rejected, (state) => {
        state.status = "rejected";
        state.error = "Cannot load data";
      })

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
