import { createSlice } from "@reduxjs/toolkit";
import { HotelState } from "./types";
import {
  decrementAction,
  incrementAction,
  incrementByAmountAction,
} from "./actions";

const initialState: HotelState = {
  value: 0,
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
    incrementByAmount: incrementByAmountAction,
  },
});

export const { increment, decrement, incrementByAmount } = hotelSlice.actions;

export default hotelSlice.reducer;
