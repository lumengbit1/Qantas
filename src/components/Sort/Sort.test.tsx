import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";

import Sort from "./Sort";

const mockStore = configureStore([]);
const store = mockStore({});

describe("Sort Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
  });

  it("should NOT have icon by default", async () => {
    const icon = await screen.queryByRole("svg");

    expect(icon).not.toBeInTheDocument();
  });

  it("should return Ascending when clicking on button", () => {
    const sortButton = screen.getByRole("button");

    fireEvent.click(sortButton);

    const icon = screen.getByLabelText("Ascending");

    expect(icon).toBeInTheDocument();
  });

  it("should return Descending when clicking on button", () => {
    const sortButton = screen.getByRole("button");

    fireEvent.click(sortButton);
    fireEvent.click(sortButton);

    const icon = screen.getByLabelText("Descending");

    expect(icon).toBeInTheDocument();
  });
});
