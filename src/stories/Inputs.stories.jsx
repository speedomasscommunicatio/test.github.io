import React from "react";

import { Input } from "components";

export default {
  title: "syed_abdul_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  color: "white_A700",
  size: "xs",
  shape: "CircleBorder41",
  variant: "underline",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
