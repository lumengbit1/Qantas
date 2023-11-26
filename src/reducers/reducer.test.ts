import reducer, { sorting } from "./reducer";
import { SortMapping } from "./constants";

import mockData from "../assets/mockData/mock_hotel_data_with_picsum.json";
import expectedData_Ascending from "./mockData/expectedData_Ascending.json";
import expectedData_Descending from "./mockData/expectedData_Descending.json";

describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(mockData);
  });

  it("should return ascending data", () => {
    expect(reducer(mockData, sorting(SortMapping.Ascending))).toEqual(
      expectedData_Ascending
    );
  });

  it("should return descending data", () => {
    expect(reducer(mockData, sorting(SortMapping.Descending))).toEqual(
      expectedData_Descending
    );
  });
});
