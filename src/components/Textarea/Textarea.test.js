import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Textarea from "./Textarea";

describe("Textarea", () => {
  test("renders the textarea component with the default props", () => {
    const { getByPlaceholderText } = render(<Textarea />);
    const textareaElement = getByPlaceholderText("Please enter value");
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.value).toBe("");
  });

  test("renders the textarea component with the provided props", () => {
    const placeholder = "Enter your message";
    const value = "Hello, world!";
    const name = "message";
    const { getByPlaceholderText } = render(
      <Textarea placeholder={placeholder} value={value} name={name} />
    );
    const textareaElement = getByPlaceholderText(placeholder);
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.value).toBe(value);
    expect(textareaElement.name).toBe(name);
  });

  test("calls the onChange callback when the textarea value changes", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Textarea onChange={onChangeMock} />
    );
    const textareaElement = getByPlaceholderText("Please enter value");
    const newValue = "New Message";
    fireEvent.change(textareaElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(textareaElement.value).toBe(newValue);
  });

  test("renders the error message when the error prop is provided", () => {
    const errorMessage = "Invalid input";
    const { getByText } = render(<Textarea error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test("disables the textarea when the disabled prop is true", () => {
    const { getByPlaceholderText } = render(<Textarea disabled={true} />);
    const textareaElement = getByPlaceholderText("Please enter value");
    expect(textareaElement).toBeDisabled();
  });
});
