import { useState } from "react";
import Select from "react-select";
import PropTypes, { object } from "prop-types";

const OptionSelector = ({ selectedOption, options }) => {
  const [currentSelectedOption, setCurrentSelectedOption] =
    useState(selectedOption);

  return (
    <Select
      defaultValue={currentSelectedOption}
      onChange={setCurrentSelectedOption}
      options={options}
    />
  );
};

OptionSelector.propTypes = {
  selectedOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};
OptionSelector.defaultProps = {
  selectedOption: "Please Select value",
  options: [],
};
export default OptionSelector;
