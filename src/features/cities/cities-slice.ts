import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export const loadCoordCity = createAsyncThunk<
  {
    // data: Country[];
    data: any;
  },
  { name: string; country: string; strLat: string; strLon: string },
  //   { extra: Extra }
  { extra: any }
>("@@cities/load-by-coord", (coord, { extra: { client, api } }) => {
  console.log(coord);
  return client.get(api.coordSearch(coord));
});

export type Status = "idle" | "rejected" | "loading" | "received";

export interface CoordCityProps {
  id: number | null;
  name: string;
  country: string;
  //   dt_txt: string;
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
    temp: number;
  }[];
}

interface CoordCitiesProps {
  status: Status;
  list: any[];
  error: string | null;
}

const initialState: CoordCitiesProps = {
  status: "idle",
  list: [],
  error: null,
};

const coordCitiesSlice = createSlice({
  name: "@@coord",
  initialState,
  reducers: {
    deleteCity: (state, action) => {
      state.list = state.list.filter((city) => {
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
      .addCase(loadCoordCity.fulfilled, (state, action) => {
        const currentCity: CoordCityProps = {
          id: action.payload.data.current.dt,
          name: action.meta.arg.name,
          country: action.meta.arg.country,
          dt: action.payload.data.current.dt,
          weather_icon: action.payload.data.current.weather[0].icon,
          weather_description: action.payload.data.current.weather[0].main,
          temp: action.payload.data.current.temp,
          temp_notation: "celsius",
          feels_like: action.payload.data.current.feels_like,
          wind: action.payload.data.current.wind_speed,
          pressure: action.payload.data.current.pressure,
          humidity: action.payload.data.current.humidity,
          forecast: action.payload.data.daily.map(
            (daily: { dt: number; temp: { day: number } }) => ({
              dt: daily.dt,
              temp: daily.temp.day,
            })
          ),
        };

        state.status = "received";
        state.list = [{ ...currentCity }, ...state.list];
      })

      .addMatcher(
        (action) => action.type.endsWith("/load-by-coord/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/load-by-coord/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      );
  },
});

export const coordCitiesSliceReducer = coordCitiesSlice.reducer;

export const { deleteCity, updateCityNotation } = coordCitiesSlice.actions;

export const selectCoordCitiesSlice = (state: RootState) => state.coord;
