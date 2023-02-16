import React from 'react';
import  Textarea  from './Textarea';

export default {
  title: 'UI/Textarea',
  component: Textarea,
};
const Template = (args) => <Textarea {...args} />;

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

export const Disabled = Template.bind({});
Disabled.args = {
  name:"Name",
  disabled:true
};