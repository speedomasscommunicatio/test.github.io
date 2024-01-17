import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";

const Home = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-6 items-center justify-end mx-auto pt-[47px] w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-[34px] items-center justify-center w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[54px] md:h-auto ml-20 sm:mt-0 mt-[5px] object-cover ml-60"
                  src="images/img_speedomassfinal.png"
                  alt="speedomassfinal"
                />
                <ul className="flex md:flex-1 md:flex-col flex-row gap-[51px] md:hidden items-start justify-start sm:mt-0 mt-2.5 w-auto md:w-full common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize hover:font-semibold text-[19px] text-black-900"
                    >
                      <Text size="txtPoppinsSemiBold19">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize hover:font-semibold text-[19px] text-black-900"
                    >
                      <Text size="txtPoppinsRegular19">about us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize hover:font-semibold text-[19px] text-black-900"
                    >
                      <Text size="txtPoppinsRegular19">Services</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize hover:font-semibold text-[19px] text-black-900"
                    >
                      <Text size="txtPoppinsRegular19">Case studies</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize hover:font-semibold text-[19px] text-black-900"
                    >
                      <Text size="txtPoppinsRegular19">Portfolio</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="capitalize hover:font-semibold text-[19px] text-black-900"
                    >
                      <Text size="txtPoppinsRegular19">Contact us</Text>
                    </a>
                  </li>
                </ul>
                <Button
                  className="capitalize cursor-pointer min-w-[130px] rounded-[21px] text-center text-lg mr-20"
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
        </header>
        <div className="flex flex-col font-agrandir items-center justify-start overflow-auto w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-col flex-row md:gap-10 h-[755px] items-start justify-between md:pr-10 sm:pr-5 pr-[79px] pt-[79px] w-full"
            style={{ backgroundImage: "url('images/img_banner.png')" }}
          >
            <div className="h-[654px] md:mt-0 mt-[22px] relative w-3/5 md:w-full">
              <Text
                className="capitalize mb-[undefinedpx] ml-[20%] mt-[70px] md:text-5xl text-[92px] text-indigo-900 z-[1]"
                size="txtAgrandirTextBold92"
              >
                YOUR SOFTWARE
              </Text>
              <Img
                className="h-[47px] mb-[-7.61px] ml-auto mr-[349px] mt-[41px] w-[47px] z-[1]"
                src="images/img_user.svg"
                alt="user"
              />
              <Img
                className="h-[47px] mb-[undefinedpx] ml-[218px] w-[47px] z-[1]"
                src="images/img_user.svg"
                alt="user_One"
              />
              <div className="h-[572px] mt-auto mx-auto w-full">
                <div className="absolute font-poppins h-[572px] inset-y-[0] left-[0] my-auto w-[78%] md:w-full">
                  <Img
                    className="h-[572px] m-auto object-cover w-full"
                    src="images/img_ellipse1.png"
                    alt="ellipseOne"
                  />
                  <Button
                    className="absolute bottom-[16%] capitalize cursor-pointer left-[25%] min-w-[253px] text-[22px] text-center sm:text-lg md:text-xl"
                    shape="round"
                    size="md"
                    variant="gradient"
                    color="indigo_900_indigo_A700"
                  >
                    Discover More
                  </Button>
                </div>
                <Text
                  className="absolute capitalize leading-[189.50%] right-[0] mt-7 text-gray-500 text-justify text-lg top-[32%] w-[80%] sm:w-full"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry&#39;s standard dummy text ever since
                    the 1500s.
                  </>
                </Text>
                <Text
                  className="absolute capitalize left-[20%] sm:text-[31px] md:text-[37px] text-[41px] text-yellow-700 top-[0]"
                  size="txtAgrandirRegular41"
                >
                  We Built teams Thats Built
                </Text>
              </div>
            </div>
            <div className="font-poppins h-[593px] sm:h-[714px] md:mt-0 mt-[22px] relative w-[593px] sm:w-full">
              <Img
                className="h-[593px] m-auto object-cover rounded-[40px] w-[593px]"
                src="images/img_rectangle2.png"
                alt="rectangleTwo"
              />
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[82%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize text-[17px] text-white-A700"
                    size="txtPoppinsRegular17"
                  >
                    Enter Your Name
                  </Text>
                  <Line className="bg-white-A700 h-0.5 mt-[19px] w-[99%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[30px] w-full">
                    <Text
                      className="capitalize text-[17px] text-white-A700"
                      size="txtPoppinsRegular17"
                    >
                      Country Of Residence
                    </Text>
                    <Text
                      className="capitalize sm:ml-[0] ml-[127px] sm:mt-0 mt-0.5 text-right text-sm text-white-A700_86"
                      size="txtPoppinsRegular14"
                    >
                      Select your country
                    </Text>
                    <Img
                      className="h-6 sm:ml-[0] ml-[9px] w-6"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </div>
                  <Line className="bg-white-A700 h-0.5 mt-[18px] w-[99%]" />
                  <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between mt-[21px] w-[99%] md:w-full">
                    <Input
                      name="group130"
                      placeholder="email"
                      className="capitalize p-0 placeholder:text-white-A700 sm:pr-5 text-[17px] text-left w-full"
                      wrapClassName="pr-[35px] sm:w-full"
                      type="email"
                    ></Input>
                    <Input
                      name="group132"
                      placeholder="Phone"
                      className="capitalize p-0 placeholder:text-white-A700 sm:pr-5 text-[17px] text-left w-full"
                      wrapClassName="pr-[35px] sm:w-full"
                      type="number"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[21px] w-full">
                    <Text
                      className="capitalize text-[17px] text-white-A700"
                      size="txtPoppinsRegular17"
                    >
                      Service Required
                    </Text>
                    <Text
                      className="capitalize sm:ml-[0] ml-[180px] sm:mt-0 mt-1 text-right text-sm text-white-A700_86"
                      size="txtPoppinsRegular14"
                    >
                      Choose an option
                    </Text>
                    <Img
                      className="h-6 sm:ml-[0] ml-[9px] sm:mt-0 mt-0.5 w-6"
                      src="images/img_favorite.svg"
                      alt="favorite_One"
                    />
                  </div>
                  <Line className="bg-white-A700 h-0.5 ml-0.5 md:ml-[0] mt-[18px] w-[99%]" />
                  <Text
                    className="capitalize md:ml-[0] ml-[3px] mt-[21px] text-[17px] text-white-A700"
                    size="txtPoppinsRegular17"
                  >
                    Type your requirements here...
                  </Text>
                  <Line className="bg-white-A700 h-0.5 ml-0.5 md:ml-[0] mt-[74px] w-[99%]" />
                  <Text
                    className="bg-white-A700 capitalize h-[58px] justify-center ml-0.5 md:ml-[0] mt-[25px] sm:px-5 px-[35px] py-[15px] rounded-[15px] text-[17px] text-black-900 w-[478px] text-center"
                    size="txtPoppinsSemiBold17"
                  >
                    REQUEST A QUOTE
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1570px] mt-[110px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[25px] w-[52%] md:w-full">
              <Text
                className="capitalize sm:text-[29px] md:text-[31px] text-[33px] text-yellow-700"
                size="txtAgrandirRegular33"
              >
                About Our Company
              </Text>
              <Text
                className="capitalize mt-[7px] sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 w-full"
                size="txtAgrandirTextBold53"
              >
                <span className="text-indigo-900 font-agrandir text-left font-bold">
                  Stay up stay{" "}
                </span>
                <span className="text-indigo-900 font-agrandir text-left font-bold">
                  running stay protected
                </span>
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-[33px] text-gray-500 text-justify text-lg w-full"
                size="txtPoppinsRegular18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </>
              </Text>
              <div className="flex flex-col font-agrandir items-center justify-start mt-9 w-[87%] md:w-full">
                <div className="flex flex-col gap-[18px] justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-row gap-[17px] items-center justify-start w-[39%] sm:w-full">
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_basilawardoutline.svg"
                        alt="basilawardoutli"
                      />
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtAgrandirRegular30"
                      >
                        Award Winning
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[37%] sm:w-full">
                      <div className="flex flex-row gap-[26px] items-end justify-start w-full">
                        <Img
                          className="h-[46px] w-[46px]"
                          src="images/img_ri24hoursfill.svg"
                          alt="ri24hoursfill"
                        />
                        <Text
                          className="capitalize mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                          size="txtAgrandirRegular30"
                        >
                          24/7 Support
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[7px] w-[94%] md:w-full">
                    <div className="flex flex-row gap-[23px] items-start justify-start w-[48%] sm:w-full">
                      <Img
                        className="h-[37px] mt-[3px] w-[37px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtAgrandirRegular30"
                      >
                        Professional Staff
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[29px] items-center justify-start w-[33%] sm:w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_streamlinemone.svg"
                        alt="streamlinemone"
                      />
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                        size="txtAgrandirRegular30"
                      >
                        Fair Prices
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer font-poppins min-w-[192px] mt-[66px] text-center text-lg"
                shape="round"
                size="md"
                variant="gradient"
                color="indigo_900_indigo_A700"
              >
                Start a project
              </Button>
            </div>
            <div className="md:h-[570px] h-[625px] relative w-[43%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[570px] left-[0] object-cover rounded-[62px] w-[94%]"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <div className="absolute bg-gradient1  flex flex-col h-60 items-center justify-end p-[35px] sm:px-5 right-[0] rounded-[38px] shadow-bs1 top-[0] w-60">
                <div className="flex flex-col gap-[19px] items-center justify-start mt-1 w-[99%] md:w-full">
                  <Img
                    className="h-[62px]"
                    src="images/img_gameiconscrown.svg"
                    alt="gameiconscrown"
                  />
                  <Text
                    className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtAgrandirTextBold32"
                  >
                    <span className="md:text-[33px] sm:text-[31px] text-white-A700 font-agrandir text-[35px] font-bold">
                      <>
                        10 YEAR
                        <br />
                      </>
                    </span>
                    <span className="md:text-[28px] sm:text-[26px] text-white-A700 font-agrandir text-3xl font-normal">
                      Experience
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[129px] w-full">
            <div className="bg-indigo-900_05 flex flex-col items-center justify-start p-[73px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1454px] mb-0.5 mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-row gap-7 items-end justify-between w-[19%] md:w-full">
                    <Img
                      className="h-[76px] mb-[3px] mt-[13px]"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900 text-shadow-ts"
                        size="txtAgrandirTextBold61"
                      >
                        2013
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Founded Years
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-200 md:h-0.5 h-16 mb-3.5 md:mt-0 mt-[18px] w-0.5 md:w-full" />
                  <div className="flex flex-row gap-6 items-end justify-center">
                    <Img
                      className="h-[87px] mt-2"
                      src="images/img_materialsymbol_indigo_900.svg"
                      alt="materialsymbol_One"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900 text-shadow-ts"
                        size="txtAgrandirTextBold61"
                      >
                        50+
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Team member
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-200 md:h-0.5 h-16 mb-3.5 md:mt-0 mt-[18px] w-0.5 md:w-full" />
                  <div className="flex flex-row gap-6 items-center justify-center">
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900 text-shadow-ts"
                        size="txtAgrandirTextBold61"
                      >
                        550+
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Happy Customers
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-200 md:h-0.5 h-16 mb-3.5 md:mt-0 mt-[18px] w-0.5 md:w-full" />
                  <div className="flex md:flex-1 flex-row gap-4 items-end justify-between w-[21%] md:w-full">
                    <Img
                      className="h-[85px] mb-0.5 mt-2 w-[85px]"
                      src="images/img_carbonibmcloudprojects.svg"
                      alt="carbonibmcloudp"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="capitalize md:text-5xl text-[61px] text-indigo-900 text-shadow-ts"
                        size="txtAgrandirTextBold61"
                      >
                        500+
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtAgrandirRegular22"
                      >
                        Successful Projects
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
            <PagerIndicator
              className="flex h-[9px] md:ml-[0] ml-[888px] mt-[41px] w-[172px]"
              count={4}
              activeCss="inline-block cursor-pointer h-[9px] bg-indigo-900 w-[34px] rounded"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer h-[9px] bg-blue_gray-100_02 w-[35px] rounded"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[5.47px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[5.47px] sm:ml-[0]"
            />
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1603px] mt-[123px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-9 justify-start w-full">
              <Text
                className="capitalize md:ml-[0] ml-[34px] sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                Services
              </Text>
              <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                <div className="bg-gradient1  flex md:flex-1 flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 rounded-[38px] shadow-bs4 w-[35%] md:w-full">
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
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[38px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                        <div className="flex flex-row font-agrandir gap-[29px] items-center justify-start w-[88%] md:w-full">
                          <div className="bg-gradient1  flex flex-col items-center justify-start p-[19px] rounded-[51px] shadow-bs5 w-[101px]">
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
                            <span className="text-indigo-900 font-agrandir text-left font-normal">
                              <>
                                Website
                                <br />
                              </>
                            </span>
                            <span className="text-indigo-900 font-agrandir text-left font-bold">
                              Development
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                          size="txtPoppinsRegular19Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever since the
                            1500s
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[44px] w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start mb-5 w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row font-agrandir gap-[29px] items-center justify-start w-[93%] md:w-full">
                          <div className="bg-gradient1  flex flex-col items-center justify-start p-[19px] rounded-[51px] shadow-bs5 w-[101px] sm:w-full">
                            <Img
                              className="h-[63px] w-[62px]"
                              src="images/img_fluentmdl2website_white_a700.svg"
                              alt="fluentmdl2websi"
                            />
                          </div>
                          <Text
                            className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                            size="txtAgrandirTextBold35Indigo900"
                          >
                            <span className="text-indigo-900 font-agrandir text-left font-normal">
                              <>
                                Digital
                                <br />
                              </>
                            </span>
                            <span className="text-indigo-900 font-agrandir text-left font-bold">
                              Marketing
                            </span>
                          </Text>
                        </div>
                        <Text
                          className="capitalize leading-[189.50%] text-[19px] text-gray-500 text-justify w-full"
                          size="txtPoppinsRegular19Gray500"
                        >
                          <>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever since the
                            1500s
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="md:h-[1140px] h-[645px] sm:h-[775px] max-w-[1570px] mt-[130px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[645px] m-auto object-cover rounded-[87px] w-full"
              src="images/img_rectangle11.png"
              alt="rectangleEleven"
            />
            <div className="absolute flex md:flex-col flex-row gap-[57px] h-max inset-[0] items-start justify-center m-auto w-[90%]">
              <div className="flex flex-col gap-8 items-center justify-start md:mt-0 mt-0.5">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-white-A700 w-[99%] sm:w-full"
                  size="txtAgrandirTextBold53WhiteA700"
                >
                  <>Unleash Innovation: Let&#39;s Build Together!</>
                </Text>
                <Text
                  className="capitalize leading-[189.50%] text-[19px] text-justify text-white-A700"
                  size="txtPoppinsRegular19WhiteA700"
                >
                  <>
                    At Techoniq, we believe that true innovation flourishes when
                    collaboration is at the heart of every project. We pride
                    ourselves on working hand-in-hand with our clients, forging
                    strong partnerships that are built on trust, transparency,
                    and a shared vision for success.
                    <br />
                    <br />
                    When you choose to work with us, you&#39;re not just hiring
                    a software house – you&#39;re entering into a dynamic
                    collaboration that fuels groundbreaking solutions. We value
                    your input, insights, and expertise, recognizing that the
                    best ideas emerge when diverse perspectives converge.
                  </>
                </Text>
              </div>
              <Img
                className="h-[496px] sm:h-auto object-cover w-[32%] md:w-full"
                src="images/img_softwareright1.png"
                alt="softwarerightOne"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[1567px] mt-[129px] mx-auto md:px-5 w-full">
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
                    <div className="h-[103px] md:h-[91px] m-auto w-full">
                      <Img
                        className="absolute h-[91px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Img
                        className="absolute bottom-[0] h-7 right-[0]"
                        src="images/img_television_indigo_900.svg"
                        alt="television_One"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[12%] h-8 left-[28%] w-8"
                      src="images/img_thumbsup_yellow_700.svg"
                      alt="thumbsup_One"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[12%] h-3.5 object-cover right-[35%] w-3.5"
                    src="images/img_vector_14x14.png"
                    alt="vector"
                  />
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
          <div className="flex flex-col items-center justify-start max-w-[1570px] mt-[138px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[51%] md:w-full">
                <Text
                  className="capitalize sm:text-[29px] md:text-[31px] text-[33px] text-yellow-700"
                  size="txtAgrandirRegular33"
                >
                  What we do
                </Text>
                <Text
                  className="capitalize mt-[7px] sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 w-[95%] sm:w-full"
                  size="txtAgrandirTextBold53"
                >
                  <span className="text-indigo-900 font-agrandir text-left font-bold">
                    Perfect solution{" "}
                  </span>
                  <span className="text-indigo-900 font-agrandir text-left font-bold">
                    for your business
                  </span>
                </Text>
                <Text
                  className="capitalize leading-[189.50%] mt-[33px] text-gray-500 text-justify text-lg w-full"
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
                <Button
                  className="capitalize cursor-pointer font-poppins min-w-[188px] mt-[68px] text-center text-lg"
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="indigo_900_indigo_A700"
                >
                  Start a project
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[34px] items-center justify-start mb-[53px] sm:ml-[0] w-full">
                    <div className="bg-gradient1  flex flex-col h-[336px] items-start justify-center p-[34px] sm:px-5 rounded-[26px] shadow-bs1 w-[336px]">
                      <Img
                        className="h-[47px] mt-[9px] w-[47px]"
                        src="images/img_settings_white_a700.svg"
                        alt="settings"
                      />
                      <Text
                        className="capitalize mt-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                        size="txtAgrandirTextBold35"
                      >
                        Saas
                      </Text>
                      <Text
                        className="capitalize leading-[170.50%] mb-5 mt-1.5 text-justify text-sm text-white-A700 w-[99%] sm:w-full"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s
                        </>
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-[336px] items-start justify-center p-[33px] sm:px-5 rounded-[42px] shadow-bs6 w-[336px]">
                      <Img
                        className="h-[53px] mt-3 w-[53px]"
                        src="images/img_television_yellow_700.svg"
                        alt="television"
                      />
                      <Text
                        className="capitalize ml-0.5 md:ml-[0] mt-[22px] sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                        size="txtAgrandirTextBold35Indigo900"
                      >
                        Technology
                      </Text>
                      <Text
                        className="capitalize leading-[170.50%] mb-3.5 md:ml-[0] ml-[3px] mt-0.5 text-gray-500 text-justify text-sm w-[99%] sm:w-full"
                        size="txtPoppinsRegular14Gray500"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[34px] items-center justify-start sm:ml-[0] sm:mt-0 mt-[53px] w-full">
                    <div className="bg-white-A700 flex flex-col h-[336px] items-start justify-center p-[35px] sm:px-5 rounded-[42px] shadow-bs6 w-[336px]">
                      <Img
                        className="h-[55px] mt-[11px] w-[55px]"
                        src="images/img_nimbusmarketing.svg"
                        alt="nimbusmarketing"
                      />
                      <Text
                        className="capitalize mt-[19px] sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                        size="txtAgrandirTextBold35Indigo900"
                      >
                        Marketing
                      </Text>
                      <Text
                        className="capitalize leading-[170.50%] mb-[11px] mt-[3px] text-gray-500 text-justify text-sm w-full"
                        size="txtPoppinsRegular14Gray500"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s
                        </>
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-[336px] items-start justify-center p-[35px] sm:px-5 rounded-[42px] shadow-bs6 w-[336px]">
                      <Img
                        className="h-[51px] mt-3.5 w-[51px]"
                        src="images/img_claritydesignline.svg"
                        alt="claritydesignli"
                      />
                      <Text
                        className="capitalize mt-5 sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                        size="txtAgrandirTextBold35Indigo900"
                      >
                        Designing
                      </Text>
                      <Text
                        className="capitalize leading-[170.50%] mb-[11px] mt-[3px] text-gray-500 text-justify text-sm w-full"
                        size="txtPoppinsRegular14Gray500"
                      >
                        <>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s
                        </>
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="h-[403px] md:h-[533px] mt-[130px] md:px-5 relative w-full">
            <Img
              className="h-[403px] m-auto object-cover w-full"
              src="images/img_group231.png"
              alt="group231"
            />
            <div className="absolute flex flex-col gap-[37px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                Why Choose Us
              </Text>
              <Text
                className="capitalize leading-[189.50%] text-center text-gray-500 text-xl ml-60  mr-60 "
                size="txtPoppinsRegular20Gray500"
              >
                Choosing Techoniq means choosing a team that is dedicated to
                your success. We take the time to understand your unique goals
                and challenges, tailoring our services to suit your specific
                requirements. Our commitment to quality is unwavering, as we
                employ industry best practices and stay ahead of the latest
                trends to provide you with innovative solutions. With a focus on
                delivering results-driven outcomes, we strive to be the reliable
                partner you can count on for all your technology needs.
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[1570px] mt-[130px] mx-auto md:px-5 w-full">
            <div className="h-[513px] relative w-[51%] md:w-full">
              <Img
                className="h-[513px] m-auto object-cover rounded-[61px] w-full"
                src="images/img_rectangle8.png"
                alt="rectangleEight"
              />
              <Img
                className="absolute h-[78px] inset-[0] justify-center m-auto rounded-[50%] w-[78px]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
              <Text
                className="capitalize sm:text-[29px] md:text-[31px] text-[33px] text-yellow-700"
                size="txtAgrandirRegular33"
              >
                Join our
              </Text>
              <Text
                className="capitalize mt-1.5 sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                Community as an Investor
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-[33px] text-gray-500 text-justify text-lg w-full"
                size="txtPoppinsRegular18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </>
              </Text>
              <Button
                className="capitalize cursor-pointer font-poppins min-w-[188px] mt-[63px] text-center text-lg"
                shape="round"
                size="md"
                variant="gradient"
                color="indigo_900_indigo_A700"
              >
                get Started
              </Button>
            </div>
          </div>
          {/* <div className="flex flex-col md:gap-10 gap-16 items-start justify-start mt-[129px] md:px-5 w-full"> */}
            {/* <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
              size="txtAgrandirTextBold53"
            >
              Variety of Articles and Posts
            </Text>
            <div className="flex flex-col font-poppins relative w-[92%] md:w-full">
              <div className="flex flex-col items-start justify-start ml-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-[92%] md:w-full">
                  <div className="overflow-x-auto w-full">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      paddingRight={705}
                      activeIndex={sliderState1}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 1 },
                        1050: { items: 2 },
                      }}
                      onSlideChanged={(e) => {
                        setsliderState1(e?.item);
                      }}
                      ref={sliderRef1}
                      className="flex gap-20 w-full"
                      items={[...Array(8)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="h-[406px] mx-2.5 relative shadow-bs7">
                            <div className="absolute h-[406px] inset-y-[0] my-auto right-[0] w-[83%] md:w-full">
                              <Img
                                className="h-[406px] m-auto object-cover rounded-[64px] w-full"
                                src="images/img_rectangle3845.png"
                                alt="rectangle3845"
                              />
                              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[6%] w-[49%]">
                                <Text
                                  className="capitalize sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                                  size="txtAgrandirTextBold34"
                                >
                                  <>
                                    Game App
                                    <br />
                                    Development
                                  </>
                                </Text>
                                <Text
                                  className="capitalize leading-[189.50%] mt-[5px] text-[17px] text-justify text-white-A700 w-full"
                                  size="txtPoppinsRegular17"
                                >
                                  We develop Android and iOS apps using Flutter,
                                  with a focus on user experience and
                                  scalability. Our services include project
                                  scoping, UI design, development, and quality
                                  assurance.
                                </Text>
                                <Button
                                  className="!text-black-900 capitalize cursor-pointer font-medium font-poppins min-w-[155px] mt-4 rounded-[18px] shadow-bs8 text-[17px] text-center"
                                  color="white_A700"
                                  size="xs"
                                  variant="fill"
                                >
                                  Read More
                                </Button>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[315px] inset-y-[0] left-[0] my-auto object-cover rounded-[56px] w-1/2"
                              src="images/img_s1.png"
                              alt="s1"
                            />
                          </div>
                        </React.Fragment>
                      ))}
                      renderDotsItem={({ isActive }) => {
                        if (isActive) {
                          return (
                            <div className="inline-block cursor-pointer h-1.5 bg-indigo-900 w-[23px] rounded-[3px]" />
                          );
                        }
                        return (
                          <div
                            className="inline-block cursor-pointer h-1.5 bg-blue_gray-100_02 w-6 rounded-[3px]"
                            role="button"
                            tabIndex={0}
                          />
                        );
                      }}
                    /> */}
                  {/* </div>
                  <PagerIndicator
                    className="flex h-1.5 w-[120px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1.5 bg-indigo-900 w-[23px] rounded-[3px]"
                    activeIndex={sliderState1}
                    inactiveCss="inline-block cursor-pointer h-1.5 bg-blue_gray-100_02 w-6 rounded-[3px]"
                    sliderRef={sliderRef1}
                    selectedWrapperCss="inline-block md:ml-[0] mx-[3.81px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[3.81px] sm:ml-[0]"
                  />
                </div>
              </div> */}
              {/* <Button
                className="capitalize cursor-pointer min-w-[169px] ml-auto mr-[83px] mt-[-6.76px] text-center text-lg z-[1]"
                shape="round"
                size="md"
                variant="gradient"
                color="indigo_900_indigo_A700"
              >
                See More
              </Button>
            </div>
          </div> */}
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1564px] mt-[126px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[3px] w-[47%] md:w-full">
              <div className="md:h-[565px] h-[678px] relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat md:h-[565px] h-[678px] inset-[0] justify-center m-auto p-3.5 rounded-[339px] w-[98%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group68.svg')" }}
                >
                  <div className="absolute h-[565px] inset-[0] justify-center m-auto w-[83%] sm:w-full">
                    <Img
                      className="h-[565px] m-auto rotate-[-7deg] rounded-[50%] w-full"
                      src="images/img_vector2.svg"
                      alt="vectorTwo"
                    />
                    <div className="absolute flex flex-col gap-[21px] inset-x-[0] justify-start mx-auto top-[7%] w-[97%]">
                      <div className="flex flex-row gap-[262px] items-start justify-start mr-[79px] w-[86%] md:w-full">
                        <Img
                          className="h-[95px] md:h-auto mt-[23px] rounded-[50%] w-[95px]"
                          src="images/img_ellipse13.png"
                          alt="ellipseThirteen"
                        />
                        <Img
                          className="h-[129px] md:h-auto rounded-[50%] w-[129px]"
                          src="images/img_ellipse16.png"
                          alt="ellipseSixteen"
                        />
                      </div>
                      <div className="flex flex-row gap-[126px] items-start justify-end md:ml-[0] ml-[161px] w-[72%] md:w-full">
                        <Img
                          className="h-[204px] md:h-auto rounded-[50%] w-[204px]"
                          src="images/img_ellipse17.png"
                          alt="ellipseSeventeen"
                        />
                        <Img
                          className="h-[75px] md:h-auto mt-[85px] rounded-[50%] w-[75px]"
                          src="images/img_ellipse15.png"
                          alt="ellipseFifteen"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[2%] h-[84px] right-[26%] rounded-[50%] w-[84px]"
                    src="images/img_ellipse18.png"
                    alt="ellipseEighteen"
                  />
                </div>
                <Img
                  className="absolute bottom-[16%] h-[140px] left-[0] rounded-[50%] w-[140px]"
                  src="images/img_ellipse14.png"
                  alt="ellipseFourteen"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
              <Text
                className="capitalize sm:text-[29px] md:text-[31px] text-[33px] text-yellow-700"
                size="txtAgrandirRegular33"
              >
                Our Client Feedback
              </Text>
              <Text
                className="capitalize mt-2 sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 w-full"
                size="txtAgrandirTextBold53"
              >
                <span className="text-indigo-900 font-agrandir text-left font-bold">
                  We are happy to{" "}
                </span>
                <span className="text-indigo-900 font-agrandir text-left font-bold">
                  Say our client review
                </span>
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-[33px] text-gray-500 text-justify text-lg w-full"
                size="txtPoppinsRegular18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s
                </>
              </Text>
              <div className="h-[299px] md:h-[362px] sm:h-[443px] mt-[77px] relative w-full">
                <div className="absolute border-2 border-gray-200_01 border-solid flex flex-col font-poppins h-max inset-[0] items-center justify-center m-auto p-7 sm:px-5 rounded-[42px] w-full">
                  <div className="flex flex-col gap-[29px] items-center justify-start mb-[3px] mt-[53px] w-[98%] md:w-full">
                    <Text
                      className="capitalize leading-[189.50%] text-gray-500 text-justify text-lg w-full"
                      size="txtPoppinsRegular18"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s
                        Lorem Ipsum is simply dummy text of the printing...
                      </>
                    </Text>
                    <div className="flex sm:flex-col flex-row font-agrandir sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_ellipse20.png"
                            alt="ellipseTwenty"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="capitalize text-indigo-900 text-lg"
                              size="txtAgrandirTextBold18"
                            >
                              Brandon Farris
                            </Text>
                            <Text
                              className="capitalize text-indigo-900 text-sm"
                              size="txtAgrandirRegular14"
                            >
                              Berlin
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-[41px]"
                        src="images/img_group1000001845.svg"
                        alt="group1000001845"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute left-[4%] md:text-5xl text-[106px] text-indigo-900 top-[0]"
                  size="txtRobotoRomanRegular106"
                >
                  “
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[29px] w-full">
                <PagerIndicator
                  className="flex h-1.5 w-[120px]"
                  count={4}
                  activeCss="inline-block cursor-pointer h-1.5 bg-indigo-900 w-[23px] rounded-[3px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-1.5 bg-blue_gray-100_02 w-6 rounded-[3px]"
                  selectedWrapperCss="inline-block mx-[3.81px]"
                  unselectedWrapperCss="inline-block mx-[3.81px]"
                />
                <Img
                  className="h-[58px]"
                  src="images/img_group63.svg"
                  alt="groupSixtyThree"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      
    </>
  );
};

export default Home;