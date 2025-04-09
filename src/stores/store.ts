import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./generalStores";
import productReducer from "./productStores";

export const store = configureStore({
  reducer: {
    generalStores: generalReducer,
    productStores: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
