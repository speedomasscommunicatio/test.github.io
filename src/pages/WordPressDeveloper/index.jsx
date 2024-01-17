import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const WordPressDeveloperPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-agrandir sm:h-[435px] h-[618px] md:h-[826px] md:px-5 relative w-full">
            <div className="h-[618px] m-auto w-full">
              <Img
                className="h-[140px] mb-[undefinedpx] mt-auto object-cover w-[37%] z-[1]"
                src="images/img_ellipse1_15.png"
                alt="ellipseOne_One"
              />
              <Img
                className="h-[350px] mb-[-23.03px] ml-auto object-cover w-[29%] z-[1]"
                src="images/img_ellipse2_7.png"
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
                    WordPress Developer
                  </Text>
                  <div className="h-[139px] md:mt-0 mt-[152px] relative w-[8%] md:w-full">
                    <Img
                      className="h-[139px] m-auto object-cover w-full"
                      src="images/img_ellipse1_14.png"
                      alt="ellipseOne"
                    />
                    <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                      <Img
                        className="h-[123px] m-auto object-cover w-full"
                        src="images/img_ellipse2_6.png"
                        alt="ellipseTwo"
                      />
                      <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                        <Img
                          className="h-[108px] m-auto object-cover w-full"
                          src="images/img_ellipse3_3.png"
                          alt="ellipseThree"
                        />
                        <Img
                          className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                          src="images/img_ellipse4_3.png"
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
              <Img
                className="h-[47px] md:ml-[0] ml-[1205px] w-[47px]"
                src="images/img_user.svg"
                alt="user_One"
              />
            </div>
          </div>
          <Img
            className="h-[599px] sm:h-auto max-w-[1570px] mt-[110px] mx-auto object-cover rounded-[52px] w-full"
            src="images/img_rectangle2_599x1570.png"
            alt="rectangleTwo"
          />
          <div className="flex md:flex-col flex-row font-agrandir md:gap-10 items-start justify-between max-w-[1570px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[58%] md:w-full">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                WordPress Developer
              </Text>
              <List
                className="flex flex-col gap-9 mt-[42px] w-[85%]"
                orientation="vertical"
              >
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <Text
                    className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    Who Are We Looking For
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[2%] md:w-full">
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Nullam dictum ligula a gravida porta.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Nam pellentesque orci ut odio blandit, sit amet
                          elementum augue venenatis.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Vivamus semper magna suscipit leo malesuada, eu dictum
                          velit varius.
                        </Text>
                        <Text
                          className="capitalize mt-1.5 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Nulla non enim eu quam rutrum dictum in non urna.
                        </Text>
                        <Text
                          className="capitalize mt-[9px] text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Integer et felis a purus convallis condimentum nec vel
                          eros.
                        </Text>
                        <Text
                          className="capitalize mt-[7px] text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Vestibulum porta libero nec aliquet blandit.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Duis pretium sapien vitae felis tincidunt lobortis vel
                          et urna
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Cras ut erat eu ante suscipit rutrum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <Text
                    className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    What You Will Be Doing
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start ml-1 md:ml-[0] w-full">
                    <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[2%] md:w-full">
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                        <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Nullam dictum ligula a gravida porta.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Nam pellentesque orci ut odio blandit, sit amet
                          elementum augue venenatis.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Vivamus semper magna suscipit leo malesuada, eu dictum
                          velit varius.
                        </Text>
                        <Text
                          className="capitalize mt-1.5 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Nulla non enim eu quam rutrum dictum in non urna.
                        </Text>
                        <Text
                          className="capitalize mt-[9px] text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Integer et felis a purus convallis condimentum nec vel
                          eros.
                        </Text>
                        <Text
                          className="capitalize mt-[7px] text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Vestibulum porta libero nec aliquet blandit.
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Duis pretium sapien vitae felis tincidunt lobortis vel
                          et urna
                        </Text>
                        <Text
                          className="capitalize mt-2 text-[19px] text-gray-500 text-justify"
                          size="txtPoppinsRegular19Gray500"
                        >
                          Cras ut erat eu ante suscipit rutrum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[25px] items-start justify-start mt-9 w-[85%] md:w-full">
                <Text
                  className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                  size="txtAgrandirTextBold26Indigo900"
                >
                  Bonus Points for Familiarity with
                </Text>
                <div className="flex flex-col font-poppins items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[2%] md:w-full">
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Nullam dictum ligula a gravida porta.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Nam pellentesque orci ut odio blandit, sit amet
                        elementum augue venenatis.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Vivamus semper magna suscipit leo malesuada, eu dictum
                        velit varius.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Nulla non enim eu quam rutrum dictum in non urna.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start mt-[37px] w-full">
                <Text
                  className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                  size="txtAgrandirTextBold26Indigo900"
                >
                  Educational Requirement
                </Text>
                <Text
                  className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                  size="txtPoppinsRegular19Gray500"
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[35px] w-[69%] md:w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                  <Text
                    className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    Salary
                  </Text>
                  <div className="flex flex-col font-poppins gap-[9px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[13px] items-center justify-start w-full">
                      <div className="bg-gray-500 h-2 md:mt-0 my-2.5 rounded w-[9px]"></div>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Salary: 18,000 to 35,000 INR (Depends on Skill and
                        Experience)
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-start w-[37%] md:w-full">
                      <div className="bg-gray-500 h-2 mb-3 mt-2 rounded w-[9px]"></div>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Salary Review: Yearly
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start mt-9 w-[21%] md:w-full">
                <Text
                  className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                  size="txtAgrandirTextBold26Indigo900"
                >
                  Working Hours
                </Text>
                <div className="flex flex-row font-poppins gap-[13px] items-center justify-start w-3/4 md:w-full">
                  <div className="bg-gray-500 h-2 my-2.5 rounded w-[9px]"></div>
                  <Text
                    className="capitalize text-[19px] text-gray-500 text-justify"
                    size="txtPoppinsRegular19Gray500"
                  >
                    8 AM – 5 PM
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start mt-[38px] w-[31%] md:w-full">
                <Text
                  className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                  size="txtAgrandirTextBold26Indigo900"
                >
                  Working Days
                </Text>
                <div className="flex flex-col font-poppins gap-[7px] items-start justify-start w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-[63%] md:w-full">
                    <div className="bg-gray-500 h-2 my-2.5 rounded w-[9px]"></div>
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Weekly: 5 days.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="bg-gray-500 h-2 my-2.5 rounded w-[9px]"></div>
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Weekend: Friday.Saturday
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-poppins md:gap-10 gap-[62px] items-start justify-start w-[32%] md:w-full">
              <div className="bg-indigo-900_05 flex flex-col md:gap-10 gap-[71px] items-center justify-start p-[35px] sm:px-5 rounded-[43px] w-full">
                <Button
                  className="capitalize cursor-pointer min-w-[225px] mt-3 text-center text-xl"
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="indigo_900_indigo_A700"
                >
                  Apply now
                </Button>
                <div className="flex flex-col items-start justify-start mb-7 w-[82%] md:w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[3px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtAgrandirTextBold26Indigo900"
                  >
                    Job Summary
                  </Text>
                  <div className="flex flex-row font-rubik gap-[41px] items-center justify-start mt-9 w-full">
                    <Img
                      className="h-[43px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Location
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        Shouth Breeze Center,Banani11
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-rubik gap-9 items-center justify-start mt-[66px] w-[44%] md:w-full">
                    <Img
                      className="h-8"
                      src="images/img_thumbsup_indigo_900.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Job Type
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        Full Time
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-rubik gap-11 items-start justify-start mt-[66px] w-[72%] md:w-full">
                    <Img
                      className="h-[37px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Date posted
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        posted 1 month ago
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-rubik gap-[30px] items-center justify-start md:ml-[0] ml-[3px] mt-[66px] w-[73%] md:w-full">
                    <Img
                      className="h-[33px]"
                      src="images/img_settings_indigo_900.svg"
                      alt="settings"
                    />
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Experience
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        Experience: 1-3 year
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-rubik gap-[41px] items-center justify-start md:ml-[0] ml-[3px] mt-[66px] w-[58%] md:w-full">
                    <Button
                      className="flex h-8 items-center justify-center my-[9px] w-8"
                      shape="circle"
                      color="indigo_900"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_vector_indigo_900.svg"
                        alt="vector"
                      />
                    </Button>
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Working Hours
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        9 AM - 6 PM
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-rubik gap-9 items-center justify-start md:ml-[0] ml-[3px] mt-[66px] w-[90%] md:w-full">
                    <Img
                      className="h-[37px] w-[37px]"
                      src="images/img_thumbsup_indigo_900_37x37.svg"
                      alt="thumbsup_One"
                    />
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Working Days
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        <>
                          Weekly:5days
                          <br />
                          Weekend: Saturday,Sunday
                        </>
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row font-rubik gap-[45px] items-start justify-start md:ml-[0] ml-[3px] mt-[66px] w-[62%] md:w-full">
                    <Img
                      className="h-[41px] mt-[3px]"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                    <Text
                      className="leading-[24.00px] text-[17px] text-black-900"
                      size="txtRubikRegular17"
                    >
                      <span className="text-blue_gray-100_07 font-poppins text-left font-normal">
                        <>
                          Vacancy
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-900 font-poppins text-left font-normal">
                        No.of Vacancy:3
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[62px] text-indigo-900 text-xl underline"
                    size="txtPoppinsMedium20"
                  >
                    View all job
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-[63%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-[17px] text-gray-900_05"
                  size="txtPoppinsRegular17Gray90005"
                >
                  Share this:
                </Text>
                <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                  <div className="h-14 relative w-14">
                    <Img
                      className="h-[35px] m-auto w-[35px]"
                      src="images/img_bxlfacebook_indigo_900.svg"
                      alt="bxlfacebook"
                    />
                    <div className="absolute bg-indigo-900_11 h-14 inset-[0] justify-center m-auto rounded-[50%] w-14"></div>
                  </div>
                  <Img
                    className="h-14 w-14"
                    src="images/img_info_indigo_900.svg"
                    alt="info"
                  />
                  <div className="h-14 relative w-14">
                    <Img
                      className="h-[30px] m-auto w-[30px]"
                      src="images/img_akariconslinkedinv2fill_indigo_900.svg"
                      alt="akariconslinked"
                    />
                    <div className="absolute bg-indigo-900_11 h-14 inset-[0] justify-center m-auto rounded-[50%] w-14"></div>
                  </div>
                  <Img
                    className="h-14 w-14"
                    src="images/img_close_indigo_900.svg"
                    alt="close"
                  />
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col font-agrandir gap-[69px] mt-[33px] md:px-5 w-[44%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-start justify-start w-full">
                <Text
                  className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                  size="txtAgrandirTextBold26Indigo900"
                >
                  Perks & Benefits You’ll Get{" "}
                </Text>
                <div className="flex flex-col font-poppins items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[2%] md:w-full">
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                      <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Nullam dictum ligula a gravida porta.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Nam pellentesque orci ut odio blandit, sit amet
                        elementum augue venenatis.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Vivamus semper magna suscipit leo malesuada, eu dictum
                        velit varius.
                      </Text>
                      <Text
                        className="capitalize text-[19px] text-gray-500 text-justify"
                        size="txtPoppinsRegular19Gray500"
                      >
                        Nulla non enim eu quam rutrum dictum in non urna.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="self-center h-px bg-blue_gray-100_03 w-full" />
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <Text
                className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                size="txtAgrandirTextBold26Indigo900"
              >
                The Application Process
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-[2%] md:w-full">
                    <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                    <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                    <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                    <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                    <div className="bg-gray-500 h-2 rounded w-[9px]"></div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Nullam dictum ligula a gravida porta.
                    </Text>
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Nam pellentesque orci ut odio blandit, sit amet elementum
                      augue venenatis.
                    </Text>
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Vivamus semper magna suscipit leo malesuada, eu dictum
                      velit varius.
                    </Text>
                    <Text
                      className="capitalize text-[19px] text-gray-500 text-justify"
                      size="txtPoppinsRegular19Gray500"
                    >
                      Nulla non enim eu quam rutrum dictum in non urna.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[22px] items-start justify-start mt-[35px] md:px-5">
            <Text
              className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
              size="txtAgrandirTextBold26Indigo900"
            >
              Our Statement
            </Text>
            <Text
              className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
              size="txtPoppinsRegular19Gray500"
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going
            </Text>
          </div>
          <Button
            className="capitalize cursor-pointer font-poppins min-w-[253px] mt-[63px] text-[22px] text-center sm:text-lg md:text-xl"
            shape="round"
            size="md"
            variant="gradient"
            color="indigo_900_indigo_A700"
          >
            Apply now
          </Button>
          <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WordPressDeveloperPage;
