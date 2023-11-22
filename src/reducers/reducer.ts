import { createSlice } from "@reduxjs/toolkit";
import { HotelState } from "./types";
import { decrementAction, incrementAction } from "./actions";
import mockData from "../assets/mockData/mock_hotel_data_with_picsum.json";

const initialState: HotelState[] = mockData;

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
  },
});

export const { increment, decrement } = hotelSlice.actions;

export default hotelSlice.reducer;
