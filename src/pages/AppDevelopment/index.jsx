import React from "react";

import { Button, Img, Line, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";

const AppDevelopmentPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-6 items-center justify-end mx-auto pt-[52px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1578px] mx-auto md:px-5 w-full">
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
        <div className="font-agrandir overflow-x-auto w-full">
          <div className="flex flex-col items-end justify-start overflow-auto w-full">
            <div
              className="bg-cover bg-no-repeat flex md:h-[1076px] sm:h-[713px] h-[755px] justify-end pr-[41px] pt-[41px] md:px-5 relative w-full"
              style={{ backgroundImage: "url('images/img_banner.png')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between mt-auto w-[92%]">
                <div className="md:h-[572px] h-[654px] md:mt-0 mt-[59px] relative w-[62%] md:w-full">
                  <div className="absolute bottom-[0] h-[572px] left-[0] w-[78%] md:w-full">
                    <Img
                      className="h-[572px] m-auto object-cover w-full"
                      src="images/img_ellipse1_572x755.png"
                      alt="ellipseOne"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[289px] items-start justify-start right-[3%] top-[1%] w-[87%]">
                      <Text
                        className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-yellow-700"
                        size="txtAgrandirRegular41"
                      >
                        Master App Development with Us
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-poppins min-w-[253px] text-[22px] text-center sm:text-lg md:text-xl"
                        shape="round"
                        size="md"
                        variant="gradient"
                        color="indigo_900_indigo_A700"
                      >
                        Discover More
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="absolute capitalize h-max inset-y-[0] leading-[189.50%] my-auto right-[0] text-gray-500 text-justify text-lg w-[92%] sm:w-full"
                    size="txtPoppinsRegular18"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </>
                  </Text>
                  <Text
                    className="absolute capitalize inset-x-[0] mx-auto md:text-5xl text-[92px] text-indigo-900 top-[21%] w-max"
                    size="txtAgrandirTextBold92"
                  >
                    Get Started Today!
                  </Text>
                  <Img
                    className="absolute h-[47px] right-[36%] top-[6%] w-[47px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img
                    className="absolute h-[47px] left-[22%] top-[0] w-[47px]"
                    src="images/img_user.svg"
                    alt="user_One"
                  />
                </div>
                <div className="md:h-[464px] h-[473px] p-1 relative rotate-[-15deg] w-1/5 md:w-full">
                  <Img
                    className="h-[464px] m-auto object-cover w-[97%]"
                    src="images/img_iphone12pro_464x304.png"
                    alt="iphone12pro"
                  />
                  <Img
                    className="absolute h-[442px] inset-[0] justify-center m-auto object-cover w-[89%]"
                    src="images/img_screeniphone12_442x279.png"
                    alt="screeniphoneTwelve"
                  />
                </div>
              </div>
              <div className="absolute bottom-[5%] md:h-[573px] h-[582px] p-1 right-[18%] rotate-[15deg] shadow-bs9 w-[23%] sm:w-full">
                <Img
                  className="h-[573px] m-auto object-cover w-[92%]"
                  src="images/img_iphone12pro_573x355.png"
                  alt="iphone12pro_One"
                />
                <Img
                  className="absolute h-[545px] inset-[0] justify-center m-auto object-cover w-[83%]"
                  src="images/img_screeniphone12_545x320.png"
                  alt="screeniphoneTwelve_One"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[69px] items-start justify-start max-w-[1570px] mt-[63px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                We Provide Various Kind Of Services For You
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start p-3 rounded-[44px] w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-end p-[15px] w-[67%] md:w-full">
                    <div className="md:h-[124px] h-[143px] mt-[18px] relative w-[64%]">
                      <div className="absolute md:h-24 h-[133px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute md:h-24 h-[121px] inset-[0] justify-center m-auto w-full">
                          <div className="md:h-24 h-[121px] m-auto w-full">
                            <div className="md:h-24 h-[121px] m-auto w-full">
                              <div className="md:h-24 h-[121px] m-auto w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                                  <div className="md:h-[37px] h-[42px] md:ml-[0] ml-[3px] relative w-[87%]">
                                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[94%]">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="flex flex-row items-end justify-between w-full">
                                          <Img
                                            className="h-[25px]"
                                            src="images/img_settings_blue_gray_100_04.svg"
                                            alt="settings"
                                          />
                                          <Img
                                            className="h-4 mt-2"
                                            src="images/img_twistedleaf.svg"
                                            alt="twistedleaf"
                                          />
                                        </div>
                                        <Img
                                          className="h-[9px] md:ml-[0] ml-[9px] mt-[3px]"
                                          src="images/img_fill16.svg"
                                          alt="fillSixteen"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[0] h-[26px] right-[1%]"
                                      src="images/img_fill10.svg"
                                      alt="fillTen"
                                    />
                                    <Img
                                      className="absolute h-2.5 left-[0] top-[33%]"
                                      src="images/img_leavetheleaf.svg"
                                      alt="leavetheleaf"
                                    />
                                  </div>
                                  <Img
                                    className="h-[59px]"
                                    src="images/img_clippathgroup.svg"
                                    alt="clippathgroup"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[65px] left-[22%] top-[0]"
                                  src="images/img_megaphone.svg"
                                  alt="megaphone"
                                />
                              </div>
                              <Img
                                className="absolute h-[65px] left-[24%] top-[4%]"
                                src="images/img_mobile32.svg"
                                alt="mobileThirtyTwo"
                              />
                            </div>
                            <Img
                              className="absolute h-[75px] right-[22%] top-[9%]"
                              src="images/img_thumbsup_gray_100_01.svg"
                              alt="thumbsup"
                            />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[21%] flex flex-col h-[47px] items-start justify-start p-0.5 right-[11%] w-[16%]"
                            style={{
                              backgroundImage: "url('images/img_group87.svg')",
                            }}
                          >
                            <Img
                              className="h-[13px] mb-[11px] mt-[19px]"
                              src="images/img_settings_teal_200.svg"
                              alt="settings_One"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[60px] left-[2%]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                        <Img
                          className="absolute h-3 right-1/4 top-[0] w-[13px]"
                          src="images/img_graph.svg"
                          alt="graph"
                        />
                        <Img
                          className="absolute h-2 inset-y-[0] left-[9%] my-auto w-2"
                          src="images/img_piechart.svg"
                          alt="piechart"
                        />
                        <div className="absolute bottom-[18%] flex flex-col gap-[15px] justify-start right-[10%] w-[21%]">
                          <Img
                            className="h-[13px] ml-6 md:ml-[0] w-[13px]"
                            src="images/img_settings_gray_100_01.svg"
                            alt="settings_Two"
                          />
                          <Img
                            className="h-5 mr-1.5"
                            src="images/img_television_gray_300_01.svg"
                            alt="television"
                          />
                        </div>
                        <Img
                          className="absolute h-2.5 right-[34%] top-[2%] w-2.5"
                          src="images/img_settings_gray_100_01.svg"
                          alt="settings_Three"
                        />
                        <Img
                          className="absolute h-[13px] left-[15%] top-[0]"
                          src="images/img_user_gray_300_01.svg"
                          alt="user_Two"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[106px] inset-x-[0] mx-auto"
                        src="images/img_group2.svg"
                        alt="groupTwo"
                      />
                    </div>
                  </div>
                  <Text
                    className="capitalize mt-[22px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-indigo-900"
                    size="txtAgrandirRegular33Indigo900"
                  >
                    <span className="text-indigo-900 font-agrandir font-normal">
                      Unique{" "}
                    </span>
                    <span className="text-indigo-900 font-agrandir font-bold">
                      App Ui
                    </span>
                  </Text>
                  <Text
                    className="capitalize leading-[189.50%] mb-[23px] mt-4 text-[19px] text-center text-gray-500 w-[83%] sm:w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    Keep things looking sleek and modern with a unique and
                    intuitive app UI.
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start p-[33px] sm:px-5 rounded-[44px] w-[32%] md:w-full">
                  <Img
                    className="h-[157px]"
                    src="images/img_coder.svg"
                    alt="coder"
                  />
                  <Text
                    className="capitalize mt-[34px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-indigo-900"
                    size="txtAgrandirRegular33Indigo900"
                  >
                    <span className="text-indigo-900 font-agrandir font-normal">
                      Exclient{" "}
                    </span>
                    <span className="text-indigo-900 font-agrandir font-bold">
                      Dashboard
                    </span>
                  </Text>
                  <Text
                    className="capitalize leading-[189.50%] mb-0.5 mt-[19px] text-[19px] text-center text-gray-500 w-[91%] sm:w-full"
                    size="txtPoppinsRegular19Gray500"
                  >
                    Keep things looking sleek and modern with a unique and
                    intuitive app UI.
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end p-[35px] sm:px-5 rounded-[44px] w-full">
                    <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                      <div className="md:h-36 h-[162px] relative w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[95%]">
                          <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start w-full">
                            <div
                              className="bg-cover bg-no-repeat md:h-[67px] h-[99px] pb-[7px] relative w-[97%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group_blue_gray_900_01.svg')",
                              }}
                            >
                              <div className="absolute h-3 right-[5%] top-[17%] w-3">
                                <Img
                                  className="absolute h-[11px] inset-y-[0] left-[0] my-auto w-[11px]"
                                  src="images/img_lightbulb.svg"
                                  alt="lightbulb"
                                />
                                <Img
                                  className="absolute h-3 inset-y-[0] my-auto right-[0] w-[11px]"
                                  src="images/img_maximize.svg"
                                  alt="maximize"
                                />
                              </div>
                              <div className="absolute bottom-[21%] flex flex-col gap-[5px] items-center justify-start right-[5%] w-[10%]">
                                <Img
                                  className="h-[11px] w-[11px]"
                                  src="images/img_lightbulb.svg"
                                  alt="lightbulb_One"
                                />
                                <Img
                                  className="h-[11px] w-[11px]"
                                  src="images/img_lightbulb.svg"
                                  alt="lightbulb_Two"
                                />
                                <Img
                                  className="h-[11px] w-[11px]"
                                  src="images/img_lightbulb.svg"
                                  alt="lightbulb_Three"
                                />
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col gap-5 h-[73px] justify-end left-[6%] w-[76%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group88.svg')",
                                }}
                              >
                                <Img
                                  className="h-2.5 mr-[79px] mt-[31px] w-2.5"
                                  src="images/img_thumbsup_blue_a400.svg"
                                  alt="thumbsup_One"
                                />
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[9px] items-center justify-end md:ml-[0] ml-[33px] mr-12 w-[9px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group89.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-1.5"
                                    src="images/img_checkmark.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-2.5 inset-x-[0] mx-auto top-[0]"
                                src="images/img_vector_blue_gray_900_01.svg"
                                alt="vector"
                              />
                            </div>
                            <Line className="bg-blue_gray-900_01 h-px w-[97%]" />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-36 right-[8%]"
                          src="images/img_group_indigo_900.svg"
                          alt="group"
                        />
                        <Img
                          className="absolute bottom-[0] h-[47px] left-[0]"
                          src="images/img_group.svg"
                          alt="group_One"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize mt-[29px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-indigo-900"
                      size="txtAgrandirRegular33Indigo900"
                    >
                      <span className="text-indigo-900 font-agrandir font-normal">
                        By{" "}
                      </span>
                      <span className="text-indigo-900 font-agrandir font-bold">
                        Construction
                      </span>
                    </Text>
                    <Text
                      className="capitalize leading-[189.50%] mt-4 text-[19px] text-center text-gray-500 w-[92%] sm:w-full"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Keep things looking sleek and modern with a unique and
                      intuitive app UI.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-14 items-center justify-end mt-[130px] md:px-5 w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[55%] md:w-full">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 w-[84%] sm:w-full"
                  size="txtAgrandirTextBold53"
                >
                  <>We Built The App That Everyone Love</>
                </Text>
                <Text
                  className="capitalize leading-[189.50%] mt-[31px] text-[19px] text-gray-500 text-justify"
                  size="txtPoppinsRegular19Gray500"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500sLorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&#39;s standard
                    dummy text ever since the 1500s
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </>
                </Text>
                <Button
                  className="capitalize cursor-pointer font-poppins min-w-[229px] mt-10 text-[22px] text-center sm:text-lg md:text-xl"
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="indigo_900_indigo_A700"
                >
                  Explore More
                </Button>
              </div>
              <div className="h-[924px] relative rotate-[180deg] w-[43%] md:w-full">
                <Img
                  className="absolute h-[739px] inset-y-[0] my-auto object-cover right-[0]"
                  src="images/img_vector10.png"
                  alt="vectorTen"
                />
                <div className="absolute h-[924px] inset-y-[0] left-[0] my-auto sm:px-5 px-7 w-[65%] sm:w-full">
                  <Img
                    className="h-[924px] m-auto object-cover w-[88%]"
                    src="images/img_iphone12pro_924x389.png"
                    alt="iphone12pro_Two"
                  />
                  <Img
                    className="absolute h-[886px] inset-y-[0] left-[9%] my-auto object-cover w-[76%]"
                    src="images/img_screeniphone12_886x336.png"
                    alt="screeniphoneTwelve_Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1562px] mt-[129px] mx-auto md:px-5 w-full">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                Successful & Counting
              </Text>
              <Text
                className="capitalize mt-[17px] text-[19px] text-gray-500 text-justify"
                size="txtPoppinsRegular19Gray500"
              >
                Experience the power of success! Our platform has been used and
                endorsed by hundreds of satisfied users.
              </Text>
              <div className="flex md:flex-col flex-row font-agrandir md:gap-5 items-start justify-start mt-[67px] w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[44px] w-1/4 md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[18px] w-[90%] md:w-full">
                    <div className="flex flex-row gap-[21px] items-end justify-between w-full">
                      <Img
                        className="h-[90px] mt-3.5 w-[90px]"
                        src="images/img_ggchecko_indigo_900.svg"
                        alt="ggchecko"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize md:text-5xl text-[61px] text-indigo-900"
                          size="txtAgrandirTextBold61"
                        >
                          100+
                        </Text>
                        <Text
                          className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                          size="txtAgrandirRegular22"
                        >
                          Project Complete
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[67px] md:mt-0 mt-[30px] w-[17%] md:w-full">
                  <div className="flex flex-row gap-[22px] items-end justify-between w-full">
                    <Img
                      className="h-[90px] mb-0.5 mt-3.5 w-[90px]"
                      src="images/img_ggchecko.svg"
                      alt="ggchecko_One"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900"
                        size="txtAgrandirTextBold61"
                      >
                        100+
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Active Project
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[152px] md:mt-0 mt-[30px] w-[18%] md:w-full">
                  <div className="flex flex-row gap-[21px] items-end justify-between w-full">
                    <Img
                      className="h-[90px] mt-3.5 w-[90px]"
                      src="images/img_ggchecko_indigo_900_90x90.svg"
                      alt="ggchecko_Two"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900"
                        size="txtAgrandirTextBold61"
                      >
                        150+
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Clients Satisfied
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[132px] md:mt-0 mt-[30px] w-[19%] md:w-full">
                  <div className="flex flex-row gap-[25px] items-start justify-between w-full">
                    <Img
                      className="h-[82px] mt-[18px] w-[82px]"
                      src="images/img_fluentmdl2world.svg"
                      alt="fluentmdl2world"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900"
                        size="txtAgrandirTextBold61"
                      >
                        50+
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Country Available
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[124px] w-full">
              <div className="flex flex-col md:gap-10 gap-[92px] justify-start w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[87px] md:px-5">
                  <Text
                    className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                    size="txtAgrandirTextBold53"
                  >
                    Our Portfolio
                  </Text>
                  <Text
                    className="capitalize text-[19px] text-gray-500 text-justify"
                    size="txtPoppinsRegular19Gray500"
                  >
                    <>
                      Explore our portfolio to get inspired by the amazing
                      projects we&#39;ve completed for our clients.
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="md:h-[728px] h-[740px] md:px-5 relative w-[34%] md:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-[83px] md:px-10 sm:px-5 w-[44%]"
                      style={{
                        backgroundImage: "url('images/img_group91.png')",
                      }}
                    >
                      <Img
                        className="h-[86px] my-[223px] w-[86px]"
                        src="images/img_emojionemonotonedownarrow.svg"
                        alt="emojionemonoton"
                      />
                    </div>
                    <div className="absolute md:h-[728px] h-[740px] inset-y-[0] my-auto p-[5px] right-[0] w-[62%]">
                      <Img
                        className="h-[728px] m-auto object-cover w-[96%]"
                        src="images/img_iphone12pro_728x343.png"
                        alt="iphone12pro_Three"
                      />
                      <Img
                        className="absolute h-[699px] inset-[0] justify-center m-auto object-cover w-[86%]"
                        src="images/img_screeniphone12_699x306.png"
                        alt="screeniphoneTwelve_Three"
                      />
                    </div>
                  </div>
                  <div className="md:h-[881px] h-[909px] md:px-5 relative w-[26%] md:w-full">
                    <Img
                      className="h-[881px] m-auto object-cover w-[99%]"
                      src="images/img_iphone12pro_881x435.png"
                      alt="iphone12pro_Four"
                    />
                    <Img
                      className="absolute h-[844px] inset-[0] justify-center m-auto object-cover w-[89%]"
                      src="images/img_screeniphone12_844x391.png"
                      alt="screeniphoneTwelve_Four"
                    />
                  </div>
                  <div className="md:h-[728px] h-[740px] md:px-5 relative w-[34%] md:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[83px] md:px-10 sm:px-5 right-[0] w-[44%]"
                      style={{
                        backgroundImage: "url('images/img_group90.png')",
                      }}
                    >
                      <Img
                        className="h-[86px] my-[223px] w-[86px]"
                        src="images/img_emojionemonotonedownarrow_white_a700.svg"
                        alt="emojionemonoton_One"
                      />
                    </div>
                    <div className="absolute md:h-[728px] h-[740px] inset-y-[0] left-[0] my-auto p-[5px] w-[62%]">
                      <Img
                        className="h-[728px] m-auto object-cover w-[96%]"
                        src="images/img_iphone12pro_1.png"
                        alt="iphone12pro_Five"
                      />
                      <Img
                        className="absolute h-[699px] inset-[0] justify-center m-auto object-cover w-[86%]"
                        src="images/img_screeniphone12_1.png"
                        alt="screeniphoneTwelve_Five"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PagerIndicator
              className="flex h-1.5 justify-center mt-10 w-[120px]"
              count={4}
              activeCss="inline-block cursor-pointer h-1.5 bg-indigo-900 w-[23px] rounded-[3px]"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer h-1.5 bg-blue_gray-100_02 w-6 rounded-[3px]"
              selectedWrapperCss="inline-block md:ml-[0] mx-[3.81px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[3.81px] sm:ml-[0]"
            />
            <div className="flex flex-col items-start justify-start mt-[82px] md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                  size="txtAgrandirTextBold53"
                >
                  Mobile App Reviews
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingRight={445}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="flex font-poppins gap-[39px] mt-16 w-full"
                  items={[...Array(12)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end mx-2.5 p-[45px] md:px-10 sm:px-5 rounded-[44px]">
                        <div className="flex flex-col items-start justify-start mt-[5px] w-[98%] md:w-full">
                          <div className="flex flex-row items-end justify-between w-full">
                            <Img
                              className="h-[41px]"
                              src="images/img_group1000001845.svg"
                              alt="group1000001845"
                            />
                            <Text
                              className="capitalize mt-2.5 text-[19px] text-gray-500 text-right"
                              size="txtPoppinsRegular19Gray500"
                            >
                              Jun 25, 2023
                            </Text>
                          </div>
                          <Text
                            className="capitalize mt-[29px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                            size="txtPoppinsMedium22"
                          >
                            Got my android and iOS application…
                          </Text>
                          <Text
                            className="capitalize leading-[189.50%] mt-[5px] text-[19px] text-gray-500 text-justify w-full"
                            size="txtPoppinsRegular19Gray500"
                          >
                            <>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry&#39;s standard dummy text ever since the
                              1500s
                            </>
                          </Text>
                          <Text
                            className="capitalize mt-[26px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            <span className="text-black-900 font-poppins text-left font-semibold">
                              Date of experience:
                            </span>
                            <span className="text-black-900 font-poppins text-left font-normal">
                              {" "}
                              June 14, 2023
                            </span>
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer h-[9px] bg-indigo-900 w-[34px] rounded" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer h-[9px] bg-blue_gray-100_02 w-[35px] rounded"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="flex h-[9px] md:ml-[0] ml-[194px] mt-10 w-[172px]"
                  count={4}
                  activeCss="inline-block cursor-pointer h-[9px] bg-indigo-900 w-[34px] rounded"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer h-[9px] bg-blue_gray-100_02 w-[35px] rounded"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block md:ml-[0] mx-[5.47px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[5.47px] sm:ml-[0]"
                />
              </div>
            </div>
            <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDevelopmentPage;
