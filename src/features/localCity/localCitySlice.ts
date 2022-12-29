import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import {
  CityCoord,
  Extra,
  FetchCityByCoord,
  FetchCityNameByCoord,
} from "types";
import { CitySlice, FetchCityNameByIp } from "./types";

export const loadLocalCityNameByIp = createAsyncThunk<
  {
    data: FetchCityNameByIp;
  },
  undefined,
  { extra: Extra }
>("@@loc-city/get-name-by-ip", (_, { extra: { client, api } }) => {
  return client.get(api.getLocalCityNameByIp());
});

export const loadLocalCityByCoord = createAsyncThunk<
  {
    data: FetchCityByCoord;
  },
  CityCoord,
  { extra: Extra }
>("@@loc-city/get-city-by-coord", (coord, { extra: { client, api } }) => {
  return client.get(api.getCityByCoord(coord));
});

export const loadLocalCityNameByCoord = createAsyncThunk<
  {
    data: FetchCityNameByCoord;
  },
  CityCoord,
  { extra: Extra }
>("@@loc-city/get-city-name-by-coord", (coord, { extra: { client, api } }) => {
  return client.get(api.getCityByCoord(coord));
});

const initialState: CitySlice = {
  status: "idle",
  id: null,
  name: "",
  country: "",
  lat: null,
  lon: null,
  dt: null,
  weather_icon: "",
  weather_description: "",
  temp: null,
  temp_notation: "celsius",
  feels_like: null,
  wind: null,
  humidity: null,
  pressure: null,
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

    updateLocalCityNotation: (
      state,
      { payload }: PayloadAction<number | null>
    ) => {
      if (state.id === payload) {
        state.temp_notation =
          state.temp_notation === "fahrenheit" ? "celsius" : "fahrenheit";
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        loadLocalCityNameByIp.fulfilled,
        (state, { payload: { data } }) => {
          state.name = data.city;
          state.country = data.city;
          state.lat = data.latitude;
          state.lon = data.longitude;
          state.status = "received-name-by-ip";
        }
      )
      .addCase(
        loadLocalCityByCoord.fulfilled,
        (
          state,
          {
            payload: {
              data: { current, daily },
            },
          }
        ) => {
          state.id = current.dt;
          state.dt = current.dt;
          state.weather_icon = current.weather[0].icon;
          state.weather_description = current.weather[0].main;
          state.temp = current.temp;
          state.temp = current.temp;
          state.temp_notation = "celsius";
          state.feels_like = current.feels_like;
          state.humidity = current.humidity;
          state.pressure = current.pressure;
          state.forecast = daily.map((day) => ({
            dt: day.dt,
            temp: day.temp.day,
          }));

          state.status = "received";
        }
      )

      .addCase(
        loadLocalCityNameByCoord.fulfilled,
        (state, { payload: { data } }) => {
          state.name = data.city.name;
          state.country = data.city.country;
          state.lat = data.city.coord.lat;
          state.lon = data.city.coord.lon;
          state.status = "received-name-by-nav";
        }
      );
  },
});

export const localCityReducer = localCitySlice.reducer;
export const { deleteLocalCity, updateLocalCityNotation } =
  localCitySlice.actions;

export const selectLocalCity = (state: RootState) => state.locCity;
