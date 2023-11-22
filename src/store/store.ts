import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../reducers/reducer";

export const store = configureStore({
  reducer: { reducer: hotelReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
