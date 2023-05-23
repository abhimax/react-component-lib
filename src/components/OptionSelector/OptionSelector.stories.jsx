import React from "react";
import OptionSelector from "./OptionSelector";

export default {
  title: "UI/OptionSelector",
  component: OptionSelector,
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const optionsGroups = [
  {
    label: "Group 1",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
  {
    label: "Group 2",
    options: [
      { value: "option4", label: "Option 4" },
      { value: "option5", label: "Option 5" },
    ],
  },
];

const Template = (args) => <OptionSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Options = Template.bind({});
Options.args = {
  options: options,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  options: options,
  isMulti: true,
};

export const Searchable = Template.bind({});
Searchable.args = {
  options: options,
  isSearchable: true,
};

export const OptionsGroups = Template.bind({});
OptionsGroups.args = {
  options: optionsGroups,
};
