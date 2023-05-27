import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  test("renders Loader", () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass("loader-container");
    expect(container.firstChild?.firstChild).toHaveClass("loader-circle");
  });
});
