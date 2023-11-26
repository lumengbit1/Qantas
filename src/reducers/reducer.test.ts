import reducer from "./reducer";
import mockData from "../assets/mockData/mock_hotel_data_with_picsum.json";

describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(mockData);
  });
});
