import ContactInput from "../components/input/ContactInput";
import { initialValues, validationSchema } from "../validators/contact";
import { Field, Formik } from "formik";
import { IContact } from "../types/contact.model";
import FormButton from "../components/button/FormButton";
import SmallText from "../components/contact/SmallText";
import LayOutWrapper from "../components/layout/LayOutWrapper";
import { useMediaQuery } from "react-responsive";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Social from "../components/contact/Social";
import {
  GreyStar,
  PinkStar,
  PurpleStar,
  WhiteStar,
} from "../assets/icons/Stars";
import PurpleLens from "../assets/images/purle-lens.png";

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const onSubmit = (values: IContact) => {
    console.log(values);
  };
  return (
    <>
      {isDesktop && (
        <LayOutWrapper>
          <div className="w-full h-screen pt-[145px]">
            <div className="max-w-[1255px] w-full h-full mx-auto flex justify-between items-center px-[49px]">
              <div className=" w-full flex justify-between items-start gap-[30px]">
                <div className="pt-[56px] w-1/3 hidden md:block">
                  <h3 className="text-[32px] font-[600] text-tertiary mb-[16px]">
                    Get in touch
                  </h3>
                  <div className="flex flex-col mb-[17px]">
                    <SmallText text="Contact" />
                    <SmallText text="Information" />
                  </div>
                  <div className="flex flex-col mb-[21px]">
                    <SmallText text="27, Alara street" />
                    <SmallText text="Yaba 100012" />
                    <SmallText text="Lagos State" />
                  </div>
                  <SmallText text="Call Us : 07067981819" />
                  <div className="flex flex-col mt-[22px] mb-[35px]">
                    <SmallText text="we are open from Monday-Friday" />
                    <SmallText text="08:00am - 05:00pm" />
                  </div>
                  <div>
                    <span className="text-tertiary text-[16px]">Share on</span>
                    <div></div>
                  </div>
                </div>
                <div className="max-w-[617px] shadow-none md:shadow-register md:bg-white/[0.03] bg-transparent  w-full md:w-2/3 rounded-[12px] flex justify-center items-center px-[20px] pt-[75px] pb-[67px]">
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
                        <div className="mb-[34px] flex flex-col gap-[7px] text-[20px] text-tertiary font-[600]">
                          <h3>Questions or need assistance?</h3>
                          <h3>Let us know about it!</h3>
                        </div>
                        <div className="flex flex-col gap-[42px]">
                          <ContactInput
                            name={"firstName"}
                            placeholder={"First Name"}
                            type={"text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            error={errors.firstName}
                            touched={touched.firstName}
                          />
                          <ContactInput
                            name={"mail"}
                            placeholder={"Mail"}
                            type={"email"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mail}
                            error={errors.mail}
                            touched={touched.mail}
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
                          <FormButton
                            handleClick={handleSubmit}
                            text="Submit"
                          />
                        </div>
                        <div>
                          <Social />
                        </div>
                      </div>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </LayOutWrapper>
      )}
      {isMobile && (
        <div className="w-full h-screen bg-secondary relative">
          <div className="absolute flex justify-start items-center">
            <img src={PurpleLens} alt="" className="bg-mode" />
          </div>
          <div className="max-w-[1255px] w-full h-full mx-auto flex flex-col justify-start items-start px-[20px] pt-[47px]">
            <div className="fixed top-[67px] left-[183px] w-[11px] h-[13px]">
              <PinkStar />
            </div>
            <div className="fixed top-[138px] right-[57px] w-[20px] h-[16px]">
              <GreyStar />
            </div>
            <div className="fixed bottom-[210px] right-[27px] w-[12px] h-[14px]">
              <WhiteStar />
            </div>
            <div className="fixed bottom-[133px] left-[34px] w-[12px] h-[14px]">
              <PurpleStar />
            </div>
            <div className="flex justify-start items-start max-w-[437px] w-full mx-auto mb-[41px]">
              <div className="h-[23px] w-[23px] rounded-full border-[1px] border-white flex justify-center items-center">
                <ChevronLeftIcon className="text-white w-[10px] h-[10px]" />
              </div>
            </div>
            <div className=" bg-transparent  w-full rounded-[12px] flex justify-center items-center pb-[36px]">
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
                    <div className="mb-[24px] flex flex-col gap-[7px] text-[20px] text-tertiary font-[600]">
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
                        name={"firstName"}
                        placeholder={"First Name"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        error={errors.firstName}
                        touched={touched.firstName}
                      />
                      <ContactInput
                        name={"mail"}
                        placeholder={"Mail"}
                        type={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mail}
                        error={errors.mail}
                        touched={touched.mail}
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
                      <FormButton handleClick={handleSubmit} text="Submit" />
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
