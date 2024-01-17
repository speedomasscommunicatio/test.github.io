import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const JobapplicationformOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="sm:h-[435px] h-[618px] md:h-[895px] md:px-5 relative w-full">
            <div className="h-[618px] m-auto w-full">
              <Img
                className="h-[140px] mb-[undefinedpx] mt-auto object-cover w-[37%] z-[1]"
                src="images/img_ellipse1_17.png"
                alt="ellipseOne_One"
              />
              <Img
                className="h-[350px] mb-[-23.36px] ml-auto object-cover w-[29%] z-[1]"
                src="images/img_ellipse2_9.png"
                alt="ellipseTwo_One"
              />
              <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[229px] md:h-auto mb-[59px] md:mt-0 mt-[3px] object-cover"
                    src="images/img_group57.png"
                    alt="groupFiftySeven"
                  />
                  <Text
                    className="capitalize md:text-5xl text-[85px] text-center text-indigo-900"
                    size="txtAgrandirTextBold85"
                  >
                    Job application form
                  </Text>
                  <div className="h-[139px] md:mt-0 mt-[152px] relative w-[8%] md:w-full">
                    <Img
                      className="h-[139px] m-auto object-cover w-full"
                      src="images/img_ellipse1_16.png"
                      alt="ellipseOne"
                    />
                    <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                      <Img
                        className="h-[123px] m-auto object-cover w-full"
                        src="images/img_ellipse2_8.png"
                        alt="ellipseTwo"
                      />
                      <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                        <Img
                          className="h-[108px] m-auto object-cover w-full"
                          src="images/img_ellipse3_4.png"
                          alt="ellipseThree"
                        />
                        <Img
                          className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                          src="images/img_ellipse4_4.png"
                          alt="ellipseFour"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-poppins md:gap-10 gap-[125px] inset-x-[0] justify-start mx-auto top-[8%] w-[92%]">
              <div className="flex flex-col items-center justify-start w-full">
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
              <Img
                className="h-[47px] md:ml-[0] ml-[143px] w-[47px]"
                src="images/img_user.svg"
                alt="user"
              />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[124px] items-center justify-end md:ml-[0] ml-[497px] w-[48%] md:w-full">
                <Text
                  className="capitalize text-[19px] text-center text-gray-500"
                  size="txtPoppinsRegular19Gray500"
                >
                  Please fill out the form below to submit your job application
                </Text>
                <Img
                  className="h-[47px] w-[47px]"
                  src="images/img_user.svg"
                  alt="user_One"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1504px] mt-[110px] mx-auto md:px-5 w-full">
            <div className="md:h-[423px] sm:h-[496px] h-[500px] md:mt-0 mt-[68px] p-1.5 relative w-[500px] sm:w-full">
              <div className="md:h-[423px] sm:h-[471px] h-[475px] m-auto w-[98%] sm:w-full">
                <div className="md:h-[423px] sm:h-[471px] h-[475px] m-auto w-full">
                  <div className="md:h-[423px] sm:h-[471px] h-[475px] m-auto w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[102px] justify-start w-full">
                        <Img
                          className="h-[78px] ml-8 md:ml-[0]"
                          src="images/img_freepikshelfinject14.svg"
                          alt="freepikshelfinj"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[293px] items-start justify-end p-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group97.svg')",
                          }}
                        >
                          <Img
                            className="h-[141px] mb-[15px] mt-[115px]"
                            src="images/img_freepikshadowsinject14.svg"
                            alt="freepikshadowsi"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[120px] right-1/4 top-[0]"
                      src="images/img_freepikpictureinject14.svg"
                      alt="freepikpicturei"
                    />
                    <Img
                      className="absolute h-[217px] right-[6%] top-[1%]"
                      src="images/img_freepikwindowinject14.svg"
                      alt="freepikwindowin"
                    />
                    <Img
                      className="absolute h-[423px] left-[7%] top-[1%]"
                      src="images/img_freepikdeviceinject14.svg"
                      alt="freepikdevicein"
                    />
                  </div>
                  <Img
                    className="absolute h-[278px] right-[30%] top-[4%]"
                    src="images/img_freepikscreeninject14.svg"
                    alt="freepikscreenin"
                  />
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[13%] top-[7%] w-[37%]">
                  <div
                    className="bg-cover bg-no-repeat md:h-[333px] h-[374px] p-0.5 relative w-full"
                    style={{
                      backgroundImage: "url('images/img_freepikpaper.svg')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[3%] h-[333px] inset-x-[0] mx-auto"
                      src="images/img_freepikshadowinject14.svg"
                      alt="freepikshadowin"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[3%] sm:h-[151px] h-[333px] md:h-[88px] p-1.5 right-[1%] w-[92%]"
                      style={{
                        backgroundImage: "url('images/img_group98.svg')",
                      }}
                    >
                      <div className="absolute md:h-[71px] h-[72px] inset-x-[0] mx-auto top-[2%] w-[59%]">
                        <Img
                          className="absolute h-[71px] inset-[0] justify-center m-auto"
                          src="images/img_settings_black_900.svg"
                          alt="settings"
                        />
                        <Img
                          className="absolute h-[71px] inset-[0] justify-center m-auto"
                          src="images/img_settings_blue_gray_700.svg"
                          alt="settings_One"
                        />
                      </div>
                      <div className="absolute bottom-[7%] sm:h-[151px] h-[243px] md:h-[88px] inset-x-[0] mx-auto w-[86%]">
                        <div className="sm:h-[151px] h-[243px] md:h-[88px] m-auto w-full">
                          <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                            <div className="h-[181px] md:h-[88px] mx-auto w-full">
                              <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                                <div className="flex flex-row gap-3.5 items-start justify-between mx-auto w-full">
                                  <div className="md:h-[63px] h-[67px] mt-5 relative w-[45%]">
                                    <Img
                                      className="absolute h-3 left-[0] top-[16%]"
                                      src="images/img_vector_white_a700_12x4.svg"
                                      alt="vector"
                                    />
                                    <div className="absolute flex flex-row h-[19px] items-start justify-center left-[10%] top-[0] w-[19px]">
                                      <Img
                                        className="h-2.5 mt-2"
                                        src="images/img_vector_white_a700_10x5.svg"
                                        alt="vector_One"
                                      />
                                      <Img
                                        className="h-[11px] mt-[5px]"
                                        src="images/img_vector_white_a700_11x5.svg"
                                        alt="vector_Two"
                                      />
                                      <Img
                                        className="h-[13px] mb-1.5"
                                        src="images/img_music.svg"
                                        alt="music"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-11 inset-x-[0] items-start justify-start mx-auto pr-[9px] py-[9px] w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group105.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row items-start justify-start mb-[5px] w-[53%] md:w-full">
                                        <Img
                                          className="h-[7px] mt-3"
                                          src="images/img_vector_blue_gray_700.svg"
                                          alt="vector_Three"
                                        />
                                        <Img
                                          className="h-1.5 mt-3"
                                          src="images/img_vector_blue_gray_700_6x1.svg"
                                          alt="vector_Four"
                                        />
                                        <Img
                                          className="h-[5px] mt-3"
                                          src="images/img_vector_blue_gray_700_5x1.svg"
                                          alt="vector_Five"
                                        />
                                        <Img
                                          className="h-[5px] mt-[11px]"
                                          src="images/img_vector_blue_gray_700_5x2.svg"
                                          alt="vector_Six"
                                        />
                                        <Img
                                          className="h-[5px] mt-2"
                                          src="images/img_vector_5x1.svg"
                                          alt="vector_Seven"
                                        />
                                        <Img
                                          className="h-[7px] ml-0.5 my-1.5"
                                          src="images/img_vector_blue_gray_700_7x2.svg"
                                          alt="vector_Eight"
                                        />
                                        <Img
                                          className="h-[5px] mt-[5px]"
                                          src="images/img_vector_5x2.svg"
                                          alt="vector_Nine"
                                        />
                                        <Img
                                          className="h-1.5 mt-0.5"
                                          src="images/img_vector_blue_gray_700_6x3.svg"
                                          alt="vector_Ten"
                                        />
                                        <Img
                                          className="h-1"
                                          src="images/img_vector_blue_gray_700_4x2.svg"
                                          alt="vector_Eleven"
                                        />
                                        <Img
                                          className="h-1"
                                          src="images/img_vector_blue_gray_700_4x1.svg"
                                          alt="vector_Twelve"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-11 items-start justify-end pr-[3px] py-[3px] w-[45%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group105.svg')",
                                    }}
                                  >
                                    <div className="flex flex-row items-start justify-evenly w-[99%] md:w-full">
                                      <div className="flex flex-col items-end justify-start w-[37px]">
                                        <div className="flex flex-row items-start justify-evenly w-full">
                                          <Img
                                            className="h-1.5 mt-[17px]"
                                            src="images/img_vector_blue_gray_700_6x2.svg"
                                            alt="vector_Thirteen"
                                          />
                                          <Img
                                            className="h-1 mt-[17px]"
                                            src="images/img_vector_4x2.svg"
                                            alt="vector_Fourteen"
                                          />
                                          <Img
                                            className="h-1 mt-[15px]"
                                            src="images/img_vector_1.svg"
                                            alt="vector_Fifteen"
                                          />
                                          <Img
                                            className="h-1 mt-[13px]"
                                            src="images/img_vector_3.svg"
                                            alt="vector_Sixteen"
                                          />
                                          <Img
                                            className="h-[5px] mt-3"
                                            src="images/img_vector_4.svg"
                                            alt="vector_Seventeen"
                                          />
                                          <Img
                                            className="h-1.5 mt-2"
                                            src="images/img_vector_6x2.svg"
                                            alt="vector_Eighteen"
                                          />
                                          <Img
                                            className="h-[7px] mb-[11px] mt-[5px]"
                                            src="images/img_vector_7x2.svg"
                                            alt="vector_Nineteen"
                                          />
                                          <Img
                                            className="h-[5px] mt-[5px]"
                                            src="images/img_vector_5.svg"
                                            alt="vector_Twenty"
                                          />
                                          <Img
                                            className="h-1.5 mt-0.5"
                                            src="images/img_vector_6x3.svg"
                                            alt="vector_TwentyOne"
                                          />
                                          <Img
                                            className="h-1"
                                            src="images/img_vector_6.svg"
                                            alt="vector_TwentyTwo"
                                          />
                                          <Img
                                            className="h-1"
                                            src="images/img_vector_4x1.svg"
                                            alt="vector_TwentyThree"
                                          />
                                        </div>
                                        <div className="flex flex-row items-start justify-end mt-[3px] w-[11%] md:w-full">
                                          <Img
                                            className="h-1.5"
                                            src="images/img_vector_7.svg"
                                            alt="vector_TwentyFour"
                                          />
                                          <Img
                                            className="h-1.5 mb-0.5"
                                            src="images/img_vector_6x1.svg"
                                            alt="vector_TwentyFive"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="h-[5px] mt-7"
                                        src="images/img_vector_8.svg"
                                        alt="vector_TwentySix"
                                      />
                                      <Img
                                        className="h-[5px] mt-[26px]"
                                        src="images/img_vector_9.svg"
                                        alt="vector_TwentySeven"
                                      />
                                      <Img
                                        className="h-1.5 mt-6"
                                        src="images/img_vector_11.svg"
                                        alt="vector_TwentyEight"
                                      />
                                      <Img
                                        className="h-1.5 mt-5"
                                        src="images/img_vector_12.svg"
                                        alt="vector_TwentyNine"
                                      />
                                      <Img
                                        className="h-1 mt-[21px]"
                                        src="images/img_vector_13.svg"
                                        alt="vector_Thirty"
                                      />
                                      <Img
                                        className="h-[5px] mt-[19px]"
                                        src="images/img_vector_14.svg"
                                        alt="vector_ThirtyOne"
                                      />
                                      <Img
                                        className="h-[5px] mt-[18px]"
                                        src="images/img_vector_15.svg"
                                        alt="vector_ThirtyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[88px] items-start justify-end mt-[-26.27px] mx-auto pr-3.5 py-3.5 w-full z-[1]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group100.svg')",
                                  }}
                                >
                                  <div className="flex flex-row items-start justify-start mt-[42px] w-[17%] md:w-full">
                                    <Img
                                      className="h-[7px] mt-[9px]"
                                      src="images/img_vector_blue_gray_700_7x3.svg"
                                      alt="vector_ThirtyThree"
                                    />
                                    <Img
                                      className="h-1.5 mt-1.5"
                                      src="images/img_vector_16.svg"
                                      alt="vector_ThirtyFour"
                                    />
                                    <Img
                                      className="h-1.5 mt-1"
                                      src="images/img_vector_17.svg"
                                      alt="vector_ThirtyFive"
                                    />
                                    <Img
                                      className="h-[5px] mt-[5px]"
                                      src="images/img_vector_18.svg"
                                      alt="vector_ThirtySix"
                                    />
                                    <Img
                                      className="h-1 mt-1"
                                      src="images/img_vector_19.svg"
                                      alt="vector_ThirtySeven"
                                    />
                                    <Img
                                      className="h-1 mt-0.5"
                                      src="images/img_vector_20.svg"
                                      alt="vector_ThirtyEight"
                                    />
                                    <Img
                                      className="h-1"
                                      src="images/img_vector_21.svg"
                                      alt="vector_ThirtyNine"
                                    />
                                    <Img
                                      className="h-1"
                                      src="images/img_vector_blue_gray_700_4x1.svg"
                                      alt="vector_Forty"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] md:h-11 h-[88px] inset-x-[0] mx-auto py-3 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group100.svg')",
                                }}
                              >
                                <div className="absolute bottom-[14%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                  <div className="flex flex-row items-start justify-start w-full">
                                    <Img
                                      className="h-[7px] mt-[35px]"
                                      src="images/img_vector_22.svg"
                                      alt="vector_FortyOne"
                                    />
                                    <Img
                                      className="h-1.5 mt-[34px]"
                                      src="images/img_vector_23.svg"
                                      alt="vector_FortyTwo"
                                    />
                                    <Img
                                      className="h-[5px] mt-8"
                                      src="images/img_vector_24.svg"
                                      alt="vector_FortyThree"
                                    />
                                    <Img
                                      className="h-1.5 mt-[29px]"
                                      src="images/img_vector_25.svg"
                                      alt="vector_FortyFour"
                                    />
                                    <Img
                                      className="h-1.5 mt-[29px]"
                                      src="images/img_vector_26.svg"
                                      alt="vector_FortyFive"
                                    />
                                    <Img
                                      className="h-1.5 mt-[27px]"
                                      src="images/img_vector_27.svg"
                                      alt="vector_FortySix"
                                    />
                                    <Img
                                      className="h-1.5 mt-6"
                                      src="images/img_vector_6x2.svg"
                                      alt="vector_FortySeven"
                                    />
                                    <Img
                                      className="h-1.5 mt-[22px]"
                                      src="images/img_vector_28.svg"
                                      alt="vector_FortyEight"
                                    />
                                    <Img
                                      className="h-[5px] mt-[22px]"
                                      src="images/img_vector_18.svg"
                                      alt="vector_FortyNine"
                                    />
                                    <Img
                                      className="h-1 mt-[21px]"
                                      src="images/img_vector_29.svg"
                                      alt="vector_Fifty"
                                    />
                                    <Img
                                      className="h-1 mt-[19px]"
                                      src="images/img_vector_30.svg"
                                      alt="vector_FiftyOne"
                                    />
                                    <Img
                                      className="h-1 mt-[18px]"
                                      src="images/img_vector_31.svg"
                                      alt="vector_FiftyTwo"
                                    />
                                    <Img
                                      className="h-1 mt-[17px]"
                                      src="images/img_vector_32.svg"
                                      alt="vector_FiftyThree"
                                    />
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-11 items-start justify-start ml-[38px] pb-[15px] pr-[15px] w-[45%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group105.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row items-start justify-start w-[90%] md:w-full">
                                        <Img
                                          className="h-1.5 mt-[21px]"
                                          src="images/img_vector_33.svg"
                                          alt="vector_FiftyFour"
                                        />
                                        <Img
                                          className="h-1 mt-[21px]"
                                          src="images/img_vector_34.svg"
                                          alt="vector_FiftyFive"
                                        />
                                        <Img
                                          className="h-[5px] mt-[19px]"
                                          src="images/img_vector_35.svg"
                                          alt="vector_FiftySix"
                                        />
                                        <Img
                                          className="h-[7px] mb-[5px] mt-[15px]"
                                          src="images/img_vector_36.svg"
                                          alt="vector_FiftySeven"
                                        />
                                        <Img
                                          className="h-[5px] mt-4"
                                          src="images/img_vector_37.svg"
                                          alt="vector_FiftyEight"
                                        />
                                        <Img
                                          className="h-1.5 mt-[13px]"
                                          src="images/img_vector_38.svg"
                                          alt="vector_FiftyNine"
                                        />
                                        <Img
                                          className="h-1.5 ml-0.5 mt-[9px]"
                                          src="images/img_vector_39.svg"
                                          alt="vector_Sixty"
                                        />
                                        <Img
                                          className="h-[5px] mt-[9px]"
                                          src="images/img_vector_40.svg"
                                          alt="vector_SixtyOne"
                                        />
                                        <Img
                                          className="h-1 mt-[7px]"
                                          src="images/img_vector_30.svg"
                                          alt="vector_SixtyTwo"
                                        />
                                        <Img
                                          className="h-[5px] mt-[5px]"
                                          src="images/img_vector_41.svg"
                                          alt="vector_SixtyThree"
                                        />
                                        <Img
                                          className="h-1.5 mt-[3px]"
                                          src="images/img_vector_42.svg"
                                          alt="vector_SixtyFour"
                                        />
                                        <Img
                                          className="h-1"
                                          src="images/img_vector_34.svg"
                                          alt="vector_SixtyFive"
                                        />
                                        <Img
                                          className="h-[5px]"
                                          src="images/img_vector_43.svg"
                                          alt="vector_SixtySix"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-1.5 right-[12%] top-[31%]"
                                  src="images/img_vector_44.svg"
                                  alt="vector_SixtySeven"
                                />
                                <Img
                                  className="absolute h-1 right-[11%] top-[32%]"
                                  src="images/img_vector_45.svg"
                                  alt="vector_SixtyEight"
                                />
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-11 items-center justify-start mt-[-NaNpx] pr-0.5 py-0.5 w-[45%] z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group105.svg')",
                              }}
                            >
                              <div className="flex flex-row items-start justify-start mb-3 w-[99%] md:w-full">
                                <Img
                                  className="h-1.5 mt-[18px]"
                                  src="images/img_vector_46.svg"
                                  alt="vector_SixtyNine"
                                />
                                <Img
                                  className="h-1.5 mt-4"
                                  src="images/img_vector_47.svg"
                                  alt="vector_Seventy"
                                />
                                <Img
                                  className="h-[5px] mt-4"
                                  src="images/img_vector_48.svg"
                                  alt="vector_SeventyOne"
                                />
                                <Img
                                  className="h-[5px] mt-3.5"
                                  src="images/img_vector_49.svg"
                                  alt="vector_SeventyTwo"
                                />
                                <Img
                                  className="h-1.5 mt-[13px]"
                                  src="images/img_vector_50.svg"
                                  alt="vector_SeventyThree"
                                />
                                <Img
                                  className="h-[7px] ml-0.5 my-2"
                                  src="images/img_vector_7x3.svg"
                                  alt="vector_SeventyFour"
                                />
                                <Img
                                  className="h-1 mt-[9px]"
                                  src="images/img_vector_51.svg"
                                  alt="vector_SeventyFive"
                                />
                                <Img
                                  className="h-[5px] mt-[7px]"
                                  src="images/img_vector_52.svg"
                                  alt="vector_SeventySix"
                                />
                                <Img
                                  className="h-[5px] mt-1"
                                  src="images/img_vector_53.svg"
                                  alt="vector_SeventySeven"
                                />
                                <Img
                                  className="h-1.5 mt-[3px]"
                                  src="images/img_vector_54.svg"
                                  alt="vector_SeventyEight"
                                />
                                <Img
                                  className="h-1 ml-[26px] w-[3px]"
                                  src="images/img_vector_blue_gray_700_4x3.svg"
                                  alt="vector_SeventyNine"
                                />
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-11 items-start justify-start mt-[-13.41px] pr-[9px] py-[9px] w-[45%] z-[1]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group105.svg')",
                              }}
                            >
                              <div className="flex flex-row items-start justify-start mb-1 w-[48%] md:w-full">
                                <Img
                                  className="h-1.5 mt-3"
                                  src="images/img_vector_55.svg"
                                  alt="vector_Eighty"
                                />
                                <Img
                                  className="h-[5px] mt-3"
                                  src="images/img_vector_56.svg"
                                  alt="vector_EightyOne"
                                />
                                <Img
                                  className="h-1 mt-2.5"
                                  src="images/img_vector_57.svg"
                                  alt="vector_EightyTwo"
                                />
                                <Img
                                  className="h-1 mt-[9px]"
                                  src="images/img_vector_58.svg"
                                  alt="vector_EightyThree"
                                />
                                <Img
                                  className="h-1.5 my-1.5"
                                  src="images/img_vector_59.svg"
                                  alt="vector_EightyFour"
                                />
                                <Img
                                  className="h-1 mt-[5px]"
                                  src="images/img_vector_60.svg"
                                  alt="vector_EightyFive"
                                />
                                <Img
                                  className="h-[5px] mt-[3px]"
                                  src="images/img_vector_48.svg"
                                  alt="vector_EightySix"
                                />
                                <Img
                                  className="h-1.5 mb-3"
                                  src="images/img_vector_61.svg"
                                  alt="vector_EightySeven"
                                />
                                <Img
                                  className="h-1"
                                  src="images/img_vector_62.svg"
                                  alt="vector_EightyEight"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col md:gap-10 gap-[115px] h-max inset-y-[0] items-start justify-start my-auto right-[26%] w-[19%]">
                            <div className="flex flex-row items-start justify-start w-[62%] md:w-full">
                              <Img
                                className="h-[7px] mt-[7px]"
                                src="images/img_vector_63.svg"
                                alt="vector_EightyNine"
                              />
                              <Img
                                className="h-1.5 mt-1.5"
                                src="images/img_vector_64.svg"
                                alt="vector_Ninety"
                              />
                              <Img
                                className="h-[5px] mt-1.5"
                                src="images/img_vector_65.svg"
                                alt="vector_NinetyOne"
                              />
                              <Img
                                className="h-[5px] mt-1"
                                src="images/img_vector_66.svg"
                                alt="vector_NinetyTwo"
                              />
                              <Img
                                className="h-1.5 mt-[3px]"
                                src="images/img_vector_67.svg"
                                alt="vector_NinetyThree"
                              />
                              <Img
                                className="h-1.5 ml-0.5"
                                src="images/img_vector_68.svg"
                                alt="vector_NinetyFour"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-end p-1.5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group109.svg')",
                              }}
                            >
                              <div className="flex flex-row items-start justify-center w-[11px] md:w-full">
                                <Img
                                  className="h-1.5 mt-[3px]"
                                  src="images/img_vector_white_a700_6x2.svg"
                                  alt="vector_NinetyFive"
                                />
                                <Img
                                  className="h-[5px] mt-[3px]"
                                  src="images/img_vector_white_a700_5x2.svg"
                                  alt="vector_NinetySix"
                                />
                                <Img
                                  className="h-[5px]"
                                  src="images/img_vector_69.svg"
                                  alt="vector_NinetySeven"
                                />
                                <Img
                                  className="h-1"
                                  src="images/img_vector_white_a700_4x2.svg"
                                  alt="vector_NinetyEight"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[26%] flex flex-col h-6 items-center justify-start p-[3px] right-[0] w-1/5"
                            style={{
                              backgroundImage: "url('images/img_group108.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-evenly w-4 md:w-full">
                              <Img
                                className="h-1.5 mt-2"
                                src="images/img_vector_indigo_900_6x3.svg"
                                alt="vector_NinetyNine"
                              />
                              <Img
                                className="h-[5px] mt-2"
                                src="images/img_vector_indigo_900_5x2.svg"
                                alt="vector_OneHundred"
                              />
                              <Img
                                className="h-[5px] mt-1.5"
                                src="images/img_vector_70.svg"
                                alt="vector_OneHundredOne"
                              />
                              <Img
                                className="h-1 mt-1"
                                src="images/img_vector_indigo_900_4x2.svg"
                                alt="vector_OneHundredTwo"
                              />
                              <Img
                                className="h-1 mt-0.5"
                                src="images/img_vector_71.svg"
                                alt="vector_OneHundredThree"
                              />
                              <Img
                                className="h-1.5 mb-2"
                                src="images/img_vector_indigo_900_6x1.svg"
                                alt="vector_OneHundredFour"
                              />
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-11 items-start justify-start left-[0] pr-[3px] py-[3px] w-[45%]"
                            style={{
                              backgroundImage: "url('images/img_group105.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-start mb-[11px] w-[65%] md:w-full">
                              <Img
                                className="h-1.5 mt-[19px]"
                                src="images/img_vector_72.svg"
                                alt="vector_OneHundredFive"
                              />
                              <Img
                                className="h-1.5 mt-[18px]"
                                src="images/img_vector_73.svg"
                                alt="vector_OneHundredSix"
                              />
                              <Img
                                className="h-1 mt-[17px]"
                                src="images/img_vector_74.svg"
                                alt="vector_OneHundredSeven"
                              />
                              <Img
                                className="h-[5px] mt-[15px]"
                                src="images/img_vector_75.svg"
                                alt="vector_OneHundredEight"
                              />
                              <Img
                                className="h-1 mt-[13px]"
                                src="images/img_vector_76.svg"
                                alt="vector_OneHundredNine"
                              />
                              <Img
                                className="h-[7px] ml-0.5 my-[9px]"
                                src="images/img_vector_77.svg"
                                alt="vector_OneHundredTen"
                              />
                              <Img
                                className="h-[5px] mt-2"
                                src="images/img_vector_78.svg"
                                alt="vector_OneHundredEleven"
                              />
                              <Img
                                className="h-1.5 mt-[5px]"
                                src="images/img_vector_79.svg"
                                alt="vector_OneHundredTwelve"
                              />
                              <Img
                                className="h-1.5 mt-0.5"
                                src="images/img_vector_80.svg"
                                alt="vector_OneHundredThirteen"
                              />
                              <Img
                                className="h-1"
                                src="images/img_vector_81.svg"
                                alt="vector_OneHundredFourteen"
                              />
                              <Img
                                className="h-[5px]"
                                src="images/img_vector_48.svg"
                                alt="vector_OneHundredFifteen"
                              />
                              <Img
                                className="h-1"
                                src="images/img_vector_82.svg"
                                alt="vector_OneHundredSixteen"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[12%] w-[45%]">
                          <div className="flex flex-col justify-start mt-[11px] w-[47%]">
                            <div className="flex flex-row items-start justify-end md:ml-[0] ml-[18px] w-[18%] md:w-full">
                              <Img
                                className="h-[5px] mt-0.5"
                                src="images/img_vector_83.svg"
                                alt="vector_OneHundredSeventeen"
                              />
                              <Img
                                className="h-[7px]"
                                src="images/img_vector_84.svg"
                                alt="vector_OneHundredEighteen"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[25px] items-end justify-start p-0.5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group105.svg')",
                              }}
                            >
                              <Img
                                className="h-1 mb-3.5 w-[3px]"
                                src="images/img_vector_blue_gray_700_4x3.svg"
                                alt="vector_OneHundredNineteen"
                              />
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[25px] items-end justify-start p-0.5 w-[47%]"
                            style={{
                              backgroundImage: "url('images/img_group105.svg')",
                            }}
                          >
                            <Img
                              className="h-1 mb-3.5 w-[3px]"
                              src="images/img_vector_blue_gray_700_4x3.svg"
                              alt="vector_OneHundredTwenty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[5%] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto w-[87%]">
                <Img
                  className="h-[98px] sm:mt-0 mt-[165px]"
                  src="images/img_freepikplantinject14.svg"
                  alt="freepikplantinj"
                />
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[99px] sm:mt-0 mt-[166px] w-[17%] sm:w-full">
                  <div className="md:h-[89px] h-[91px] relative w-full">
                    <div className="md:h-[89px] h-[91px] m-auto w-full">
                      <div className="md:h-[89px] h-[91px] m-auto w-full">
                        <div className="absolute flex flex-col gap-[13px] h-full inset-y-[0] items-end justify-start left-[0] my-auto w-[88%]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[9px] items-end justify-start pl-[3px] w-[9px]"
                            style={{
                              backgroundImage: "url('images/img_group112.svg')",
                            }}
                          >
                            <Img
                              className="h-2"
                              src="images/img_vector_deep_orange_200.svg"
                              alt="vector_OneHundredTwentyOne"
                            />
                          </div>
                          <div className="flex relative w-full">
                            <div className="flex flex-col items-center justify-start my-auto w-[91%]">
                              <div className="flex flex-col justify-start w-full">
                                <Img
                                  className="h-[34px] md:ml-[0] ml-[15px]"
                                  src="images/img_maximize_blue_gray_900_03.svg"
                                  alt="maximize"
                                />
                                <Img
                                  className="h-[34px] mr-[15px]"
                                  src="images/img_user_blue_gray_800.svg"
                                  alt="user_Two"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-4 ml-[-5.98px] mt-2 z-[1]"
                              src="images/img_close_blue_gray_800.svg"
                              alt="close"
                            />
                            <Img
                              className="h-[5px] mb-[17px] ml-[undefinedpx] mr-auto mt-auto z-[1]"
                              src="images/img_vector_blue_gray_800.svg"
                              alt="vector_OneHundredTwentyTwo"
                            />
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat md:h-3.5 h-[66px] inset-x-[0] mx-auto p-[3px] top-[3%] w-full"
                          style={{
                            backgroundImage: "url('images/img_group111.svg')",
                          }}
                        >
                          <div className="flex flex-col h-full items-center justify-start ml-auto mt-1.5 w-1/4">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-1.5 items-start justify-between w-[62%] md:w-full">
                                <Img
                                  className="h-0.5 w-[3px]"
                                  src="images/img_vector_blue_gray_900_03.svg"
                                  alt="vector_OneHundredTwentyThree"
                                />
                                <Img
                                  className="h-0.5 w-0.5"
                                  src="images/img_vector_blue_gray_900_03_2x2.svg"
                                  alt="vector_OneHundredTwentyFour"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-evenly w-full">
                                <div className="flex flex-col items-start justify-start mt-0.5 w-[34%]">
                                  <Img
                                    className="h-px"
                                    src="images/img_vector_blue_gray_900_03_1x6.svg"
                                    alt="vector_OneHundredTwentyFive"
                                  />
                                  <Img
                                    className="h-0.5"
                                    src="images/img_vector_blue_gray_900_03_2x6.svg"
                                    alt="vector_OneHundredTwentySix"
                                  />
                                </div>
                                <Img
                                  className="h-0.5"
                                  src="images/img_vector_red_200.svg"
                                  alt="vector_OneHundredTwentySeven"
                                />
                                <Img
                                  className="h-0.5"
                                  src="images/img_vector_blue_gray_900_03_2x5.svg"
                                  alt="vector_OneHundredTwentyEight"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-px right-[5%] top-[21%]"
                            src="images/img_vector_blue_gray_900_03_1x5.svg"
                            alt="vector_OneHundredTwentyNine"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-1.5 right-[31%] top-[2%]"
                        src="images/img_contrast_blue_gray_800.svg"
                        alt="contrast"
                      />
                    </div>
                    <Img
                      className="absolute h-[9px] right-[31%] top-[2%] w-2.5"
                      src="images/img_bookmark_deep_orange_200.svg"
                      alt="bookmark"
                    />
                  </div>
                </div>
                <Img
                  className="h-[269px] sm:ml-[0] ml-[17px]"
                  src="images/img_freepikcharacterinject14.svg"
                  alt="freepikcharacte"
                />
              </div>
            </div>
            <div className="bg-indigo-900_05 flex md:flex-1 flex-col items-center justify-end p-[65px] md:px-10 sm:px-5 rounded-[70px] w-[61%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-[7px] w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[45px] items-start justify-start w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsMedium16"
                    >
                      First Name
                    </Text>
                    <Line className="bg-gray-400_02 h-0.5 w-full" />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[45px] items-start justify-start w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsMedium16"
                    >
                      Last Name
                    </Text>
                    <Line className="bg-gray-400_02 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[50px] w-full">
                  <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsMedium16"
                    >
                      Email
                    </Text>
                    <Line className="bg-gray-400_02 h-0.5 w-full" />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[44%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsMedium16"
                    >
                      Phone Number
                    </Text>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                      <Text
                        className="text-[17px] text-gray-500 uppercase"
                        size="txtPoppinsMedium17"
                      >
                        +91 xxx xxx xxxx
                      </Text>
                      <Line className="bg-gray-400_02 h-0.5 w-full" />
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[104px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[50px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsMedium16"
                      >
                        Applied position
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-[17px] text-gray-500 uppercase"
                          size="txtPoppinsMedium17"
                        >
                          Select
                        </Text>
                        <Img
                          className="h-2"
                          src="images/img_user_gray_400_02.svg"
                          alt="user"
                        />
                      </div>
                      <Line className="bg-gray-400_02 h-0.5 w-full" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsMedium16"
                      >
                        Preferred Interview Date
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-[17px] text-gray-500 uppercase"
                          size="txtPoppinsMedium17"
                        >
                          DD-MM-YYYY
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_uilcalender.svg"
                          alt="uilcalender"
                        />
                      </div>
                      <Line className="bg-gray-400_02 h-0.5 w-full" />
                    </div>
                  </div>
                </List>
                <div className="flex flex-col md:gap-10 gap-[86px] items-start justify-start mt-[50px] w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsMedium16"
                  >
                    Cover Letter
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Line className="bg-gray-400_02 h-0.5 w-full" />
                    <Text
                      className="text-base text-gray-500"
                      size="txtPoppinsRegular16"
                    >
                      Please do not exceed 200 words.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[61px]">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsMedium16"
                  >
                    Upload Resume
                  </Text>
                </div>
                <div className="border-2 border-dashed border-gray-400_02 flex flex-col items-center justify-start mt-7 p-[43px] md:px-10 sm:px-5 rounded-[24px] w-full">
                  <div className="flex flex-col items-center justify-start mb-1 w-[26%] md:w-full">
                    <Button
                      className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                      color="gray_200_04"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[29px]"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </Button>
                    <Text
                      className="mt-[13px] text-base text-black-900 text-center"
                      size="txtPoppinsMedium16"
                    >
                      Upload a File
                    </Text>
                    <Text
                      className="mt-0.5 text-base text-center text-gray-500"
                      size="txtPoppinsRegular16"
                    >
                      Drag & Drop File Here
                    </Text>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer min-w-[131px] md:ml-[0] ml-[628px] mt-[33px] rounded-[22px] text-[17px] text-center"
                  size="sm"
                  variant="gradient"
                  color="indigo_900_indigo_A700"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default JobapplicationformOnePage;
