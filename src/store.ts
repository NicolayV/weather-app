import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

import * as api from "config";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { languageReducer } from "features/switcher/langSlice";
import { localCityReducer } from "features/localCity/localCitySlice";
import { searchCitiesNamesSliceReducer } from "features/search/searchSlice";
import { citiesSliceReducer } from "features/cities/citiesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["selector"],
};

const rootReducer = combineReducers({
  selector: languageReducer,
  search: searchCitiesNamesSliceReducer,
  cities: citiesSliceReducer,

  locCity: localCityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api: api,
        },
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
