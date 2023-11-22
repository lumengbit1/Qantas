import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../reducers/reducer";

export const store = configureStore({
  reducer: { hotelReducer: hotelReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
