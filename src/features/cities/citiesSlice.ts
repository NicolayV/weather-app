import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { City, CityCoord, Extra, FetchCityByCoord } from "types";
import { CitiesSlice, LoadCity } from "./types";

export const loadCity = createAsyncThunk<
  {
    data: FetchCityByCoord & CityCoord;
  },
  LoadCity,
  { extra: Extra }
>(
  "@@cities/load-city",

  (coord, { extra: { client, api } }) => client.get(api.getCityByCoord(coord))
);

const initialState: CitiesSlice = {
  status: "idle",
  list: [],
  error: null,
};

const citiesSlice = createSlice({
  name: "@@cities",
  initialState,
  reducers: {
    deleteCity: (state, { payload }: PayloadAction<number | null>) => {
      state.list = state.list.filter((city) => city.id !== payload);
    },

    updateCity: (state, { payload }: PayloadAction<number | null>) => {
      const city = state.list.find(({ id }) => id === payload);
      if (city) {
        city.temp_notation =
          city.temp_notation === "fahrenheit" ? "celsius" : "fahrenheit";
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCity.fulfilled, (state, { payload: { data }, meta }) => {
        const currentCity: City = {
          id: data.current.dt,
          name: meta.arg.name,
          country: meta.arg.country,
          lat: data.lat,
          lon: data.lon,
          dt: data.current.dt,
          weather_icon: data.current.weather[0].icon,
          weather_description: data.current.weather[0].main,
          temp: data.current.temp,
          temp_notation: "celsius",
          feels_like: data.current.feels_like,
          wind: data.current.wind_speed,
          humidity: data.current.humidity,
          pressure: data.current.pressure,
          forecast: data.daily.map((day) => ({
            dt: day.dt,
            temp: day.temp.day,
          })),
        };

        state.list = [{ ...currentCity }, ...state.list];
        state.status = "received";
      })

      .addMatcher(
        (action) => action.type.endsWith("/load-city/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/load-city/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      );
  },
});

export const citiesSliceReducer = citiesSlice.reducer;
export const { deleteCity, updateCity } = citiesSlice.actions;
export const selectCoordCitiesSlice = (state: RootState) => state.cities;
