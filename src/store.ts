import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as api from "api";
import { fetchJson } from "utils/http";

import { languageReducer } from "features/switcher/langSlice";
import { searchCitiesNamesSliceReducer } from "features/search/searchSlice";
import { localCityReducer } from "features/localCity/localCitySlice";
import { citiesSliceReducer } from "features/cities/citiesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["selector", "cities"],
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
          client: fetchJson,
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
