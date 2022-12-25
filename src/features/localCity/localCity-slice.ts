import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadLocalCity = createAsyncThunk<
  {
    // data: Country[];
    data: any;
  },
  string,
  //   { extra: Extra }
  { extra: any }
>("@@local-city/load-city", (name, { extra: { client, api } }) => {
  return client.get(api.searchByCity(name));
});
export const loadCurrentLocation = createAsyncThunk<
  {
    // data: Country[];
    data: any;
  },
  string,
  //   { extra: Extra }
  { extra: any }
>("@@local-city/location", (_, { extra: { client, api } }) => {
  return client.get(api.searchLocation());
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
interface LocalCitySliceProps extends CityProps {
  status: Status;
  current_location: string;
  error: string | null;
}

const initialState: LocalCitySliceProps = {
  status: "idle",
  current_location: "",
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
  error: null,
};

const localCitySlice = createSlice({
  name: "@@local-city",
  initialState,
  reducers: {
    clearLocalCity: (state) => {
      state = initialState;
    },

    updateLocalCityNotation: (state, action) => {
      state.temp_notation = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadLocalCity.fulfilled, (state, action) => {
        state.status = "received";
        state.id = action.payload.data.city.id;
        state.name = action.payload.data.city.name;
        state.country = action.payload.data.city.country;
        state.dt_txt = action.payload.data.list[0].dt_txt;
        state.dt = action.payload.data.list[0].dt;
        state.weather_icon = action.payload.data.list[0].weather[0].icon;
        state.weather_description = action.payload.data.list[0].weather[0].main;
        state.temp = action.payload.data.list[0].main.temp;
        state.feels_like = action.payload.data.list[0].main.feels_like;
        state.wind = action.payload.data.list[0].wind.speed;
        state.humidity = action.payload.data.list[0].main.humidity;
        state.pressure = action.payload.data.list[0].main.pressure;
        state.forecast = action.payload.data.list.map((item: any) => ({
          dt: item.dt,
          dt_txt: item.dt_txt,
        }));
      })
      .addCase(loadCurrentLocation.fulfilled, (state, action) => {
        state.current_location = action.payload.data.city;
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
export const { clearLocalCity, updateLocalCityNotation } =
  localCitySlice.actions;
