import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import AboutUsStackloremipsum from "components/AboutUsStackloremipsum";
import Footer from "components/Footer";

const AboutusPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto w-full">
        <div className="h-[618px] md:px-5 relative w-full">
          <div className="font-poppins sm:h-[319px] h-[350px] md:h-[621px] mb-[-31.02px] ml-auto w-[96%] md:w-full z-[1]">
            <Img
              className="absolute h-[350px] inset-y-[0] my-auto object-cover right-[0] w-[30%]"
              src="images/img_ellipse2_350x488.png"
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
                        size="txtPoppinsSemiBold19"
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
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="h-72 md:h-[229px] md:mt-0 mt-[11px] relative w-[37%] md:w-full">
                <Img
                  className="absolute h-[229px] left-[0] object-cover top-[0]"
                  src="images/img_group57.png"
                  alt="groupFiftySeven"
                />
                <Img
                  className="absolute bottom-[0] h-[140px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_ellipse1_140x627.png"
                  alt="ellipseOne"
                />
              </div>
              <Text
                className="capitalize mb-[188px] md:ml-[0] ml-[55px] md:text-5xl text-[85px] text-center text-indigo-900"
                size="txtAgrandirTextBold85"
              >
                About us
              </Text>
              <div className="h-[139px] md:ml-[0] ml-[545px] md:mt-0 mt-40 relative w-[8%] md:w-full">
                <Img
                  className="h-[139px] m-auto object-cover w-full"
                  src="images/img_ellipse1_139x136.png"
                  alt="ellipseOne_One"
                />
                <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                  <Img
                    className="h-[123px] m-auto object-cover w-full"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                    <Img
                      className="h-[108px] m-auto object-cover w-full"
                      src="images/img_ellipse3.png"
                      alt="ellipseThree"
                    />
                    <Img
                      className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1545px] mt-[109px] mx-auto md:px-5">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
                size="txtAgrandirTextBold53"
              >
                Our Client say about us
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-[38px] text-gray-500 text-justify text-lg "
                size="txtPoppinsRegular18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been
                </>
              </Text>
              <Text
                className="capitalize leading-[189.50%] mt-7 text-gray-500 text-justify text-lg "
                size="txtPoppinsRegular18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </>
              </Text>
            </div>
            <div className="md:h-[379px] h-[453px] relative w-2/5 md:w-full">
              <Img
                className="absolute h-[379px] object-cover right-[0] rounded-[54px] top-[0] w-[92%]"
                src="images/img_blogpic1.png"
                alt="blogpicOne"
              />
              <Img
                className="absolute bottom-[0] h-[194px] left-[0] object-cover rounded-[54px] w-[49%]"
                src="images/img_11.png"
                alt="Eleven"
              />
            </div>
          </div>
        </div>
        <div className="h-[572px] md:h-[702px] max-w-[1545px] mt-[130px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[572px] m-auto object-cover rounded-[87px] w-full"
            src="images/img_rectangle23.png"
            alt="rectangleTwentyThree"
          />
          <div className="absolute flex flex-col gap-9 h-max inset-[0] items-center justify-center m-auto w-[89%]">
            <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
              size="txtAgrandirTextBold53WhiteA700"
            >
              Relating To Us{" "}
            </Text>
            <div className="flex flex-col font-poppins gap-[42px] items-center justify-start w-full">
              <Text
                className="capitalize leading-[189.50%] text-justify text-white-A700 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printingLorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry&#39;s standard dummy text ever since the 1500s
                  Lorem Ipsum is simply dummy text of the printingLorem Ipsum is
                  simply dummy text of the printing and typesetting industry.{" "}
                </>
              </Text>
              <Text
                className="capitalize leading-[189.50%] text-justify text-white-A700 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printingLorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry&#39;s standard dummy tex
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start max-w-[1545px] mt-[130px] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[609px] sm:h-auto object-cover rounded-[53px] w-[57%] md:w-full"
            src="images/img_image4.png"
            alt="imageFour"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start w-[41%] md:w-full">
            <Text
              className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900 w-full"
              size="txtAgrandirTextBold53"
            >
              Mission & Values Of Your Law Consult Firm
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[23px] text-gray-500 text-justify text-lg w-full"
              size="txtPoppinsRegular18"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing
              </>
            </Text>
            <Text
              className="capitalize leading-[189.50%] mt-[22px] text-gray-500 text-justify text-lg w-full"
              size="txtPoppinsRegular18"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s
              </>
            </Text>
            <div className="flex sm:flex-col flex-row font-agrandir gap-8 items-center justify-between mt-[52px] w-full">
              <div className="bg-gradient1  flex flex-col items-center justify-start p-3 rounded-[31px]">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-white-A700"
                  size="txtAgrandirTextBold53WhiteA700"
                >
                  25+
                </Text>
                <Text
                  className="capitalize mb-[7px] mt-1 text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                  size="txtAgrandirTextBold22"
                >
                  Apps Complete
                </Text>
              </div>
              <div className="bg-gray-50_01 flex flex-col gap-[19px] items-center justify-start p-[17px] rounded-[31px]">
                <Text
                  className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-center text-indigo-900 text-shadow-ts"
                  size="txtAgrandirTextBold53"
                >
                  50+
                </Text>
                <Text
                  className="capitalize mb-1 text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                  size="txtAgrandirRegular22"
                >
                  Website Live
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[46px] items-start justify-start max-w-[1553px] mt-[124px] mx-auto md:px-5 w-full">
          <Text
            className="capitalize sm:text-[39px] md:text-[45px] text-[53px] text-indigo-900"
            size="txtAgrandirTextBold53"
          >
            Our team members
          </Text>
          <List
            className="sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center ml-0.5 md:ml-[0] w-full"
            orientation="horizontal"
          >
            {new Array(3).fill({}).map((props, index) => (
              <React.Fragment key={`AboutUsStackloremipsum${index}`}>
                <AboutUsStackloremipsum
                  className="md:h-[599px] h-[668px] relative w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
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

export default AboutusPage;
