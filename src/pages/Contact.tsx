/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactInput from "../components/input/ContactInput";
import { initialValues, validationSchema } from "../validators/contact";
import { Field, Formik, FormikHelpers } from "formik";
import { IContact } from "../types/contact.model";
import SmallText from "../components/contact/SmallText";
import { useMediaQuery } from "react-responsive";
import Social from "../components/contact/Social";
import {
  GreyStar,
  PinkStar,
  PurpleStar,
  WhiteStar,
} from "../assets/icons/Stars";
import PurpleLensImage from "../assets/images/purle-lens.png";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/nav/Nav";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { useContactMutation } from "../app/services/apiServices";
import PurpleLens from "../assets/icons/PurpleLens";
import GoBackIcon from "../assets/icons/GoBackIcon";
import Reveal from "../components/utilis/Reveal";
import { toast } from "react-toastify";

const socialsItems = [
  {
    name: "instagram",
    icon: <BsInstagram className="text-white h-[18px] w-[18px]" />,
    link: "https://www.instagram.com",
  },
  {
    name: "Twitter",
    icon: <RiTwitterXFill className="text-white h-[18px] w-[18px]" />,
    link: "https://www.x.com",
  },
  {
    name: "Facebook",
    icon: <BiLogoFacebook className="text-white h-[18px] w-[18px]" />,
    link: "https://www.facebook.com",
  },
  {
    name: "LinkedIn",
    icon: <BiLogoLinkedin className="text-white h-[18px] w-[18px]" />,
    link: "https://www.linkedin.com",
  },
];

