import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCityByName = createAsyncThunk<
  {
    // data: Country[];
    data: any;
  },
  string,
  //   { extra: Extra }
  { extra: any }
>("@@search/load-city-by-name", (name, { extra: { client, api } }) => {
  return client.get(api.searchByCity(name));
});

export type Status = "idle" | "rejected" | "loading" | "received";

interface CityProps {
  id: number | null;
  name: string;
  country: string;
  dt_txt: string;
  dt: number | null;
  weather_icon: string | null;
  weather_description: string;
  temp: number | null;
  temp_notation: "celsius" | "fahrenheit";
  feels_like: number | null;
  wind: number | null;
  humidity: number | null;
  pressure: number | null;
  forecast: {
    dt: number;
    dt_txt: string;
  }[];
}

interface WeatherSliceProps {
  status: Status;
  city: CityProps;
  list: any[];
  error: string | null;
}

const initialState: WeatherSliceProps = {
  status: "idle",
  city: {
    id: null,
    name: "",
    country: "",
    dt_txt: "",
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
  },

  list: [],
  error: null,
};

const weatherSlice = createSlice({
  name: "@@weather",
  initialState,
  reducers: {
    clearCity: (state) => {
      state.status = "idle";
      state.city.id = null;
      state.city.name = "";
      state.city.country = "";
      state.city.dt_txt = "";
      state.city.dt = null;
      state.city.weather_icon = null;
      state.city.weather_description = "";
      state.city.temp = null;
      state.city.temp_notation = "celsius";
      state.city.feels_like = null;
      state.city.wind = null;
      state.city.humidity = null;
      state.city.pressure = null;
      state.city.forecast = [];
      state.error = null;
    },
    addCity: (state) => {
      const currentCity = state.city;
      state.list = [currentCity, ...state.list];
    },
    deleteCity: (state, action) => {
      state.list = state.list.filter((city) => {
        console.log(city.id !== action.payload);
        return city.id !== action.payload;
      });
    },
    updateCityNotation: (state, action) => {
      let currentCity = state.list.find((city) => {
        return city.id === action.payload.id;
      });
      currentCity.temp_notation = action.payload.temp_notation;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCityByName.fulfilled, (state, action) => {
        state.status = "received";
        state.city.id = action.payload.data.city.id;
        state.city.name = action.payload.data.city.name;
        state.city.country = action.payload.data.city.country;
        state.city.dt_txt = action.payload.data.list[0].dt_txt;
        state.city.dt = action.payload.data.list[0].dt;
        state.city.weather_icon = action.payload.data.list[0].weather[0].icon;
        state.city.weather_description =
          action.payload.data.list[0].weather[0].main;
        state.city.temp = action.payload.data.list[0].main.temp;
        state.city.feels_like = action.payload.data.list[0].main.feels_like;
        state.city.wind = action.payload.data.list[0].wind.speed;
        state.city.humidity = action.payload.data.list[0].main.humidity;
        state.city.pressure = action.payload.data.list[0].main.pressure;
        state.city.forecast = action.payload.data.list.map((item: any) => ({
          dt: item.dt,
          dt_txt: item.dt_txt,
        }));
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      );
  },
});

export const weatherReducer = weatherSlice.reducer;
export const { clearCity, addCity, deleteCity, updateCityNotation } =
  weatherSlice.actions;
