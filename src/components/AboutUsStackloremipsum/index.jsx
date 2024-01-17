import React from "react";

import { Img, Text } from "components";

const AboutUsStackloremipsum = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute md:h-[599px] h-[614px] inset-x-[0] mx-auto top-[0] w-full">
          <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 rounded-[43px] w-full">
            <div className="bg-gray-200_02 h-[530px] mb-[7px] rounded-[30px] w-full"></div>
          </div>
          <Img
            className="absolute h-[576px] inset-x-[0] mx-auto object-cover top-[0] w-[81%]"
            src="images/img_portraitofayoung.png"
            alt="portraitofayoun"
          />
        </div>
        <div className="absolute bg-gradient1  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[31px] sm:px-5 rounded-[38px] shadow-bs1 w-[86%]">
          <div className="flex flex-col gap-[9px] items-center justify-start mt-0.5">
            <Text
              className="capitalize sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700"
              size="txtAgrandirTextBold31WhiteA700"
            >
              {props?.loremipsumtext}
            </Text>
            <Text
              className="capitalize text-center text-lg text-white-A700"
              size="txtPoppinsRegular18WhiteA700"
            >
              {props?.designationtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsStackloremipsum.defaultProps = {
  loremipsumtext: "Lorem Ipsum",
  designationtext: "Designation",
};

export default AboutUsStackloremipsum;
