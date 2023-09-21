import { Field, Formik } from "formik";
import RegisterImg from "../../assets/images/register.png";
import FormButton from "../button/FormButton";
import { initialValues, validationSchema } from "../../validators/register";
import { IRegiser } from "../../types/register.model";
import RegisterInput from "../input/RegisterInput";
import FemaleImg from "./FemaleImg";
import Male from "./Male";
const RegisterMobile = () => {
  const onSubmit = (values: IRegiser) => {
    console.log(values);
  };
  return (
    <div className="bg-secondary min-h-screen w-full text-white p-[24px] font-monteserat">
      <div className="max-w-[300px] w-full mx-auto">
        <h4 className="mb-[31px] text-[15px] font-[700] text-tertiary font-clashDisplay">
          Register
        </h4>
        <div className="h-[155px] flex justify-center  overflow-hidden">
          <img src={RegisterImg} alt="" className="object-contain" />
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
            <div className="max-w-[437px] w-full mx-auto relative">
              <div className="flex justify-start items-end gap-[7px] mb-[7px]">
                <p className="text-[12px] text-white ">
                  Be part of this movement
                </p>
                <div className="flex flex-1 border-b-[1px] border-break justify-center items-center pb-[2px] border-dashed border-tertiary">
                  <FemaleImg />
                  <Male />
                </div>
              </div>
              <h4 className=" text-[20px] font-[400] text-white mb-[23px] uppercase">
                create your account
              </h4>
              <div className="flex flex-col gap-[18px] mb-[15px]">
                <RegisterInput
                  label="Team's Name"
                  name={"teamsName"}
                  placeholder={"Enter the name of your team"}
                  type={"text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.teamsName}
                  error={errors.teamsName}
                  touched={touched.teamsName}
                />
                <RegisterInput
                  placeholder={"Wnter your phone number"}
                  name={"mail"}
                  label={"Phone"}
                  type={"number"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  error={errors.phone}
                  touched={touched.phone}
                />
                <RegisterInput
                  placeholder={"Wnter your Email address"}
                  name={"email"}
                  label={"Email"}
                  type={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
                <RegisterInput
                  placeholder={"Wnter your Email address"}
                  name={"projectTopic"}
                  label={"Project topic"}
                  type={"text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.projectTopic}
                  error={errors.projectTopic}
                  touched={touched.projectTopic}
                />
                <div className="flex justify-between items-center gap-[20px] w-full">
                  <div className="flex-1">
                    <Field
                      as="select"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      error={errors.category}
                      touched={touched.category}
                      placeholder="Select your category"
                      className="border-[1px] bg-white/[0.03] border-white placeholder:text-white/[0.25] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
                    >
                      <option value="Frontend developer">
                        Frontend Developer
                      </option>
                      <option value="Backend developer">
                        Backend Developer
                      </option>
                    </Field>
                  </div>
                  <div className="max-w-[87px] w-full">
                    <Field
                      as="select"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                      error={errors.category}
                      touched={touched.category}
                      placeholder="Select your category"
                      className="border-[1px] bg-white/[0.03] border-white placeholder:text-white/[0.25] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
                    >
                      <option value="Frontend developer">
                        Frontend Developer
                      </option>
                      <option value="Backend developer">
                        Backend Developer
                      </option>
                    </Field>
                  </div>
                </div>
              </div>
              <p className="text-[9px] text-pink italic mb-[12px]">
                Please review your registration details before submitting
              </p>
              <div className="flex justify-start items-start gap-[10px]">
                <input
                  type="checkbox"
                  className="border-[1px] border-white rounded-[2px] h-[14px] w-[14px] bg-transparent"
                />
                <p className="text-[10px] text-white">
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
              <div className="flex justify-center items-center pt-[14px]">
                <FormButton handleClick={handleSubmit} text="Submit" />
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterMobile;
