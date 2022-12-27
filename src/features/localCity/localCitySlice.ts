import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Extra, UpdateCityNotationProps } from "types";
import { LocalCitySliceProps, LocalCityProps } from "./types";

export const loadLocalCityName = createAsyncThunk<
  {
    data: { city: string };
  },
  undefined,
  { extra: Extra }
>("@@local/load-city-name", (_, { extra: { client, api } }) => {
  return client.get(api.getCityNameByLocation());
});

export const loadLocalCity = createAsyncThunk<
  {
    data: LocalCityProps;
  },
  string,
  { extra: Extra }
>("@@local/load-city", (name, { extra: { client, api } }) => {
  return client.get(api.searchByCity(name));
});

const initialState: LocalCitySliceProps = {
  status: "idle",
  current_location: "",
  id: null,
  name: "",
  country: "",
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
  name: "@@local",
  initialState,
  reducers: {
    deleteLocalCity: (state) => {
      state.status = "rejected";
      state.id = null;
      state.name = "";
      state.country = "";
      state.dt = null;
      state.weather_icon = null;
      state.weather_description = "";
      state.temp = null;
      state.temp_notation = "celsius";
      state.feels_like = null;
      state.wind = null;
      state.humidity = null;
      state.pressure = null;
      state.forecast = [];
      state.error = null;
    },

    updateLocalCityNotation: (
      state,
      action: PayloadAction<UpdateCityNotationProps>
    ) => {
      state.temp_notation = action.payload.temp_notation;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadLocalCity.fulfilled, (state, { payload: { data } }) => {
        state.status = "received";
        state.id = data.city.id;
        state.name = data.city.name;
        state.country = data.city.country;
        state.dt = data.list[0].dt;

        state.weather_icon = data.list[0].weather[0].icon;
        state.weather_description = data.list[0].weather[0].main;
        state.temp = data.list[0].main.temp;
        state.feels_like = data.list[0].main.feels_like;
        state.humidity = data.list[0].main.humidity;
        state.pressure = data.list[0].main.pressure;
        state.wind = data.list[0].wind.speed;

        state.forecast = data.list
          .map((item) => ({
            dt: item.dt,
            temp: item.main.temp,
          }))
          .slice(-9);
      })
      .addCase(loadLocalCityName.fulfilled, (state, { payload }) => {
        state.current_location = payload.data.city;
      })

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("city/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      );
  },
});

export const localCityReducer = localCitySlice.reducer;
export const { deleteLocalCity, updateLocalCityNotation } =
  localCitySlice.actions;

export const selectLocalCity = (state: RootState) => state.location;
