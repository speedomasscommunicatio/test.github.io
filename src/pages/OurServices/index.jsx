import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const OurServicesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto w-full">
        <div className="h-[618px] md:px-5 relative w-full">
          <div className="font-poppins sm:h-[319px] h-[350px] md:h-[621px] mb-[-31.36px] ml-auto w-[96%] md:w-full z-[1]">
            <Img
              className="absolute h-[350px] inset-y-[0] my-auto object-cover right-[0] w-[30%]"
              src="images/img_ellipse2_1.png"
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
                        size="txtPoppinsSemiBold19"
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
            <div className="md:h-[229px] h-[299px] relative w-[66%] md:w-full">
              <Text
                className="absolute capitalize right-[0] md:text-5xl text-[85px] text-center text-indigo-900 top-[0]"
                size="txtAgrandirTextBold85"
              >
                Our Services
              </Text>
              <div className="absolute h-72 md:h-[229px] inset-y-[0] left-[0] my-auto w-[56%] md:w-full">
                <Img
                  className="absolute h-[229px] left-[0] object-cover top-[0]"
                  src="images/img_group57.png"
                  alt="groupFiftySeven"
                />
                <Img
                  className="absolute bottom-[0] h-[140px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_ellipse1_1.png"
                  alt="ellipseOne"
                />
              </div>
            </div>
            <div className="h-[139px] md:mt-0 mt-40 relative w-[8%] md:w-full">
              <Img
                className="h-[139px] m-auto object-cover w-full"
                src="images/img_ellipse1_2.png"
                alt="ellipseOne_One"
              />
              <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                <Img
                  className="h-[123px] m-auto object-cover w-full"
                  src="images/img_ellipse2_123x120.png"
                  alt="ellipseTwo"
                />
                <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                  <Img
                    className="h-[108px] m-auto object-cover w-full"
                    src="images/img_ellipse3_108x105.png"
                    alt="ellipseThree"
                  />
                  <Img
                    className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                    src="images/img_ellipse4_91x88.png"
                    alt="ellipseFour"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1602px] mt-[110px] mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="bg-gradient1  hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[38px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
              <div className="flex flex-col gap-[29px] items-start justify-start mb-[15px] w-full">
                <div className="flex sm:flex-col flex-row font-agrandir gap-[30px] items-center justify-start w-[92%] md:w-full">
                  <div className="bg-white-A700_5e flex flex-col items-center justify-start p-[18px] rounded-[57px] w-[113px] sm:w-full">
                    <Img
                      className="h-[77px] w-[76px]"
                      src="images/img_carbonapplicationmobile.svg"
                      alt="carbonapplicati"
                    />
                  </div>
                  <Text
                    className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                    size="txtAgrandirTextBold35"
                  >
                    <span className="text-white-A700 font-agrandir text-left font-normal">
                      <>
                        Mobile App
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-agrandir text-left font-bold">
                      Development
                    </span>
                  </Text>
                </div>
                <Text
                  className="capitalize leading-[189.50%] text-justify text-white-A700 text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </>
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:shadow-bs4 hover:w-full w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-agrandir gap-[29px] items-center justify-start w-[93%] md:w-full">
                    <div className="bg-gradient1  flex flex-col items-center justify-start p-[18px] rounded-[51px] shadow-bs5 w-[101px] sm:w-full">
                      <Img
                        className="h-[63px] w-[62px]"
                        src="images/img_fluentmdl2website.svg"
                        alt="fluentmdl2websi"
                      />
                    </div>
                    <Text
                      className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtAgrandirTextBold35Indigo900"
                    >
                      <>
                        Web
                        <br />
                        Development
                      </>
                    </Text>
                  </div>
                  <Text
                    className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:shadow-bs4 hover:w-full w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-agrandir gap-[29px] items-center justify-start w-[93%] md:w-full">
                    <div className="bg-gradient1  flex flex-col items-center justify-start p-5 rounded-[51px] shadow-bs5 w-[101px] sm:w-full">
                      <Img
                        className="h-[59px] w-[59px]"
                        src="images/img_simpleiconsbackendless.svg"
                        alt="simpleiconsback"
                      />
                    </div>
                    <Text
                      className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtAgrandirTextBold35Indigo900"
                    >
                      <>
                        Backend
                        <br />
                        Development
                      </>
                    </Text>
                  </div>
                  <Text
                    className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:shadow-bs4 hover:w-full w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-agrandir gap-[29px] items-center justify-start w-[93%] md:w-full">
                    <div className="bg-gradient1  flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[51px] shadow-bs5 w-[101px] sm:w-full">
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_bxsdashboard.svg"
                        alt="bxsdashboard"
                      />
                    </div>
                    <Text
                      className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtAgrandirTextBold35Indigo900"
                    >
                      <>
                        Dashboard
                        <br />
                        Designs
                      </>
                    </Text>
                  </div>
                  <Text
                    className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:shadow-bs4 hover:w-full w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-agrandir gap-[29px] items-center justify-start w-[93%] md:w-full">
                    <div className="bg-gradient1  flex flex-col items-center justify-end p-5 rounded-[51px] shadow-bs5 w-[101px] sm:w-full">
                      <Img
                        className="h-[58px] mt-[3px] w-[58px]"
                        src="images/img_gameiconsarti.svg"
                        alt="gameiconsarti"
                      />
                    </div>
                    <Text
                      className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900 w-[66%] sm:w-full"
                      size="txtAgrandirTextBold35Indigo900"
                    >
                      Artificial Intelligence
                    </Text>
                  </div>
                  <Text
                    className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:shadow-bs4 hover:w-full w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-agrandir gap-[29px] items-center justify-start w-[93%] md:w-full">
                    <div className="bg-gradient1  flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[51px] shadow-bs5 w-[101px] sm:w-full">
                      <Img
                        className="h-[54px] w-[54px]"
                        src="images/img_television_white_a700.svg"
                        alt="television"
                      />
                    </div>
                    <Text
                      className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtAgrandirTextBold35Indigo900"
                    >
                      <>
                        Blockchain <br />
                        Development
                      </>
                    </Text>
                  </div>
                  <Text
                    className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1404px] h-[653px] sm:h-[783px] max-w-[1560px] mt-[130px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[653px] m-auto object-cover rounded-[87px] w-full"
            src="images/img_rectangle11_653x1560.png"
            alt="rectangleEleven"
          />
          <div className="absolute flex md:flex-col flex-row gap-[50px] h-max inset-[0] items-center justify-center m-auto w-[91%]">
            <div className="flex flex-col items-start justify-start w-[45%] md:w-full">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-white-A700"
                size="txtAgrandirTextBold53WhiteA700"
              >
                Tech & Efficiency Focus
              </Text>
              <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between md:ml-[0] ml-[5px] mt-[34px] w-full">
                <div className="bg-white-A700_5e flex flex-col h-[104px] items-center justify-start mb-1.5 p-6 sm:px-5 rounded-[50%] w-[104px]">
                  <Img
                    className="h-[54px] mb-0.5 w-[54px]"
                    src="images/img_television_white_a700_54x54.svg"
                    alt="television"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtAgrandirTextBold30"
                  >
                    Strategy & Business
                  </Text>
                  <Text
                    className="capitalize leading-[189.50%] text-lg text-white-A700 w-full"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    We design business models and growth strategies to be
                    effective and competitive.
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-between md:ml-[0] ml-[5px] mt-8 w-[98%] md:w-full">
                <div className="bg-white-A700_5e flex flex-col h-[104px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[104px]">
                  <Img
                    className="h-[42px] w-[42px]"
                    src="images/img_thumbsup_white_a700.svg"
                    alt="thumbsup"
                  />
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start sm:mt-0 mt-2">
                  <Text
                    className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtAgrandirTextBold30"
                  >
                    Product Development
                  </Text>
                  <Text
                    className="capitalize text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    Innovative product development for the modern age.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between md:ml-[0] ml-[5px] mt-[37px] w-full">
                <div className="bg-white-A700_5e flex flex-col h-[104px] items-center justify-start mb-1.5 p-6 sm:px-5 rounded-[50%] w-[104px]">
                  <Img
                    className="h-[54px] mb-0.5 w-[54px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtAgrandirTextBold30"
                  >
                    Futures Research
                  </Text>
                  <Text
                    className="capitalize leading-[189.50%] mt-1 text-lg text-white-A700 w-full"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    Exploring the possibilities of tomorrow through Futures
                    Research.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[456px] sm:h-auto object-cover rounded-[19px] w-[52%] md:w-full"
              src="images/img_dashboardfinal.png"
              alt="dashboardfinal"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-start justify-start max-w-[1567px] mt-[129px] mx-auto md:px-5 w-full">
          <Text
            className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
            size="txtAgrandirTextBold53"
          >
            <>Let&#39;s build long-lasting software together</>
          </Text>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-end justify-between ml-1 md:ml-[0] w-full">
            <div className="flex md:flex-1 flex-col gap-[46px] items-center justify-start md:mt-0 mt-[11px] w-[7%] md:w-full">
              <div className="h-[103px] md:h-[91px] relative w-4/5">
                <div className="h-[103px] md:h-[91px] m-auto w-full">
                  <Img
                    className="absolute h-[91px] inset-x-[0] mx-auto top-[0]"
                    src="images/img_television.svg"
                    alt="television_One"
                  />
                  <Img
                    className="absolute bottom-[0] h-7 right-[0]"
                    src="images/img_television_indigo_900.svg"
                    alt="television_Two"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[12%] flex flex-col h-8 items-end justify-end left-[28%] w-8"
                  style={{
                    backgroundImage:
                      "url('images/img_thumbsup_yellow_700.svg')",
                  }}
                >
                  <Img
                    className="h-3.5 md:h-auto mt-4 object-cover w-3.5"
                    src="images/img_vector_14x14.png"
                    alt="vector"
                  />
                </div>
              </div>
              <Text
                className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                size="txtPoppinsSemiBold26"
              >
                FLUTTER
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-10 items-center justify-start md:mt-0 mt-1.5 w-[9%] md:w-full">
              <Img
                className="h-[114px]"
                src="images/img_vector_indigo_900_114x128.svg"
                alt="vector_One"
              />
              <Text
                className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                size="txtPoppinsSemiBold26"
              >
                REACT.JS
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[38px] items-center justify-start md:mt-0 mt-1 w-[8%] md:w-full">
              <Img
                className="h-[118px] w-[118px]"
                src="images/img_group_black_900.svg"
                alt="group"
              />
              <Text
                className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                size="txtPoppinsSemiBold26"
              >
                PYTHON
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[33px] items-center justify-start w-[9%] md:w-full">
              <div className="h-[127px] relative w-[127px]">
                <Img
                  className="h-[98px] ml-2.5"
                  src="images/img_user_indigo_900.svg"
                  alt="user_Two"
                />
                <Img
                  className="absolute h-[127px] inset-[0] justify-center m-auto w-[127px]"
                  src="images/img_akariconsdjangofill.svg"
                  alt="akariconsdjango"
                />
              </div>
              <Text
                className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                size="txtPoppinsSemiBold26"
              >
                DJANGO
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-9 items-center justify-start md:mt-0 mt-0.5 w-[9%] md:w-full">
              <Img
                className="h-[121px] w-[121px]"
                src="images/img_teenyiconsangularsolid.svg"
                alt="teenyiconsangul"
              />
              <Text
                className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                size="txtPoppinsSemiBold26"
              >
                ANGULAR
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1555px] mt-[138px] mx-auto md:px-5 w-full">
          <Text
            className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
            size="txtAgrandirTextBold53"
          >
            Frequently asked questions
          </Text>
          <Text
            className="capitalize mt-4 text-gray-500 text-xl"
            size="txtPoppinsRegular20Gray500"
          >
            We hope this section will help you better understand the issues
            related to software
          </Text>
          <div className="flex flex-col font-agrandir gap-8 items-center justify-start mt-[61px] w-full">
            <div className="md:h-[302px] h-[99px] relative w-full">
              <div className="absolute border-[3px] border-blue_gray-100_03 border-solid h-[99px] inset-y-[0] left-[0] my-auto rounded-[24px] w-[49%]"></div>
              <div className="border-[3px] border-blue_gray-100_03 border-solid flex md:flex-col flex-row gap-[17px] h-full items-center justify-center ml-auto my-auto p-[21px] sm:px-5 rounded-[24px] w-[49%]">
                <Img
                  className="h-[42px] mb-[15px] ml-3 md:ml-[0] w-[42px]"
                  src="images/img_pepiconspopplus.svg"
                  alt="pepiconspopplus"
                />
                <Text
                  className="capitalize mr-[63px] sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                  size="txtAgrandirTextBold23"
                >
                  Do you have any reviews from satisfied customers?
                </Text>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-[57px] h-full inset-[0] items-center justify-between m-auto w-full">
                <div className="border-[3px] border-gray-100_01 border-solid flex md:flex-1 sm:flex-col flex-row gap-[17px] items-center justify-start p-[22px] sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <Img
                    className="h-[42px] mb-[13px] sm:ml-[0] ml-[9px] w-[42px]"
                    src="images/img_pepiconspopplus.svg"
                    alt="pepiconspopplus_One"
                  />
                  <Text
                    className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                    size="txtAgrandirTextBold23"
                  >
                    What do I need to know before contacting you?
                  </Text>
                </div>
                <div className="border-[3px] border-gray-100_01 border-solid flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-center p-[21px] sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <Img
                    className="h-[42px] mb-[15px] ml-3 md:ml-[0] w-[42px]"
                    src="images/img_pepiconspopplus.svg"
                    alt="pepiconspopplus_Two"
                  />
                  <Text
                    className="capitalize mr-[63px] sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                    size="txtAgrandirTextBold23"
                  >
                    Do you have any reviews from satisfied customers?
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[57px] items-center justify-between w-full">
                <div className="border-[3px] border-gray-100_01 border-solid flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-start p-[21px] sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <Img
                    className="h-[42px] ml-2.5 md:ml-[0] md:mt-0 mt-[15px] w-[42px]"
                    src="images/img_pepiconspopplus.svg"
                    alt="pepiconspopplus_Three"
                  />
                  <Text
                    className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                    size="txtAgrandirTextBold23"
                  >
                    How much time will it take for you to make my app?
                  </Text>
                </div>
                <div className="border-[3px] border-gray-100_01 border-solid flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-center p-7 sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <Img
                    className="h-[42px] md:ml-[0] ml-[5px] w-[42px]"
                    src="images/img_pepiconspopplus.svg"
                    alt="pepiconspopplus_Four"
                  />
                  <Text
                    className="capitalize mr-48 sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                    size="txtAgrandirTextBold23"
                  >
                    How do you guarantee product quality?
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[57px] items-start justify-between w-full">
                <div className="border-[3px] border-gray-100_01 border-solid flex md:flex-1 sm:flex-col flex-row gap-[17px] items-center justify-start p-[21px] sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <Img
                    className="h-[42px] ml-2.5 sm:ml-[0] sm:mt-0 mt-[15px] w-[42px]"
                    src="images/img_pepiconspopplus.svg"
                    alt="pepiconspopplus_Five"
                  />
                  <Text
                    className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                    size="txtAgrandirTextBold23"
                  >
                    Should I create a mobile or a web app?
                  </Text>
                </div>
                <div className="border-[3px] border-gray-100_01 border-solid flex md:flex-1 flex-col items-start justify-start p-[29px] sm:px-5 rounded-[24px] w-[49%] md:w-full">
                  <div className="flex flex-col gap-[21px] justify-start mb-2 ml-1 md:ml-[0] w-[94%] md:w-full">
                    <div className="flex sm:flex-col flex-row font-agrandir gap-[17px] items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_pepiconspopplus.svg"
                        alt="pepiconspopplus_Six"
                      />
                      <Text
                        className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
                        size="txtAgrandirTextBold23"
                      >
                        What happens after you finish my app?
                      </Text>
                    </div>
                    <Text
                      className="capitalize leading-[189.50%] md:ml-[0] ml-[59px] text-gray-500 text-xl w-[91%] sm:w-full"
                      size="txtPoppinsRegular20Gray500"
                    >
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default OurServicesPage;
