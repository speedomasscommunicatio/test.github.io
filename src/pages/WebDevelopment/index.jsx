import React from "react";

import { Button, Img, Line, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";

const WebDevelopmentPage = () => {
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
          <div className="flex flex-col items-center justify-start overflow-auto w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-4 h-[755px] items-start justify-start sm:pr-5 pr-[37px] pt-[37px] w-full"
              style={{ backgroundImage: "url('images/img_banner.png')" }}
            >
              <div className="md:h-[572px] h-[654px] md:mt-0 mt-16 md:px-5 relative w-[58%] md:w-full">
                <div className="absolute bottom-[0] font-agrandir h-[572px] left-[0] w-[78%] md:w-full">
                  <div className="h-[572px] m-auto w-full">
                    <Img
                      className="h-[572px] m-auto object-cover w-full"
                      src="images/img_ellipse1_9.png"
                      alt="ellipseOne"
                    />
                    <Text
                      className="absolute capitalize left-[10%] sm:text-[31px] md:text-[37px] text-[41px] text-yellow-700 top-[1%]"
                      size="txtAgrandirRegular41"
                    >
                      Modern Web Development
                    </Text>
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[179px] items-start justify-start left-[10%] top-[9%] w-[66%]">
                    <Text
                      className="capitalize md:text-5xl text-[92px] text-indigo-900"
                      size="txtAgrandirTextBold92"
                    >
                      Innovations
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
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </>
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
              <Img
                className="h-[500px] md:mt-0 mt-[109px]"
                src="images/img_coder.svg"
                alt="opensourcebro"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start max-w-[1565px] mt-[110px] mx-auto md:px-5 w-full">
              <div className="md:h-[534px] h-[562px] p-3 relative w-[33%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-[93%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col gap-[23px] justify-start">
                      <div className="md:h-[205px] h-[235px] md:ml-[0] ml-[70px] relative w-[67%]">
                        <div className="md:h-[205px] h-[235px] m-auto w-full">
                          <div className="md:h-[205px] h-[235px] m-auto w-full">
                            <div className="absolute md:h-[205px] h-[231px] inset-[0] justify-center m-auto w-full">
                              <div className="md:h-[205px] h-[231px] m-auto w-full">
                                <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                                  <div className="flex flex-row gap-[17px] items-center justify-end md:ml-[0] ml-[67px] w-[19%] md:w-full">
                                    <Img
                                      className="h-2.5"
                                      src="images/img_vector_white_a700.svg"
                                      alt="vector"
                                    />
                                    <Img
                                      className="h-2.5"
                                      src="images/img_vector_white_a700.svg"
                                      alt="vector_One"
                                    />
                                  </div>
                                  <div className="md:h-[195px] h-[206px] mt-0.5 relative w-full">
                                    <div className="absolute md:h-[193px] h-[201px] inset-[0] justify-center m-auto w-full">
                                      <div className="absolute md:h-[193px] h-[198px] inset-[0] justify-center m-auto w-full">
                                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                          <div className="flex flex-row items-start justify-evenly w-full">
                                            <div className="flex flex-col items-center justify-start mt-0.5 w-[70%]">
                                              <div className="flex flex-col md:gap-10 gap-[145px] items-center justify-start w-full">
                                                <Img
                                                  className="h-[38px]"
                                                  src="images/img_television_yellow_700_38x20.svg"
                                                  alt="television"
                                                />
                                                <Img
                                                  className="h-[7px]"
                                                  src="images/img_eye.svg"
                                                  alt="eye"
                                                />
                                              </div>
                                            </div>
                                            <Img
                                              className="h-[67px]"
                                              src="images/img_bookmark.svg"
                                              alt="bookmark"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-7 right-[0] top-[22%]"
                                          src="images/img_maximize_white_a700.svg"
                                          alt="maximize"
                                        />
                                        <Img
                                          className="absolute h-[61px] right-[27%] top-[0]"
                                          src="images/img_thumbsup_yellow_700_61x46.svg"
                                          alt="thumbsup"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-[17px] right-[35%] top-[0]"
                                        src="images/img_television_white_a700_17x24.svg"
                                        alt="television_One"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[21px] right-[39%] top-[0]"
                                      src="images/img_bookmark_white_a700.svg"
                                      alt="bookmark_One"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-8 right-[36%] top-[0]"
                                  src="images/img_contrast_white_a700.svg"
                                  alt="contrast"
                                />
                              </div>
                              <Img
                                className="absolute h-[9px] right-[35%] top-[4%]"
                                src="images/img_vector_indigo_900_9x2.svg"
                                alt="vector_Two"
                              />
                            </div>
                            <Img
                              className="absolute h-5 right-[34%] top-[0]"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                            <Img
                              className="absolute bottom-[3%] h-[132px] right-[22%]"
                              src="images/img_vector_indigo_900_132x60.svg"
                              alt="vector_Three"
                            />
                          </div>
                          <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[135px] items-start justify-start right-[15%] w-[58%]">
                            <div className="flex flex-row gap-[54px] items-start justify-start w-[92%] md:w-full">
                              <Img
                                className="h-2"
                                src="images/img_thumbsup_white_a700_8x10.svg"
                                alt="thumbsup_One"
                              />
                              <Img
                                className="h-[9px] w-2.5"
                                src="images/img_upload.svg"
                                alt="upload"
                              />
                            </div>
                            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] w-[97%] md:w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[9px] items-center justify-end pt-[7px] w-[22%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group11.svg')",
                                }}
                              >
                                <Img
                                  className="h-px"
                                  src="images/img_vector_white_a700_1x16.svg"
                                  alt="vector_Four"
                                />
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[9px] items-center justify-end pt-[7px] w-[22%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group11.svg')",
                                }}
                              >
                                <Img
                                  className="h-px"
                                  src="images/img_vector_white_a700_1x16.svg"
                                  alt="vector_Five"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[25px] left-[28%] top-[35%]"
                          src="images/img_television_white_a700_25x27.svg"
                          alt="television_Two"
                        />
                      </div>
                      <div className="md:h-[132px] sm:h-[197px] h-[276px] relative w-[48%]">
                        <div className="absolute md:h-[132px] sm:h-[197px] h-[276px] inset-[0] justify-center m-auto w-[98%]">
                          <div className="flex flex-col md:gap-10 gap-[126px] h-full items-center justify-start m-auto w-full">
                            <div className="md:h-16 h-[134px] relative w-[68%]">
                              <div className="flex flex-row gap-4 h-full items-start justify-between ml-[7px] mt-[51px] w-[35%]">
                                <Img
                                  className="h-2 mt-1"
                                  src="images/img_vector_white_a700_8x4.svg"
                                  alt="vector_Six"
                                />
                                <Img
                                  className="h-[9px] mb-1"
                                  src="images/img_vector_white_a700_8x4.svg"
                                  alt="vector_Seven"
                                />
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto pr-0.5 pt-0.5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group14.svg')",
                                }}
                              >
                                <div
                                  className="bg-cover bg-no-repeat h-[113px] md:h-[46px] mt-[17px] p-[7px] relative w-[99%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group18.svg')",
                                  }}
                                >
                                  <div className="absolute h-11 md:h-[29px] left-[14%] top-[20%] w-[37%]">
                                    <div className="absolute bottom-[0] h-[18px] right-[0] w-[18px]">
                                      <Img
                                        className="absolute bottom-[0] h-[17px] inset-x-[0] mx-auto w-[18px]"
                                        src="images/img_settings_white_a700_17x18.svg"
                                        alt="settings"
                                      />
                                      <Img
                                        className="absolute h-[18px] inset-y-[0] left-[11%] my-auto"
                                        src="images/img_vector.svg"
                                        alt="vector_Eight"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[29px] left-[0] top-[0]"
                                      src="images/img_contrast_white_a700_29x19.svg"
                                      alt="contrast_One"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-[22px] left-[6%] top-[17%] w-[21px]"
                                    src="images/img_television_indigo_900_22x21.svg"
                                    alt="television_Three"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-[15px] relative w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[9px] items-center justify-start mb-[-3.18px] ml-3 pt-[7px] w-[18%] z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group17.svg')",
                                }}
                              >
                                <Img
                                  className="h-0.5"
                                  src="images/img_vector_white_a700_2x17.svg"
                                  alt="vector_Nine"
                                />
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-2.5 items-center justify-start mb-[-3.18px] ml-auto mr-6 pt-[7px] w-[19%] z-[1]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group17.svg')",
                                }}
                              >
                                <Img
                                  className="h-0.5"
                                  src="images/img_vector_white_a700_2x17.svg"
                                  alt="vector_Ten"
                                />
                              </div>
                              <Img
                                className="h-[7px] mt-auto mx-auto"
                                src="images/img_eye.svg"
                                alt="eye_One"
                              />
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[5%] flex flex-col h-[135px] items-end justify-start left-[13%] p-5 w-[55%]"
                            style={{
                              backgroundImage: "url('images/img_group13.svg')",
                            }}
                          >
                            <Line className="bg-white-A700 h-[17px] mb-[69px] mt-1.5 w-px" />
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[45px] items-end justify-start sm:pl-5 pl-[37px] pt-[37px] right-[0] top-[30%] w-[84%]"
                          style={{
                            backgroundImage: "url('images/img_group15.svg')",
                          }}
                        >
                          <Img
                            className="h-[7px]"
                            src="images/img_settings_white_a700_7x17.svg"
                            alt="settings_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[225px]"
                      src="images/img_freepikcharac.svg"
                      alt="freepikcharac"
                    />
                  </div>
                </div>
                <Img
                  className="absolute bottom-[3%] h-[423px] left-[19%]"
                  src="images/img_freepikiconsinject67.svg"
                  alt="freepikiconsinj"
                />
              </div>
              <div className="flex md:flex-1 flex-col gap-7 items-center justify-start w-[63%] md:w-full">
                <div className="flex flex-col font-agrandir items-center justify-start">
                  <Text
                    className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                    size="txtAgrandirTextBold53"
                  >
                    <>
                      Partner with Us for Your Next Web
                      <br />
                      Development Project
                    </>
                  </Text>
                </div>
                <Text
                  className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify"
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1486px] mt-[130px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-row gap-[21px] items-center justify-start w-[22%] md:w-full">
                <Text
                  className="bg-blue-A400 capitalize flex h-[59px] items-center justify-center rounded-[29px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-white-A700 w-[59px]"
                  size="txtAgrandirTextBold33"
                >
                  1
                </Text>
                <Text
                  className="capitalize sm:text-[27px] md:text-[29px] text-[31px] text-indigo-900"
                  size="txtAgrandirTextBold31"
                >
                  Fully Responsive
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-[21px] items-center justify-center md:ml-[0] ml-[65px] w-1/5 md:w-full">
                <Text
                  className="bg-red-500 capitalize flex h-[59px] items-center justify-center rounded-[29px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-white-A700 w-[59px]"
                  size="txtAgrandirTextBold33"
                >
                  2
                </Text>
                <Text
                  className="capitalize sm:text-[27px] md:text-[29px] text-[31px] text-indigo-900"
                  size="txtAgrandirTextBold31"
                >
                  Device Testing
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-[21px] items-center justify-center md:ml-[0] ml-[91px] w-[21%] md:w-full">
                <Text
                  className="bg-indigo-A700 capitalize flex h-[59px] items-center justify-center rounded-[29px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-white-A700 w-[59px]"
                  size="txtAgrandirTextBold33"
                >
                  3
                </Text>
                <Text
                  className="capitalize sm:text-[27px] md:text-[29px] text-[31px] text-indigo-900"
                  size="txtAgrandirTextBold31"
                >
                  Clean & Modern
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[70px] w-[23%] md:w-full">
                <Text
                  className="bg-amber-700 capitalize flex h-[59px] items-center justify-center rounded-[29px] sm:text-[29px] md:text-[31px] text-[33px] text-center text-white-A700 w-[59px]"
                  size="txtAgrandirTextBold33"
                >
                  4
                </Text>
                <Text
                  className="capitalize sm:text-[27px] md:text-[29px] text-[31px] text-indigo-900"
                  size="txtAgrandirTextBold31"
                >
                  Great Experience
                </Text>
              </div>
            </div>
            <div className="h-[532px] md:h-[662px] max-w-[1545px] mt-[130px] mx-auto md:px-5 relative w-full">
              <Img
                className="h-[532px] m-auto object-cover rounded-[87px] w-full"
                src="images/img_rectangle23_532x1545.png"
                alt="rectangleTwentyThree"
              />
              <div className="absolute flex flex-col gap-11 h-max inset-[0] items-center justify-center m-auto">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
                  size="txtAgrandirTextBold53WhiteA700"
                >
                  <>Challenges into Opportunities with Our Expertise</>
                </Text>
                <Text
                  className="capitalize leading-[189.50%] text-center text-white-A700 text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500sLorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&#39;s standard
                    dummy text ever since the 1500sLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry&#39;s standard dummy text ever since
                    the 1500s Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500sLorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&#39;s standard
                    dummy text ever since the 1500sLorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry&#39;s standard dummy text ever since
                    the 1500s
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1549px] mt-[129px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[26px] items-end justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[94px] items-start justify-start w-[52%] md:w-full">
                  <div className="flex flex-col gap-[51px] items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                        size="txtAgrandirTextBold53"
                      >
                        Our Web development Portfolio
                      </Text>
                    </div>
                    <div className="bg-gray-200_03 flex flex-col items-center justify-end p-[158px] md:px-10 sm:px-5 rounded-[53px] w-[92%] md:w-full">
                      <div className="bg-gradient1  flex flex-col h-20 items-center justify-start p-3 rounded-[50%] shadow-bs10 w-20">
                        <Img
                          className="h-14 w-14"
                          src="images/img_pepiconspopplus_white_a700.svg"
                          alt="pepiconspopplus"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200_03 flex flex-col items-center justify-start p-[212px] md:px-10 sm:px-5 rounded-[53px] w-[92%] md:w-full">
                    <div className="bg-gradient1  flex flex-col h-20 items-center justify-start p-3 rounded-[50%] shadow-bs10 w-20">
                      <Img
                        className="h-14 w-14"
                        src="images/img_pepiconspopplus_white_a700.svg"
                        alt="pepiconspopplus_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[89px] items-center justify-start md:mt-0 mt-[120px] w-[47%] md:w-full">
                  <div className="bg-gray-200_03 flex flex-col items-center justify-start p-[214px] md:px-10 sm:px-5 rounded-[53px] w-full">
                    <div className="bg-gradient1  flex flex-col h-20 items-center justify-start p-3 rounded-[50%] shadow-bs10 w-20">
                      <Img
                        className="h-14 w-14"
                        src="images/img_pepiconspopplus_white_a700.svg"
                        alt="pepiconspopplus_Two"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-200_03 flex flex-col items-center justify-start p-[159px] md:px-10 sm:px-5 rounded-[53px] w-full">
                    <div className="bg-gradient1  flex flex-col h-20 items-center justify-start p-3 rounded-[50%] shadow-bs10 w-20">
                      <Img
                        className="h-14 w-14"
                        src="images/img_pepiconspopplus_white_a700.svg"
                        alt="pepiconspopplus_Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[129px] md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                  size="txtAgrandirTextBold53"
                >
                  Web Development Reviews
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

export default WebDevelopmentPage;
