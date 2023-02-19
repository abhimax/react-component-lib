import React from "react";
//import { Back } from "../Icon";
import StarRating from "./StarRating";

export default {
  title: "UI/StarRating",
  component: StarRating,
};
const Template = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const Rating2 = Template.bind({});
Rating2.args = {
  rating: 2,
};
export const Rating5 = Template.bind({});
Rating5.args = {
  rating: 5,
};
export const Rating10 = Template.bind({});
Rating10.args = {
  rating: 10,
};
export const Rating3point2 = Template.bind({});
Rating3point2.args = {
  rating: 3.2,
};
export const Rating3point5 = Template.bind({});
Rating3point5.args = {
  rating: 3.5,
};

export const Rating3point8 = Template.bind({});
Rating3point8.args = {
  rating: 3.8,
};
