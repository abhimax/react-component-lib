import { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const OptionSelector = ({ selectedOption, options, isMulti, isSearchable }) => {
  const [currentSelectedOption, setCurrentSelectedOption] =
    useState(selectedOption);

  return (
    <Select
      defaultValue={currentSelectedOption}
      onChange={setCurrentSelectedOption}
      options={options}
      isMulti={isMulti}
      isSearchable={isSearchable}
    />
  );
};

OptionSelector.propTypes = {
  selectedOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
};
OptionSelector.defaultProps = {
  selectedOption: "Please Select value",
  options: [],
  isMulti: false,
  isSearchable: false,
};
export default OptionSelector;
