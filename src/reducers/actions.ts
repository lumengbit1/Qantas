import { HotelState } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";

export const incrementAction = (state: HotelState) => {
  state.value += 1;
};

export const decrementAction = (state: HotelState) => {
  state.value -= 1;
};

export const incrementByAmountAction = (
  state: HotelState,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};
