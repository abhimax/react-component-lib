import React from "react";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Loader from "./Loader";

describe("Loader", () => {
  it("renders Loader", () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass("loader-container");
    expect(container.firstChild?.firstChild).toHaveClass("loader-circle");
  });
  it("renders Loader with different props", () => {
    const { container } = render(<Loader size="40px" />);
    expect(container.firstChild).toHaveStyle("width: 40px; height: 40px;");
    expect(container.firstChild?.firstChild).toHaveStyle(
      "width: calc(40px - 6px); height: calc(40px - 6px);"
    );
  });
  it("Loader renders correctly", () => {
    const tree = TestRenderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Loader styles are applied correctly", () => {
    const { container } = render(<Loader size="50px" />);
    expect(container.firstChild).toHaveStyle("width: 50px; height: 50px;");
    expect(container.firstChild?.firstChild).toHaveStyle(
      "width: calc(50px - 6px); height: calc(50px - 6px);"
    );
  });
});