const Contact = () => {
  const [contact, { isLoading }] = useContactMutation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const onSubmit = async (
    values: IContact,
    { resetForm }: FormikHelpers<IContact>
  ) => {
    try {
      const loginResponse = await contact(values).unwrap();
      if (loginResponse) {
        resetForm();
        toast.success("Registeration successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error: any) {
      toast.error(error.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      resetForm();
    }
  };

  console.log(isLoading);
  return (
    <>
      {isDesktop && (
        <>
          <Nav />
          <div className="w-full h-screen pt-[145px] font-monteserat bg-secondary relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="max-w-[1037px] h-[950px] w-full absolute bottom-[80px] left-[-250px]">
                <PurpleLens />
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="max-w-[1037px] h-[950px] w-full absolute top-[268px] right-[-430px]">
                <PurpleLens />
              </div>
            </div>
            <div className="absolute bottom-[115px] right-[130px] max-w-[26px] h-[32px]">
              <WhiteStar />
            </div>
            <div className="absolute top-[170px] right-[235px] max-w-[30px] h-[36px]">
              <GreyStar />
            </div>
            <div className="absolute top-[200px] left-[205px] max-w-[30px] h-[36px]">
              <PurpleStar />
            </div>
            <div className="max-w-[1255px] w-full h-full mx-auto flex justify-between items-center px-[49px]">
              <div className=" w-full flex justify-between items-start gap-[30px]">
                <div className="pt-[56px] w-1/3 hidden md:block">
                  <Reveal>
                    <h3 className="text-[32px] font-[600] text-tertiary mb-[16px] font-clashDisplay">
                      Get in touch
                    </h3>
                  </Reveal>
                  <div className="flex flex-col mb-[17px]">
                    <Reveal>
                      <SmallText text="Contact" />
                    </Reveal>
                    <Reveal>
                      <SmallText text="Information" />
                    </Reveal>
                  </div>
                  <div className="flex flex-col mb-[21px]">
                    <Reveal>
                      <SmallText text="27, Alara street" />
                    </Reveal>
                    <Reveal>
                      <SmallText text="Yaba 100012" />
                    </Reveal>
                    <Reveal>
                      <SmallText text="Lagos State" />
                    </Reveal>
                  </div>
                  <Reveal>
                    <SmallText text="Call Us : 07067981819" />
                  </Reveal>

                  <div className="flex flex-col mt-[22px] mb-[35px]">
                    <Reveal>
                      <SmallText text="we are open from Monday-Friday" />
                    </Reveal>
                    <Reveal>
                      <SmallText text="08:00am - 05:00pm" />
                    </Reveal>
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-tertiary text-[16px] mb-[5px]">
                      Share on
                    </span>
                    <div className="flex gap-[14px] justify-center items-center">
                      {socialsItems.map((social, index) => {
                        return (
                          <Reveal>
                            <Link
                              key={index}
                              to={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-tertiary"
                            >
                              {social.icon}
                            </Link>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="relative max-w-[617px] shadow-none md:shadow-register md:bg-white/[0.03] bg-transparent  w-full md:w-2/3 rounded-[12px] flex justify-center items-center px-[20px] pt-[75px] pb-[67px]">
                  <div className="absolute bottom-[150px] left-[-13px] max-w-[26px] h-[32px]">
                    <PurpleStar />
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <div className="max-w-[437px] w-full mx-auto">
                        <div className="mb-[34px] flex flex-col gap-[7px] text-[20px] text-tertiary font-[600] font-clashDisplay">
                          <Reveal>
                            <h3>Questions or need assistance?</h3>
                          </Reveal>
                          <Reveal>
                            <h3>Let us know about it!</h3>
                          </Reveal>
                        </div>
                        <div className="flex flex-col gap-[42px]">
                          <ContactInput
                            name={"first_name"}
                            placeholder={"First Name"}
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.first_name}
                            error={errors.first_name}
                            touched={touched.first_name}
                          />
                          <ContactInput
                            name={"email"}
                            placeholder={"Mail"}
                            type={"email"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={errors.email}
                            touched={touched.email}
                          />
                          <div className="mb-[30px] relative">
                            <Field
                              name="message"
                              placeholder="Message"
                              component="textarea"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              touched={touched}
                              className="border-[1px] h-[119px] border-white bg-white/[0.03] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
                            />
                            {errors.message && touched.message && (
                              <p className="text-red-500 text-[12px] absolute">
                                {errors.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="max-w-[175px] w-full">
                            <button
                              type="submit"
                              onClick={() => handleSubmit()}
                              // disabled={!isValid}
                              className="w-full rounded-[4px] text-white py-[16px] hover:py-[14px] overflow-hidden flex justify-center items-center btnGradient text-[16px] hover:rounded-[4px]"
                            >
                              {isLoading && (
                                <svg
                                  aria-hidden="true"
                                  className="inline w-5 h-5 mr-2 text-white animate-spin dark:text-white fill-tertiary"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                              )}
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <div className="w-full min-h-screen bg-secondary relative font-monteserat">
          <div className="absolute overflow-hidden left-0 right-0 top-0 h-[400px] flex justify-start items-start">
            <img
              src={PurpleLensImage}
              className="hue-rotate-[-35deg] z-[1] relative opacity-40 left-[-120px] object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="max-w-[1255px] w-full h-full mx-auto flex flex-col justify-start items-start px-[20px] pt-[47px]">
            <div className="fixed top-[67px] left-[183px] w-[11px] h-[13px] z-[10]">
              <PinkStar />
            </div>
            <div className="fixed top-[138px] right-[57px] w-[20px] h-[16px] z-[10]">
              <GreyStar />
            </div>
            <div className="fixed bottom-[210px] right-[27px] w-[12px] h-[14px] z-[10]">
              <WhiteStar />
            </div>
            <div className="fixed bottom-[133px] left-[34px] w-[12px] h-[14px]">
              <PurpleStar />
            </div>
            <div className="flex justify-start items-start max-w-[437px] w-full mx-auto mb-[41px] relative z-[100]">
              <div
                className="h-[23px] w-[23px] rounded-fullflex justify-center items-center"
                onClick={() => navigate(-1)}
              >
                <GoBackIcon />
                {/* <ChevronLeftIcon className="text-white w-[10px] h-[10px]" /> */}
              </div>
            </div>
            <div className=" relative z-[20] bg-transparent  w-full rounded-[12px] flex justify-center items-center pb-[36px]">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <div className="max-w-[437px] w-full mx-auto relative">
                    <div className="mb-[24px] flex flex-col gap-[7px] text-[20px] text-tertiary font-[600] font-clashDisplay">
                      <h3>
                        Questions or need <br /> assistance?
                      </h3>
                      <h3>Let us know about it!</h3>
                    </div>
                    <div className="mb-[30px]">
                      <p className="text-white text-[12px] max-w-[240px] w-full">
                        Email us below to any question related to our event
                      </p>
                    </div>
                    <div className="flex flex-col gap-[42px]">
                      <ContactInput
                        name={"first_name"}
                        placeholder={"First Name"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        error={errors.first_name}
                        touched={touched.first_name}
                      />
                      <ContactInput
                        name={"email"}
                        placeholder={"Mail"}
                        type={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                      />
                      <div className="mb-[30px] relative">
                        <Field
                          name="message"
                          placeholder="Message"
                          component="textarea"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          touched={touched}
                          className="border-[1px] h-[119px] border-white bg-white/[0.03] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
                        />
                        {errors.message && touched.message && (
                          <p className="text-red-500 text-[12px] absolute">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center items-center mb-[41px]">
                      <div className="max-w-[175px] w-full">
                        <button
                          type="submit"
                          onClick={() => handleSubmit()}
                          // disabled={!isValid}
                          className="w-full rounded-[4px] text-white py-[16px] hover:py-[14px] overflow-hidden flex justify-center items-center btnGradient text-[16px] hover:rounded-[4px]"
                        >
                          {isLoading && (
                            <svg
                              aria-hidden="true"
                              className="inline w-5 h-5 mr-2 text-white animate-spin dark:text-white fill-tertiary"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                          )}
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center items-center ">
                      <Social />
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
