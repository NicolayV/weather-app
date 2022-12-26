import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

import * as api from "config";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { languageReducer } from "features/switcher/lang-slice";
import { localCityReducer } from "features/localCity/localCity-slice";
import { searchCitiesNamesSliceReducer } from "features/search/search-slice";
import { citiesSliceReducer } from "features/cities/cities-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["location", "selector", "search", "cities"],
};

const rootReducer = combineReducers({
  selector: languageReducer,
  search: searchCitiesNamesSliceReducer,
  cities: citiesSliceReducer,

  location: localCityReducer,
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
