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

const Template = (args) => <OptionSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Options = Template.bind({});
Options.args = {
  options: options,
};
