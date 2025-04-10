import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./generalStores";
import productReducer from "./productStores";
import projectReducer from "./projectStores";

export const store = configureStore({
  reducer: {
    generalStores: generalReducer,
    productStores: productReducer,
    projectStores: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
