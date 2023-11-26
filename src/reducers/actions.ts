import { SortMapping } from "./constants";

import type { HotelState } from "../types/global";
import type { PayloadAction } from "@reduxjs/toolkit";

export const sortingAction = (
  state: HotelState[],
  action: PayloadAction<string>
) => {
  if (action.payload === SortMapping.Ascending) {
    state.sort((a, b) => {
      const amountA = parseFloat(a.price.total.amount);
      const amountB = parseFloat(b.price.total.amount);
      return amountA - amountB;
    });
  }

  if (action.payload === SortMapping.Descending) {
    state.sort((a, b) => {
      const amountA = parseFloat(a.price.total.amount);
      const amountB = parseFloat(b.price.total.amount);
      return amountB - amountA;
    });
  }
};
