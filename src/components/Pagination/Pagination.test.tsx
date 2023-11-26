import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Pagination from "./Pagination";
import { Provider } from "react-redux";
import { store } from "../../store/store";

let mockSearchParam = "";

vi.mock("react-router-dom", async () => {
  const rest = await vi.importActual("react-router-dom");

  return Object.assign({}, rest, {
    useSearchParams: () => {
      const [params, setParams] = useState(
        new URLSearchParams(mockSearchParam)
      );
      return [
        params,
        (newParams: string) => {
          mockSearchParam = newParams;
          setParams(new URLSearchParams(newParams));
        },
      ];
    },
  });
});

describe("Pagination Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Pagination />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  it("should disabled in the pagination_1 button, and prev button is disabled", () => {
    const paginationButton = screen.getByTestId("pagination_1");
    const paginationPrev = screen.getByTestId("pagination_prev");
    const paginationNext = screen.getByTestId("pagination_next");
    expect(paginationButton).toHaveStyle({ "pointer-events": "none" });
    expect(paginationPrev).toHaveAttribute("disabled");
    expect(paginationNext).not.toHaveAttribute("disabled");
  });

  it("should disabled in the pagination_2 button", () => {
    const paginationButton = screen.getByTestId("pagination_2");
    const paginationPrev = screen.getByTestId("pagination_prev");
    const paginationNext = screen.getByTestId("pagination_next");
    fireEvent.click(paginationButton);
    expect(paginationButton).toHaveStyle({ "pointer-events": "none" });
    expect(paginationPrev).not.toHaveAttribute("disabled");
    expect(paginationNext).not.toHaveAttribute("disabled");
    expect(mockSearchParam).toContain({ page: "2" });
  });

  it("should disabled in the pagination_3 button, and next button is disabled", () => {
    const paginationButton = screen.getByTestId("pagination_3");
    const paginationPrev = screen.getByTestId("pagination_prev");
    const paginationNext = screen.getByTestId("pagination_next");
    fireEvent.click(paginationButton);
    expect(paginationButton).toHaveStyle({ "pointer-events": "none" });
    expect(paginationPrev).not.toHaveAttribute("disabled");
    expect(paginationNext).toHaveAttribute("disabled");
    expect(mockSearchParam).toContain({ page: "3" });
  });

  it("should switch to pagination_2 and panigination_3 when clicking on next", () => {
    const paginationButton1 = screen.getByTestId("pagination_1");
    const paginationButton2 = screen.getByTestId("pagination_2");
    const paginationPrev = screen.getByTestId("pagination_prev");
    const paginationNext = screen.getByTestId("pagination_next");

    fireEvent.click(paginationButton1);
    expect(mockSearchParam).toContain({ page: "1" });

    fireEvent.click(paginationNext);
    expect(paginationButton2).toHaveStyle({ "pointer-events": "none" });
    expect(paginationPrev).not.toHaveAttribute("disabled");
    expect(paginationNext).not.toHaveAttribute("disabled");
    expect(mockSearchParam).toContain({ page: "2" });

    const paginationButton3 = screen.getByTestId("pagination_3");
    fireEvent.click(paginationNext);
    expect(paginationButton3).toHaveStyle({ "pointer-events": "none" });
    expect(paginationButton2).toHaveStyle({ "pointer-events": "auto" });
    expect(paginationPrev).not.toHaveAttribute("disabled");
    expect(paginationNext).toHaveAttribute("disabled");
    expect(mockSearchParam).toContain({ page: "3" });
  });

  it("should switch to pagination_2 and panigination_1 when clicking on prev", () => {
    const paginationButton3 = screen.getByTestId("pagination_3");
    const paginationPrev = screen.getByTestId("pagination_prev");
    const paginationNext = screen.getByTestId("pagination_next");

    fireEvent.click(paginationButton3);
    expect(mockSearchParam).toContain({ page: "3" });
    fireEvent.click(paginationPrev);
    const paginationButton2 = screen.getByTestId("pagination_2");
    expect(paginationButton2).toHaveStyle({ "pointer-events": "none" });
    expect(paginationButton3).toHaveStyle({ "pointer-events": "auto" });
    expect(paginationPrev).not.toHaveAttribute("disabled");
    expect(paginationNext).not.toHaveAttribute("disabled");
    expect(mockSearchParam).toContain({ page: "2" });

    const paginationButton1 = screen.getByTestId("pagination_1");
    fireEvent.click(paginationPrev);
    expect(paginationButton1).toHaveStyle({ "pointer-events": "none" });
    expect(paginationButton2).toHaveStyle({ "pointer-events": "auto" });
    expect(paginationPrev).toHaveAttribute("disabled");
    expect(paginationNext).not.toHaveAttribute("disabled");
    expect(mockSearchParam).toContain({ page: "1" });
  });
});
