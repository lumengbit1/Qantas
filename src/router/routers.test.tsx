import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import Routers from "./routers";
import { store } from "../store/store";

describe("Routes", () => {
  it("should display mock page when route is /", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routers />
        </MemoryRouter>
      </Provider>
    );

    const expected = screen.getByTestId("home_page");

    expect(expected).toBeInTheDocument();
  });

  it("should display mock page when route is unavailable", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[""]}>
          <Routers />
        </MemoryRouter>
      </Provider>
    );

    const expected = screen.getByTestId("home_page");

    expect(expected).toBeInTheDocument();
  });
});
