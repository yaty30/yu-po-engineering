import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./generalStores";
// other imports...

export const store = configureStore({
  reducer: {
    generalStores: generalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
