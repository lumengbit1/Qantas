import { createSlice } from "@reduxjs/toolkit";
import { HotelState } from "./types";
import { descendingAction, ascendingAction } from "./actions";
import mockData from "../assets/mockData/mock_hotel_data_with_picsum.json";

const initialState: HotelState[] = mockData;

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    ascending: ascendingAction,
    descending: descendingAction,
  },
});

export const { ascending, descending } = hotelSlice.actions;

export default hotelSlice.reducer;
