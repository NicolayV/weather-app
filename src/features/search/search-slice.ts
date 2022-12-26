import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export const loadAutocompleteCity = createAsyncThunk<
  {
    // data: Country[];
    data: any;
  },
  string,
  //   { extra: Extra }
  { extra: any }
>("@@search/autocomplete-city", (name, { extra: { client, api } }) => {
  return client.get(api.autocompleteSearch(name));
});

export type Status = "idle" | "rejected" | "loading" | "received";

export interface AutocompleteCityProps {
  id: number | null;
  name: string;
  coord: {
    lat: number | null;
    lon: number | null;
  };
  country: string;
}

interface AutocompleteCitiesProps {
  status: Status;
  list: AutocompleteCityProps[];
  error: string | null;
}
interface SysProps {
  sys: { country: string };
}

interface ListItemProps extends AutocompleteCityProps, SysProps {}

const initialState: AutocompleteCitiesProps = {
  status: "idle",
  list: [],
  error: null,
};

const autocompleteCitiesSlice = createSlice({
  name: "@@search",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadAutocompleteCity.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.list.map((item: ListItemProps) => ({
          id: item.id,
          name: item.name,
          country: item.sys.country,
          coord: { lat: item.coord.lat, lon: item.coord.lon },
        }));
      })

      .addMatcher(
        (action) => action.type.endsWith("autocomplete-city/rejected"),
        (state) => {
          state.status = "rejected";
          state.error = "Cannot load data";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("autocomplete-city/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      );
  },
});

export const autocompleteCitiesSliceReducer = autocompleteCitiesSlice.reducer;
export const { setStatus } = autocompleteCitiesSlice.actions;
export const selectAutocompleteCities = (state: RootState) => state.search;
