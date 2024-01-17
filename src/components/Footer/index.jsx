import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[31px] mt-[72px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] w-[26%] md:w-full">
                <Img
                  className="h-[63px] sm:h-auto object-cover w-[72%] md:w-full"
                  src="images/img_speedomassfinal.png"
                  alt="speedomassfinal_One"
                />
                <Text
                  className="capitalize mt-[47px] sm:text-[23px] md:text-[25px] text-[27px] text-indigo-900"
                  size="txtAgrandirTextBold27"
                >
                  <>Looking to Get Started?</>
                </Text>
                <Text
                  className="capitalize leading-[189.50%] mt-[25px] text-gray-500 text-lg w-full"
                  size="txtPoppinsRegular18"
                >
                  Ready to get started on your project? Contact us today and let
                  us help you bring your ideas to life.
                </Text>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start md:ml-[0] ml-[102px]">
                <Text
                  className="capitalize sm:text-[23px] md:text-[25px] text-[27px] text-indigo-900"
                  size="txtAgrandirTextBold27"
                >
                  Menu
                </Text>
                <Text
                  className="capitalize leading-[229.00%] text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Home
                    <br />
                    About us
                    <br />
                    Case Study
                    <br />
                    Blogs
                    <br />
                    Career / Job opening
                    <br />
                    Privacy Policy
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-7 items-start justify-start ml-11 md:ml-[0]">
                <Text
                  className="capitalize sm:text-[23px] md:text-[25px] text-[27px] text-indigo-900"
                  size="txtAgrandirTextBold27"
                >
                  Services
                </Text>
                <Text
                  className="capitalize leading-[229.00%] text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Android App Development
                    <br />
                    iOS App Development
                    <br />
                    Web Design & Development
                    <br />
                    Dashboard Design & Development
                    <br />
                    Blockchain Development
                    <br />
                    Artificial Intelligence
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start ml-11 md:ml-[0] w-[22%] md:w-full">
                <Text
                  className="capitalize sm:text-[23px] md:text-[25px] text-[27px] text-indigo-900"
                  size="txtAgrandirTextBold27"
                >
                  Get In touch with us
                </Text>
                <Text
                  className="leading-[229.00%] mt-7 text-gray-500 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Phone: +91 134 123456
                    <br />
                    Email: info@speedomass.com
                  </>
                </Text>
                <Text
                  className="capitalize leading-[161.50%] mt-3.5 text-gray-500 text-lg w-full"
                  size="txtPoppinsRegular18"
                >
                  Location: Location Here Location Here Location Here , India
                </Text>
                <div className="flex flex-row gap-8 items-center justify-center mt-11 w-auto">
                  <Img
                    className="h-7 w-7"
                    src="images/img_bxlfacebook.svg"
                    alt="bxlfacebook"
                  />
                  <Img
                    className="h-7 w-7"
                    src="images/img_basilinstagramoutline.svg"
                    alt="basilinstagramo"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_akariconslinkedinv2fill.svg"
                    alt="akariconslinked"
                  />
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_pajamasx.svg"
                    alt="pajamasx"
                  />
                </div>
              </div>
            </div>
            <Line className="bg-gray-400_01 h-px mt-[43px] w-full" />
            <Text
              className="capitalize mt-[29px] text-[19px] text-center text-gray-500"
              size="txtPoppinsRegular19Gray500"
            >
              Copyright © 2023 speedomass | All rights reserved designed by
              Syed Sameed Ali
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
