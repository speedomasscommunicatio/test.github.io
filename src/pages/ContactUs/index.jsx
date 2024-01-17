import React from "react";

import {
  Button,
  Img,
  Line,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";

const selectYourCountryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-agrandir items-center justify-start mx-auto w-full">
        <div className="h-[618px] md:px-5 relative w-full">
          <div className="font-poppins sm:h-80 h-[350px] md:h-[622px] mb-[-30.67px] ml-auto w-[96%] md:w-full z-[1]">
            <Img
              className="absolute h-[350px] inset-y-[0] my-auto object-cover right-[0] w-[30%]"
              src="images/img_ellipse2_3.png"
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
                        <Text size="txtPoppinsSemiBold19">Contact us</Text>
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
            <div className="md:h-[229px] h-[298px] relative w-[65%] md:w-full">
              <Text
                className="absolute capitalize right-[2%] md:text-5xl text-[85px] text-center text-indigo-900 top-[0]"
                size="txtAgrandirTextBold85"
              >
                Contact Us
              </Text>
              <div className="absolute font-poppins h-72 md:h-[229px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[229px] left-[0] object-cover top-[0]"
                  src="images/img_group57.png"
                  alt="groupFiftySeven"
                />
                <Img
                  className="absolute bottom-[0] h-[140px] left-[0] object-cover w-[57%]"
                  src="images/img_ellipse1_10.png"
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
            <div className="h-[139px] md:mt-0 mt-[159px] relative w-[8%] md:w-full">
              <Img
                className="h-[139px] m-auto object-cover w-full"
                src="images/img_ellipse1_11.png"
                alt="ellipseOne_One"
              />
              <div className="absolute bottom-[0] h-[123px] right-[0] w-[89%]">
                <Img
                  className="h-[123px] m-auto object-cover w-full"
                  src="images/img_ellipse2_2.png"
                  alt="ellipseTwo"
                />
                <div className="absolute bottom-[0] h-[108px] right-[0] w-[88%]">
                  <Img
                    className="h-[108px] m-auto object-cover w-full"
                    src="images/img_ellipse3_1.png"
                    alt="ellipseThree"
                  />
                  <Img
                    className="absolute bottom-[0] h-[91px] object-cover right-[0] w-[84%]"
                    src="images/img_ellipse4_1.png"
                    alt="ellipseFour"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900 flex font-poppins max-w-[1545px] mt-[110px] mx-auto outline outline-[4px] outline-indigo-900 md:px-5 relative rounded-[87px] shadow-bs11 w-full">
          <div className="flex flex-col items-center justify-start my-auto rounded-[87px] w-3/5">
            <div className="flex flex-col justify-start w-full">
              <div className="flex relative w-[65%] sm:w-full">
                <div className="font-poppins h-[295px] my-auto w-[53%]">
                  <Img
                    className="h-[295px] m-auto object-cover rounded-[87px] w-full"
                    src="images/img_ellipse808.png"
                    alt="ellipse808"
                  />
                  <div className="absolute bottom-[8%] flex flex-row gap-[37px] items-start justify-start right-[4%] rounded-[17px] w-[70%]">
                    <Img
                      className="h-[35px] rounded-[50%] w-[35px]"
                      src="images/img_bxsphonecall.svg"
                      alt="bxsphonecall"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtPoppinsRegular20"
                    >
                      +91 134 123456
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize ml-[-227px] mt-[84px] sm:text-[39px] md:text-[45px] text-[53px] text-white-A700 z-[1]"
                  size="txtAgrandirTextBold53WhiteA700"
                >
                  Contact Information
                </Text>
              </div>
              <div className="flex flex-col md:gap-10 gap-[73px] items-start justify-start md:ml-[0] ml-[81px] mt-[50px] w-3/5 md:w-full">
                <div className="flex flex-row gap-[37px] items-start justify-start rounded-[17px] w-[57%] md:w-full">
                  <Img
                    className="h-[35px] rounded-[50%] w-[35px]"
                    src="images/img_icsharpemail.svg"
                    alt="icsharpemail"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtPoppinsRegular20"
                  >
                    Info@speedomass.com
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-start w-full">
                  <Img
                    className="h-[35px] rounded-[50%] w-[35px]"
                    src="images/img_carbonlocationfilled.svg"
                    alt="carbonlocationf"
                  />
                  <Text
                    className="sm:flex-1 text-white-A700 text-xl w-[87%] sm:w-full"
                    size="txtPoppinsRegular20"
                  >
                    Location Here Location Here Location Here Location Here ,
                    India
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[35px] items-start justify-end md:ml-[0] ml-[73px] mt-[83px] w-[93%] md:w-full">
                <div className="flex flex-row gap-[29px] items-start justify-start md:mt-0 mt-[188px] rounded-[28px] w-auto">
                  <div className="h-14 relative rounded-[50%] w-14">
                    <Img
                      className="h-[35px] m-auto rounded-[50%] w-[35px]"
                      src="images/img_bxlfacebook_white_a700.svg"
                      alt="bxlfacebook"
                    />
                    <div className="absolute bg-white-A700_30 h-14 inset-[0] justify-center m-auto rounded-[50%] w-14"></div>
                  </div>
                  <Img
                    className="h-14 rounded-[50%] w-14"
                    src="images/img_info.svg"
                    alt="info"
                  />
                  <div className="h-14 relative rounded-[50%] w-14">
                    <Img
                      className="h-[30px] m-auto rounded-[50%] w-[30px]"
                      src="images/img_akariconslinkedinv2fill_white_a700.svg"
                      alt="akariconslinked"
                    />
                    <div className="absolute bg-white-A700_30 h-14 inset-[0] justify-center m-auto rounded-[50%] w-14"></div>
                  </div>
                  <Img
                    className="h-14 rounded-[50%] w-14"
                    src="images/img_close_white_a700.svg"
                    alt="close"
                  />
                </div>
                <div className="h-[302px] relative w-[59%] md:w-full">
                  <div className="absolute bg-indigo-900_04 h-[302px] inset-y-[0] my-auto right-[0] rounded-[219px] w-[89%]"></div>
                  <div className="absolute bg-indigo-900_06 bottom-[0] h-[122px] left-[0] rounded-[84px] w-[35%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-center ml-[-212px] my-auto p-12 md:px-10 sm:px-5 w-[55%] z-[1]">
            <div className="flex flex-col items-start justify-start my-[52px] w-[95%] md:w-full">
              <div className="flex flex-row items-center justify-between w-[66%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  First Name
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  Last Name
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[46px] items-start justify-between mt-[45px] w-full">
                <Line className="bg-gray-400_02 h-0.5 w-[47%]" />
                <Line className="bg-gray-400_02 h-0.5 w-[47%]" />
              </div>
              <div className="flex flex-row items-center justify-between mt-[34px] w-[71%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  Email
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  Phone Number
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[374px] mt-[11px] text-[17px] text-gray-500 uppercase"
                size="txtPoppinsMedium17"
              >
                +91 xxx xxx xxxx
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[47px] items-center justify-between mt-[9px] w-full">
                <Line className="bg-gray-400_02 h-0.5 w-[47%]" />
                <Line className="bg-gray-400_02 h-0.5 w-[47%]" />
              </div>
              <Text
                className="mt-[35px] text-base text-black-900"
                size="txtPoppinsMedium16"
              >
                Country Of Residence
              </Text>
              <SelectBox
                className="font-medium mt-[13px] pr-0.5 text-[17px] text-left w-full"
                placeholderClassName="text-gray-500"
                indicator={
                  <Img
                    className="h-[15px] mr-[0] w-[15px] rounded-[7px]"
                    src="images/img_teenyiconsdownsolid.svg"
                    alt="teenyicons:down-solid"
                  />
                }
                isMulti={false}
                name="group114"
                options={selectYourCountryOptionsList}
                isSearchable={false}
                placeholder="Select Your Country"
                color="gray_400_02"
                size="xs"
                variant="underline"
              />
              <div className="flex flex-col items-center justify-start mt-[52px] rounded-[33px] w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsSemiBold16"
                  >
                    Select Subject?
                  </Text>
                  <RadioGroup
                    selectedValue="GeneralInquiry"
                    className="flex w-full"
                    name="radiogroupgeneralinquiry"
                  >
                    <Radio
                      value="GeneralInquiry"
                      className="text-base text-black-900 text-left"
                      inputClassName="mr-[5px] rounded-[12px]"
                      checked={true}
                      name="radiogroupgeneralinquiry"
                      label="General Inquiry"
                      id="GeneralInquiry"
                    ></Radio>
                    <Radio
                      value="GeneralInquiry1"
                      className="ml-[27px] text-base text-gray-500 text-left"
                      inputClassName="mr-[5px] rounded-[12px]"
                      checked={true}
                      name="radiogroupgeneralinquiry"
                      label="General Inquiry1"
                      id="GeneralInquiry1"
                    ></Radio>
                    <Radio
                      value="GeneralInquiry2"
                      className="ml-[27px] text-base text-gray-500 text-left"
                      inputClassName="mr-[5px] rounded-[12px]"
                      checked={true}
                      name="radiogroupgeneralinquiry"
                      label="General Inquiry2"
                      id="GeneralInquiry2"
                    ></Radio>
                    <Radio
                      value="GeneralInquiry3"
                      className="ml-[27px] text-base text-gray-500 text-left"
                      inputClassName="mr-[5px] rounded-[12px]"
                      checked={true}
                      name="radiogroupgeneralinquiry"
                      label="General Inquiry3"
                      id="GeneralInquiry3"
                    ></Radio>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-16 items-start justify-start mt-[54px] rounded-[65px] w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsMedium16"
                >
                  Message
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-[17px] text-gray-500"
                    size="txtPoppinsMedium17"
                  >
                    Write your message..
                  </Text>
                  <Line className="bg-gray-400_02 h-0.5 rounded-[1px] w-full" />
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer min-w-[253px] md:ml-[0] ml-[447px] mt-[45px] rounded-[35px] text-[22px] text-center sm:text-lg md:text-xl"
                size="md"
                variant="gradient"
                color="indigo_900_indigo_A700"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-50 flex font-poppins items-center justify-center mt-[130px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
