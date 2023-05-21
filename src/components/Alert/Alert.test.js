import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert", () => {
  test("renders the alert with the default type and message", () => {
    const { getByText } = render(<Alert />);
    const messageElement = getByText("Something is went wrong!");
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass("error");
  });

  test("renders the alert with the provided type and message", () => {
    const message = "This is a success alert!";
    const type = "success";
    const { getByText } = render(<Alert type={type} message={message} />);
    const messageElement = getByText(message);
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass(type);
  });

  test("renders the alert with the child element", () => {
    const { getByTestId } = render(
      <Alert>
        <div data-testid="child-element">Custom Alert</div>
      </Alert>
    );
    const childElement = getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });

  test("calls the closeAlert callback when the close button is clicked", () => {
    const closeAlertMock = jest.fn();
    const { getByTestId } = render(<Alert closeAlert={closeAlertMock} />);
    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(closeAlertMock).toHaveBeenCalledTimes(1);
  });
});
