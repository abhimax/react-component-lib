import React from "react";
import Alert from "./Alert";

export default {
  title: "UI/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const Error = Template.bind({});
Error.args = {
  message: "This is dummy notification message for the testing!",
  type: "error",
};
export const Success = Template.bind({});
Success.args = {
  message: "This is dummy notification message for the testing!",
  type: "success",
};
export const Warning = Template.bind({});
Warning.args = {
  message: "This is dummy notification message for the testing!",
  type: "warning",
};
export const Info = Template.bind({});
Info.args = {
  message: "This is dummy notification message for the testing!",
  type: "info",
};
