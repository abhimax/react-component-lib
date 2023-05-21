import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OptionSelector from "./OptionSelector";

describe("OptionSelector", () => {
  test("renders the OptionSelector component with the default props", () => {
    const { getByText } = render(<OptionSelector />);
    const placeholderElement = getByText("Please Select value");
    expect(placeholderElement).toBeInTheDocument();
  });

  test("renders the OptionSelector component with the provided props", () => {
    const selectedOption = { value: "option1", label: "Option 1" };
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];
    const { getByText } = render(
      <OptionSelector
        selectedOption={selectedOption}
        options={options}
        isMulti={true}
        isSearchable={true}
      />
    );
    const optionElement = getByText(selectedOption.label);
    expect(optionElement).toBeInTheDocument();
  });
});
