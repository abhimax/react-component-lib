import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("renders the input component with the default props", () => {
    const { getByPlaceholderText } = render(<Input />);
    const inputElement = getByPlaceholderText("Please enter value");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  test("renders the input component with the provided props", () => {
    const placeholder = "Enter your name";
    const value = "John Doe";
    const name = "name";
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} value={value} name={name} />
    );
    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(value);
    expect(inputElement.name).toBe(name);
  });

  test("calls the onChange callback when the input value changes", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(<Input onChange={onChangeMock} />);
    const inputElement = getByPlaceholderText("Please enter value");
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe(newValue);
  });

  test("renders the error message when the error prop is provided", () => {
    const errorMessage = "Invalid input";
    const { getByText } = render(<Input error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
