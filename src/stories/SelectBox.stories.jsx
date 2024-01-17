import React from "react";

import { SelectBox } from "components";

export default {
  title: "syed_abdul_s_application2/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  variant: "underline",
  color: "gray_400_02",
  size: "xs",
  className: "w-[300px]",
};
