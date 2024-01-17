import React from "react";

const sizeClasses = {
  txtAgrandirTextBold61: "font-agrandir font-bold",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtAgrandirTextBold23: "font-agrandir font-bold",
  txtAgrandirTextBold22: "font-agrandir font-bold",
  txtAgrandirTextBold27: "font-agrandir font-bold",
  txtAgrandirTextBold26: "font-agrandir font-bold",
  txtAgrandirRegular41: "font-agrandir font-normal",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsRegular19WhiteA700: "font-normal font-poppins",
  txtAgrandirTextBold30Indigo900: "font-agrandir font-bold",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtPoppinsSemiBold19: "font-poppins font-semibold",
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtAgrandirRegular33: "font-agrandir font-normal",
  txtAgrandirTextBold53: "font-agrandir font-bold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular19: "font-normal font-poppins",
  txtAgrandirTextBold22Indigo900: "font-agrandir font-bold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtAgrandirTextBold18: "font-agrandir font-bold",
  txtRubikRegular17: "font-normal font-rubik",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtAgrandirRegular30: "font-agrandir font-normal",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtPoppinsRegular21: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsSemiBold26: "font-poppins font-semibold",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold21: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular14Gray500: "font-normal font-poppins",
  txtAgrandirTextBold92: "font-agrandir font-bold",
  txtAgrandirTextBold85: "font-agrandir font-bold",
  txtAgrandirRegular22: "font-agrandir font-normal",
  txtPoppinsRegular16Yellow700: "font-normal font-poppins",
  txtRobotoRomanRegular106: "font-normal font-roboto",
  txtAgrandirTextBold35Indigo900: "font-agrandir font-bold",
  txtAgrandirRegular33Indigo900: "font-agrandir font-normal",
  txtPoppinsMedium17: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtAgrandirRegular14: "font-agrandir font-normal",
  txtAgrandirTextBold30: "font-agrandir font-bold",
  txtAgrandirTextBold32: "font-agrandir font-bold",
  txtAgrandirTextBold31: "font-agrandir font-bold",
  txtPoppinsRegular19Gray500: "font-normal font-poppins",
  txtAgrandirTextBold34: "font-agrandir font-bold",
  txtAgrandirTextBold33: "font-agrandir font-bold",
  txtAgrandirTextBold35: "font-agrandir font-bold",
  txtAgrandirTextBold31WhiteA700: "font-agrandir font-bold",
  txtAgrandirTextBold26Indigo900: "font-agrandir font-bold",
  txtPoppinsRegular20Gray500: "font-normal font-poppins",
  txtAgrandirTextBold53WhiteA700: "font-agrandir font-bold",
  txtPoppinsRegular17Gray90005: "font-normal font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
