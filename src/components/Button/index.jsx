import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[26px]" };
const variants = {
  gradient: {
    indigo_900_indigo_A700: "bg-gradient1  shadow-bs1 text-white-A700",
    green_400_01_green_300: "bg-gradient  shadow-bs text-white-A700",
  },
  fill: {
    indigo_900: "bg-indigo-900",
    gray_200_04: "bg-gray-200_04",
    white_A700: "bg-white-A700 text-blue_gray-900_04",
  },
  outline: {
    gray_400_02: "border border-gray-400_02 border-solid text-blue_gray-900_04",
  },
};
const sizes = {
  xs: "p-2",
  sm: "p-3",
  md: "p-[18px]",
  lg: "p-[21px] sm:px-5",
  xl: "p-[27px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["gradient", "fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_900_indigo_A700",
    "green_400_01_green_300",
    "indigo_900",
    "gray_200_04",
    "white_A700",
    "gray_400_02",
  ]),
};

export { Button };
