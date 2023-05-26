import React from "react";
import { Loader } from "./";

export default {
  title: "UI/Loader",
  component: Loader,
};
const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Size50 = Template.bind({});
Size50.args = {
  size: "50px",
};

export const Size100 = Template.bind({});
Size100.args = {
  size: "100px",
};
