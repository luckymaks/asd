import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const config = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(config, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
