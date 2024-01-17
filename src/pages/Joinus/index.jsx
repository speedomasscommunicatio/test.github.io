import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const JoinusPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto w-full">
        <div className="h-[618px] md:px-5 relative w-full">
          <div className="font-poppins sm:h-[319px] h-[350px] md:h-[621px] mb-[-31.36px] ml-auto w-[96%] md:w-full z-[1]">
            <Img
              className="absolute h-[350px] inset-y-[0] my-auto object-cover right-[0] w-[30%]"
              src="images/img_ellipse2_5.png"
              alt="ellipseTwo_One"
            />
            <Img
              className="absolute bottom-[10%] h-[47px] left-[9%] w-[47px]"
              src="images/img_user.svg"
              alt="user"
            />
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[15%] w-[96%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[54px] md:h-auto object-cover"
                      src="images/img_speedomassfinal.png"
                      alt="speedomassfinal"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[51px] items-start justify-start md:mt-0 mt-[5px] w-auto md:w-full">
                      <Text
                        className="capitalize text-[19px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        Home
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        about us
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        Services
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        Case studies
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-black-900 w-auto"
                        size="txtPoppinsRegular19"
                      >
                        Portfolio
                      </Text>
                      <a
                        href="javascript:"
                        className="capitalize text-[19px] text-black-900 w-auto"
                      >
                        <Text size="txtPoppinsRegular19">Contact us</Text>
                      </a>
                    </div>
                    <Button
                      className="capitalize cursor-pointer min-w-[130px] rounded-[21px] text-center text-lg"
                      size="sm"
                      variant="gradient"
                      color="indigo_900_indigo_A700"
                    >
                      Join us
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-100 h-[3px] w-full" />
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[47px] mb-[undefinedpx] ml-auto mr-[400px] mt-auto w-[47px] z-[1]"
            src="images/img_user.svg"
            alt="user_One"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-auto mx-auto w-full">
            <div className="md:h-[229px] h-[299px] relative w-[65%] md:w-full">
              <Text
                className="absolute capitalize right-[9%] md:text-5xl text-[85px] text-center text-indigo-900 top-[0]"
                size="txtAgrandirTextBold85"
              >
                Join us
              </Text>
              <div className="absolute font-poppins h-72 md:h-[229px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[229px] left-[0] object-cover top-[0]"
                  src="images/img_group57.png"
                  alt="groupFiftySeven"
                />
                <Img
                  className="absolute bottom-[0] h-[140px] left-[0] object-cover w-[57%]"
                  src="images/img_ellipse1_12.png"
                  alt="ellipseOne"
                />
                <Text
                  className="absolute capitalize right-[0] text-[19px] text-center text-gray-500 top-[41%]"
                  size="txtPoppinsRegular19Gray500"
                >
                  Any question or remarks? Just write us a message!
                </Text>
              </div>
            </div>
            <div className="h-[139px] md:mt-0 mt-40 relative w-[8%] md:w-full">
              <Img
                className="h-[139px] m-auto object-cover w-full"
                src="images/img_ellipse1_13.png"
                alt="ellipseOne_One"
              />
              <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                <Img
                  className="h-[123px] m-auto object-cover w-full"
                  src="images/img_ellipse2_4.png"
                  alt="ellipseTwo"
                />
                <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                  <Img
                    className="h-[108px] m-auto object-cover w-full"
                    src="images/img_ellipse3_2.png"
                    alt="ellipseThree"
                  />
                  <Img
                    className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                    src="images/img_ellipse4_2.png"
                    alt="ellipseFour"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1570px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="capitalize sm:text-[29px] md:text-[31px] text-[33px] text-yellow-700"
              size="txtAgrandirRegular33"
            >
              Benefits
            </Text>
            <Text
              className="capitalize mt-[11px] sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
              size="txtAgrandirTextBold53"
            >
              <>
                Why you Should Join Our
                <br />
                Awesome Team
              </>
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[33px] text-[19px] text-gray-500 text-justify w-full"
              size="txtPoppinsRegular19Gray500"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500sLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s
              </>
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[53px] text-[19px] text-gray-500 text-justify w-full"
              size="txtPoppinsRegular19Gray500"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500sLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s
              </>
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[34px] items-center justify-start mb-[53px] sm:ml-[0] w-full">
                <div className="bg-gradient1  flex flex-col h-[336px] items-start justify-center p-[33px] sm:px-5 rounded-[26px] shadow-bs1 w-[336px]">
                  <Img
                    className="h-[38px] mt-5 w-[38px]"
                    src="images/img_television_white_a700_38x38.svg"
                    alt="television"
                  />
                  <Text
                    className="capitalize mt-[19px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtAgrandirTextBold26"
                  >
                    Team Work
                  </Text>
                  <Text
                    className="capitalize leading-[170.50%] mb-[21px] ml-0.5 md:ml-[0] mt-[17px] text-justify text-sm text-white-A700 w-[99%] sm:w-full"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col h-[336px] items-start justify-center p-[35px] sm:px-5 rounded-[42px] shadow-bs6 w-[336px]">
                  <Img
                    className="h-[46px] mt-4"
                    src="images/img_settings_yellow_700.svg"
                    alt="settings"
                  />
                  <Text
                    className="capitalize mt-[23px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    Learning Opportunity
                  </Text>
                  <Text
                    className="capitalize leading-[170.50%] my-[13px] text-gray-500 text-justify text-sm w-full"
                    size="txtPoppinsRegular14Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[34px] items-center justify-start sm:ml-[0] sm:mt-0 mt-[53px] w-full">
                <div className="bg-white-A700 flex flex-col h-[336px] items-start justify-center p-[35px] sm:px-5 rounded-[42px] shadow-bs6 w-[336px]">
                  <Img
                    className="h-[38px] mt-[19px] w-[38px]"
                    src="images/img_settings_yellow_700_38x38.svg"
                    alt="settings"
                  />
                  <Text
                    className="capitalize mt-[26px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    Secured Future
                  </Text>
                  <Text
                    className="capitalize leading-[170.50%] mb-[11px] mt-[17px] text-gray-500 text-justify text-sm w-full"
                    size="txtPoppinsRegular14Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col h-[336px] items-start justify-center p-[35px] sm:px-5 rounded-[42px] shadow-bs6 w-[336px]">
                  <Img
                    className="h-[35px] mt-6"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="capitalize mt-[26px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    Upgrade Skills
                  </Text>
                  <Text
                    className="capitalize leading-[170.50%] mb-[11px] mt-3.5 text-gray-500 text-justify text-sm w-full"
                    size="txtPoppinsRegular14Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-indigo-900_05 flex flex-col items-center justify-start mt-[130px] p-[75px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1309px] mb-[21px] mx-auto w-full">
            <Text
              className="capitalize sm:text-[29px] md:text-[31px] text-[33px] text-center text-yellow-700"
              size="txtAgrandirRegular33"
            >
              Come join us
            </Text>
            <Text
              className="capitalize mt-2.5 sm:text-[39px] md:text-[45px] text-[53px] text-center text-indigo-900"
              size="txtAgrandirTextBold53"
            >
              Career Openings
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[33px] text-[19px] text-center text-gray-500 w-[63%] sm:w-full"
              size="txtPoppinsRegular19Gray500"
            >
              <>
                We’re always looking for creative, talented self-starters to
                join the Speedomassfamily. Check out our open roles below and
                fill out an application.
              </>
            </Text>
            <div className="flex md:flex-col flex-row font-poppins gap-[34px] items-start justify-between mt-[63px] w-full">
              <div className="border-2 border-blue_gray-100_06 border-solid flex md:flex-1 flex-col items-start justify-start p-[46px] md:px-10 sm:px-5 rounded-[40px] w-[29%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[38px]">
                  <Text
                    className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                    size="txtPoppinsRegular21"
                  >
                    HT & Admin
                  </Text>
                  <Text
                    className="capitalize mt-[26px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                    size="txtPoppinsSemiBold21"
                  >
                    Engineering (20)
                  </Text>
                  <a
                    href="javascript:"
                    className="capitalize mt-[27px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                  >
                    <Text size="txtPoppinsRegular21">Support</Text>
                  </a>
                  <Text
                    className="capitalize mt-6 sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                    size="txtPoppinsRegular21"
                  >
                    DEsign
                  </Text>
                  <Text
                    className="capitalize mt-[25px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                    size="txtPoppinsRegular21"
                  >
                    Digital Marketing
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-[30px] w-[69%]"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-end my-0 p-4 rounded-[31px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1.5 w-[96%] md:w-full">
                    <Text
                      className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                      size="txtPoppinsSemiBold21"
                    >
                      Wordpress Developer
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[94px] w-[43%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-[76%] md:w-full">
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Experience
                        </Text>
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Deadline
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          2 Years
                        </Text>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          30 Dec, 2023
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-4 md:ml-[0] ml-[125px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end my-0 p-4 rounded-[31px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1.5 w-[96%] md:w-full">
                    <Text
                      className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                      size="txtPoppinsSemiBold21"
                    >
                      Javascript
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[210px] w-[43%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-[76%] md:w-full">
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Experience
                        </Text>
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Deadline
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          2 Years
                        </Text>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          30 Dec, 2023
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-4 md:ml-[0] ml-[125px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end my-0 p-4 rounded-[31px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1.5 w-[96%] md:w-full">
                    <Text
                      className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                      size="txtPoppinsSemiBold21"
                    >
                      App Developer
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[167px] w-[43%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-[76%] md:w-full">
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Experience
                        </Text>
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Deadline
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          2 Years
                        </Text>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          30 Dec, 2023
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-4 md:ml-[0] ml-[125px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end my-0 p-4 rounded-[31px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-1.5 w-[96%] md:w-full">
                    <Text
                      className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-900"
                      size="txtPoppinsSemiBold21"
                    >
                      Node JS Developer
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-between w-[76%] md:w-full">
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Experience
                        </Text>
                        <Text
                          className="capitalize text-[15px] text-gray-500"
                          size="txtPoppinsRegular15"
                        >
                          Deadline
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          2 Years
                        </Text>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                          size="txtPoppinsSemiBold24"
                        >
                          30 Dec, 2023
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-4"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default JoinusPage;
