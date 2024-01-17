import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const JobapplicationformPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto w-full">
        <div className="sm:h-[435px] h-[618px] md:h-[895px] md:px-5 relative w-full">
          <div className="h-[618px] m-auto w-full">
            <Img
              className="h-[140px] mb-[undefinedpx] mt-auto object-cover w-[37%] z-[1]"
              src="images/img_ellipse1_19.png"
              alt="ellipseOne_One"
            />
            <Img
              className="h-[350px] mb-[-24.36px] ml-auto object-cover w-[29%] z-[1]"
              src="images/img_ellipse2_11.png"
              alt="ellipseTwo_One"
            />
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[229px] md:h-auto mb-[59px] md:mt-0 mt-1 object-cover"
                  src="images/img_group57.png"
                  alt="groupFiftySeven"
                />
                <Text
                  className="capitalize md:text-5xl text-[85px] text-center text-indigo-900"
                  size="txtAgrandirTextBold85"
                >
                  Job application form
                </Text>
                <div className="h-[139px] md:mt-0 mt-[153px] relative w-[8%] md:w-full">
                  <Img
                    className="h-[139px] m-auto object-cover w-full"
                    src="images/img_ellipse1_18.png"
                    alt="ellipseOne"
                  />
                  <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                    <Img
                      className="h-[123px] m-auto object-cover w-full"
                      src="images/img_ellipse2_10.png"
                      alt="ellipseTwo"
                    />
                    <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                      <Img
                        className="h-[108px] m-auto object-cover w-full"
                        src="images/img_ellipse3_5.png"
                        alt="ellipseThree"
                      />
                      <Img
                        className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                        src="images/img_ellipse4_5.png"
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
        <div className="sm:h-[188px] md:h-[448px] h-[78px] max-w-[1570px] mt-[110px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[38px] ml-auto mr-[30px] my-auto w-[38px]"
            src="images/img_search_gray_400_02.svg"
            alt="search"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
            <Button
              className="cursor-pointer font-poppins h-[45px] rounded-[17px] text-[15px] text-center w-[191px]"
              color="gray_400_02"
              size="sm"
              variant="outline"
            >
              Category here
            </Button>
            <Button
              className="cursor-pointer font-poppins h-[45px] md:ml-[0] ml-[25px] rounded-[17px] text-[15px] text-center w-[190px]"
              color="gray_400_02"
              size="sm"
              variant="outline"
            >
              Category here
            </Button>
            <Button
              className="cursor-pointer font-poppins h-[45px] md:ml-[0] ml-[25px] rounded-[17px] text-[15px] text-center w-[191px]"
              color="gray_400_02"
              size="sm"
              variant="outline"
            >
              Category here
            </Button>
            <Button
              className="cursor-pointer font-poppins h-[45px] md:ml-[0] ml-[25px] rounded-[17px] text-[15px] text-center w-[190px]"
              color="gray_400_02"
              size="sm"
              variant="outline"
            >
              Category here
            </Button>
            <Input
              name="groupNinetyFour"
              placeholder="Search here..."
              className="font-urbanist p-0 placeholder:text-gray-400_02 text-[19px] text-left tracking-[0.19px] w-full"
              wrapClassName="md:flex-1 md:ml-[0] ml-[65px] rounded-[24px] w-[43%] md:w-full"
              color="gray_400_02"
              size="sm"
              variant="outline"
            ></Input>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1569px] mt-[54px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[54px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[47px] items-start justify-start w-[58%] md:w-full">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                  size="txtAgrandirTextBold53"
                >
                  Popular Posts
                </Text>
                <div className="flex flex-col font-poppins items-center justify-start w-full">
                  <div className="h-[467px] relative w-full">
                    <Img
                      className="h-[467px] m-auto object-cover rounded-tl-[34px] rounded-tr-[34px] w-full"
                      src="images/img_image.png"
                      alt="image_Eight"
                    />
                    <Button
                      className="absolute cursor-pointer h-[51px] left-[4%] rounded-[17px] text-[15px] text-center top-[6%] w-[172px]"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      Category here
                    </Button>
                  </div>
                  <div className="bg-indigo-900_05 flex flex-col font-agrandir items-center justify-start p-[30px] sm:px-5 rounded-bl-[34px] rounded-br-[34px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start mb-[7px] w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                        size="txtAgrandirTextBold30Indigo900"
                      >
                        Lorem Ipsum is simply dummy text Lorem Ipsum is
                        simply...
                      </Text>
                      <div className="flex flex-row font-poppins sm:gap-10 items-end justify-between w-full">
                        <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start w-[124px]">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_image_36x36.png"
                            alt="image_Nine"
                          />
                          <Text
                            className="text-base text-center text-gray-500 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            By Admin
                          </Text>
                        </div>
                        <Text
                          className="my-[5px] text-base text-right text-yellow-700"
                          size="txtPoppinsRegular16Yellow700"
                        >
                          Oct 25, 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[51px] items-start justify-start w-[41%] md:w-full">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                  size="txtAgrandirTextBold53"
                >
                  Recent Post
                </Text>
                <List
                  className="flex flex-col gap-[37px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-indigo-900_05 flex flex-1 flex-col items-end justify-start p-1.5 rounded-[34px] w-full">
                    <div className="flex flex-col gap-6 items-center justify-start my-[26px] w-[95%] md:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-indigo-900 w-full"
                        size="txtAgrandirTextBold30Indigo900"
                      >
                        Lorem Ipsum is simply dummy text Lorem Ipsum is
                        simply...
                      </Text>
                      <div className="flex flex-row font-poppins sm:gap-10 items-center justify-between w-[97%] md:w-full">
                        <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start w-[124px]">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_image_36x36.png"
                            alt="image"
                          />
                          <Text
                            className="text-base text-center text-gray-500 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            By Admin
                          </Text>
                        </div>
                        <Text
                          className="text-base text-right text-yellow-700"
                          size="txtPoppinsRegular16Yellow700"
                        >
                          Oct 25, 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-900_05 flex flex-1 flex-col items-end justify-start p-1.5 rounded-[34px] w-full">
                    <div className="flex flex-col gap-6 items-center justify-start my-[26px] w-[95%] md:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-indigo-900 w-full"
                        size="txtAgrandirTextBold30Indigo900"
                      >
                        Lorem Ipsum is simply dummy text Lorem Ipsum is
                        simply...
                      </Text>
                      <div className="flex flex-row font-poppins sm:gap-10 items-center justify-between w-[97%] md:w-full">
                        <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start w-[124px]">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_image_36x36.png"
                            alt="image"
                          />
                          <Text
                            className="text-base text-center text-gray-500 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            By Admin
                          </Text>
                        </div>
                        <Text
                          className="text-base text-right text-yellow-700"
                          size="txtPoppinsRegular16Yellow700"
                        >
                          Oct 25, 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-900_05 flex flex-1 flex-col items-end justify-start p-1.5 rounded-[34px] w-full">
                    <div className="flex flex-col gap-6 items-center justify-start my-[26px] w-[95%] md:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-indigo-900 w-full"
                        size="txtAgrandirTextBold30Indigo900"
                      >
                        Lorem Ipsum is simply dummy text Lorem Ipsum is
                        simply...
                      </Text>
                      <div className="flex flex-row font-poppins sm:gap-10 items-center justify-between w-[97%] md:w-full">
                        <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start w-[124px]">
                          <Img
                            className="h-9 md:h-auto rounded-[50%] w-9"
                            src="images/img_image_36x36.png"
                            alt="image"
                          />
                          <Text
                            className="text-base text-center text-gray-500 w-auto"
                            size="txtPoppinsRegular16"
                          >
                            By Admin
                          </Text>
                        </div>
                        <Text
                          className="text-base text-right text-yellow-700"
                          size="txtPoppinsRegular16Yellow700"
                        >
                          Oct 25, 2023
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Line className="bg-blue_gray-100_03 h-px w-full" />
            <div className="flex flex-col font-poppins items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[293px] relative w-full">
                        <Img
                          className="h-[293px] m-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                          src="images/img_image_293x494.png"
                          alt="image"
                        />
                        <Button
                          className="absolute cursor-pointer h-[37px] left-[6%] rounded-[17px] text-[13px] text-center top-[8%] w-32"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          Category here
                        </Button>
                      </div>
                      <div className="bg-gray-50_01 flex flex-col font-agrandir items-center justify-start p-[22px] sm:px-5 rounded-bl-[30px] rounded-br-[30px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-1 w-[98%] md:w-full">
                          <Text
                            className="capitalize text-[22px] text-indigo-900 sm:text-lg md:text-xl w-full"
                            size="txtAgrandirTextBold22Indigo900"
                          >
                            Lorem Ipsum is simply dummy text Lorem Ipsum is
                            simply dummy text
                          </Text>
                          <div className="flex flex-row font-poppins items-end justify-between w-full">
                            <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start rounded-[18px] w-[124px]">
                              <Img
                                className="h-9 md:h-auto rounded-[50%] w-9"
                                src="images/img_image_36x36.png"
                                alt="image_One"
                              />
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtPoppinsRegular16"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Text
                              className="mb-[3px] mt-[7px] text-base text-right text-yellow-700"
                              size="txtPoppinsRegular16Yellow700"
                            >
                              Oct 25, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[293px] relative w-full">
                        <Img
                          className="h-[293px] m-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                          src="images/img_image_2.png"
                          alt="image"
                        />
                        <Button
                          className="absolute cursor-pointer h-[37px] left-[6%] rounded-[14px] text-[13px] text-center top-[8%] w-32"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          Category here
                        </Button>
                      </div>
                      <div className="bg-gray-50_01 flex flex-col font-agrandir items-center justify-start p-[22px] sm:px-5 rounded-bl-[30px] rounded-br-[30px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-1 w-[98%] md:w-full">
                          <Text
                            className="capitalize text-[22px] text-indigo-900 sm:text-lg md:text-xl w-full"
                            size="txtAgrandirTextBold22Indigo900"
                          >
                            Lorem Ipsum is simply dummy text Lorem Ipsum is
                            simply dummy text
                          </Text>
                          <div className="flex flex-row font-poppins items-end justify-between w-full">
                            <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start rounded-[18px] w-[124px]">
                              <Img
                                className="h-9 md:h-auto rounded-[50%] w-9"
                                src="images/img_image_36x36.png"
                                alt="image_One"
                              />
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtPoppinsRegular16"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Text
                              className="mb-[3px] mt-[7px] text-base text-right text-yellow-700"
                              size="txtPoppinsRegular16Yellow700"
                            >
                              Oct 25, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[293px] relative w-full">
                        <Img
                          className="h-[293px] m-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                          src="images/img_image_3.png"
                          alt="image"
                        />
                        <Button
                          className="absolute cursor-pointer h-[37px] left-[6%] rounded-[14px] text-[13px] text-center top-[8%] w-32"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          Category here
                        </Button>
                      </div>
                      <div className="bg-gray-50_01 flex flex-col font-agrandir items-center justify-start p-[22px] sm:px-5 rounded-bl-[30px] rounded-br-[30px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-1 w-[98%] md:w-full">
                          <Text
                            className="capitalize text-[22px] text-indigo-900 sm:text-lg md:text-xl w-full"
                            size="txtAgrandirTextBold22Indigo900"
                          >
                            Lorem Ipsum is simply dummy text Lorem Ipsum is
                            simply dummy text
                          </Text>
                          <div className="flex flex-row font-poppins items-end justify-between w-full">
                            <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start rounded-[18px] w-[124px]">
                              <Img
                                className="h-9 md:h-auto rounded-[50%] w-9"
                                src="images/img_image_36x36.png"
                                alt="image_One"
                              />
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtPoppinsRegular16"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Text
                              className="mb-[3px] mt-[7px] text-base text-right text-yellow-700"
                              size="txtPoppinsRegular16Yellow700"
                            >
                              Oct 25, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[293px] relative w-full">
                        <Img
                          className="h-[293px] m-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                          src="images/img_image_5.png"
                          alt="image"
                        />
                        <Button
                          className="absolute cursor-pointer h-[37px] left-[6%] rounded-[17px] text-[13px] text-center top-[8%] w-32"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          Category here
                        </Button>
                      </div>
                      <div className="bg-gray-50_01 flex flex-col font-agrandir items-center justify-start p-[22px] sm:px-5 rounded-bl-[30px] rounded-br-[30px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-1 w-[98%] md:w-full">
                          <Text
                            className="capitalize text-[22px] text-indigo-900 sm:text-lg md:text-xl w-full"
                            size="txtAgrandirTextBold22Indigo900"
                          >
                            Lorem Ipsum is simply dummy text Lorem Ipsum is
                            simply dummy text
                          </Text>
                          <div className="flex flex-row font-poppins items-end justify-between w-full">
                            <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start rounded-[18px] w-[124px]">
                              <Img
                                className="h-9 md:h-auto rounded-[50%] w-9"
                                src="images/img_image_36x36.png"
                                alt="image_One"
                              />
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtPoppinsRegular16"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Text
                              className="mb-[3px] mt-[7px] text-base text-right text-yellow-700"
                              size="txtPoppinsRegular16Yellow700"
                            >
                              Oct 25, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[293px] relative w-full">
                        <Img
                          className="h-[293px] m-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                          src="images/img_image_6.png"
                          alt="image"
                        />
                        <Button
                          className="absolute cursor-pointer h-[37px] left-[6%] rounded-[14px] text-[13px] text-center top-[8%] w-32"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          Category here
                        </Button>
                      </div>
                      <div className="bg-gray-50_01 flex flex-col font-agrandir items-center justify-start p-[22px] sm:px-5 rounded-bl-[30px] rounded-br-[30px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-1 w-[98%] md:w-full">
                          <Text
                            className="capitalize text-[22px] text-indigo-900 sm:text-lg md:text-xl w-full"
                            size="txtAgrandirTextBold22Indigo900"
                          >
                            Lorem Ipsum is simply dummy text Lorem Ipsum is
                            simply dummy text
                          </Text>
                          <div className="flex flex-row font-poppins items-end justify-between w-full">
                            <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start rounded-[18px] w-[124px]">
                              <Img
                                className="h-9 md:h-auto rounded-[50%] w-9"
                                src="images/img_image_36x36.png"
                                alt="image_One"
                              />
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtPoppinsRegular16"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Text
                              className="mb-[3px] mt-[7px] text-base text-right text-yellow-700"
                              size="txtPoppinsRegular16Yellow700"
                            >
                              Oct 25, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[293px] relative w-full">
                        <Img
                          className="h-[293px] m-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-full"
                          src="images/img_image_7.png"
                          alt="image"
                        />
                        <Button
                          className="absolute cursor-pointer h-[37px] left-[6%] rounded-[14px] text-[13px] text-center top-[8%] w-32"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          Category here
                        </Button>
                      </div>
                      <div className="bg-gray-50_01 flex flex-col font-agrandir items-center justify-start p-[22px] sm:px-5 rounded-bl-[30px] rounded-br-[30px] w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-1 w-[98%] md:w-full">
                          <Text
                            className="capitalize text-[22px] text-indigo-900 sm:text-lg md:text-xl w-full"
                            size="txtAgrandirTextBold22Indigo900"
                          >
                            Lorem Ipsum is simply dummy text Lorem Ipsum is
                            simply dummy text
                          </Text>
                          <div className="flex flex-row font-poppins items-end justify-between w-full">
                            <div className="flex flex-row gap-3 h-9 md:h-auto items-center justify-start rounded-[18px] w-[124px]">
                              <Img
                                className="h-9 md:h-auto rounded-[50%] w-9"
                                src="images/img_image_36x36.png"
                                alt="image_One"
                              />
                              <Text
                                className="text-base text-center text-gray-500 w-auto"
                                size="txtPoppinsRegular16"
                              >
                                By Admin
                              </Text>
                            </div>
                            <Text
                              className="mb-[3px] mt-[7px] text-base text-right text-yellow-700"
                              size="txtPoppinsRegular16Yellow700"
                            >
                              Oct 25, 2023
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[391px] sm:h-[521px] md:h-[625px] max-w-[1563px] mt-[130px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[391px] m-auto object-cover rounded-[87px] w-full"
            src="images/img_rectangle24.png"
            alt="rectangleTwentyFour"
          />
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[15%] w-[76%]">
            <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
              size="txtAgrandirTextBold53WhiteA700"
            >
              join our newsletter
            </Text>
            <Text
              className="capitalize mt-[22px] text-center text-white-A700 text-xl"
              size="txtPoppinsRegular20"
            >
              Stay Informed and Inspired: Join Our Newsletter Today!
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[47px] w-full">
              <Text
                className="bg-white-A700_38 capitalize h-[82px] justify-center sm:px-5 px-[35px] py-[27px] rounded-[41px] text-lg text-white-A700 w-[295px]"
                size="txtPoppinsRegular18WhiteA700"
              >
                Full Name
              </Text>
              <Input
                name="groupForty"
                placeholder="Enter Your Email address ..."
                className="capitalize font-poppins p-0 placeholder:text-white-A700 text-left text-lg w-full"
                wrapClassName="md:flex-1 md:w-full"
                type="email"
                shape="round"
                color="white_A700_38"
                size="sm"
                variant="fill"
              ></Input>
              <Button
                className="!text-indigo-900 capitalize cursor-pointer font-agrandir font-bold leading-[normal] min-w-[295px] rounded-[41px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                color="white_A700"
                size="xl"
                variant="fill"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default JobapplicationformPage;
