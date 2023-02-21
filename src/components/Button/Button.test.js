import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Button from "./Button";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
// test("<Button> check label text is available", () => {
//   render(<Button label="Click me!" />);
//   const linkElement = screen.getByText("Click me!");
//   expect(linkElement).toBeInTheDocument();
// });

it("<Button> check label text is available", () => {
  act(() => {
    render(<Button label="Click me!" />, container);
  });
  const ButtonContentWrapper = container.querySelector(".content-wrapper");
  expect(ButtonContentWrapper).toBeTruthy();
});

it("<Button> check type primary class available", () => {
  act(() => {
    render(<Button />, container);
    // Simulate.click(container.querySelector("button"));
  });
  expect(container.querySelector(".primary")).toBeTruthy();
});

it("<Button> check type secondary class available", () => {
  act(() => {
    render(<Button type="secondary" />, container);
  });
  expect(container.querySelector(".secondary")).toBeTruthy();
});

it("<Button> check size small class available", () => {
  act(() => {
    render(<Button size="small" />, container);
  });
  expect(container.querySelector(".small")).toBeTruthy();
});

it("<Button> check size medium class available", () => {
  act(() => {
    render(<Button size="medium" />, container);
  });
  expect(container.querySelector(".medium")).toBeTruthy();
});

it("<Button> check size large class available", () => {
  act(() => {
    render(<Button size="large" />, container);
  });
  expect(container.querySelector(".large")).toBeTruthy();
});

it("<Button> check size large class available", () => {
  act(() => {
    render(<Button size="large" />, container);
  });
  expect(container.querySelector(".large")).toBeTruthy();
});
