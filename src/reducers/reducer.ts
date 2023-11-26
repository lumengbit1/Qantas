import { createSlice } from "@reduxjs/toolkit";

import { sortingAction } from "./actions";
import mockData from "../assets/mockData/mock_hotel_data_with_picsum.json";

import type { HotelState } from "../types/global";

const initialState: HotelState[] = mockData;

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    sorting: sortingAction,
  },
});

export const { sorting } = hotelSlice.actions;

export default hotelSlice.reducer;
