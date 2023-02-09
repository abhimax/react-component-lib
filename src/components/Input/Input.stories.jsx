import React from 'react';
import  Input  from './Input';

export default {
  title: 'UI/Input',
  component: Input,
};
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Label = Template.bind({});
Label.args = {
  label:"Input Label",
};

export const Name = Template.bind({});
Name.args = {
  name:"Name",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  name:"Name",
  placeholder:"Placeholder"
};

export const typeNumber = Template.bind({});
typeNumber.args = {
  name:"Name",
  placeholder:"Enter Amount",
  type: "number"
};

export const typePassword = Template.bind({});
typePassword.args = {
  name:"Name",
  placeholder:"Enter Password",
  type: "password"
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  size:"medium",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  size:"large",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  size:"small",
};

export const Error = Template.bind({});
Error.args = {
  name:"Name",
  error:"Something went wrong bla bla...."
};