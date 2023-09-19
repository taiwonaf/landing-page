import { Field, Formik } from "formik";
import RegisterImg from "../../assets/images/register.png";
import FormButton from "../button/FormButton";
import { initialValues, validationSchema } from "../../validators/register";
import { IRegiser } from "../../types/register.model";
import RegisterInput from "../input/RegisterInput";
const RegisterMobile = () => {
  const onSubmit = (values: IRegiser) => {
    console.log(values);
  };
  return (
    <div className="bg-secondary min-h-screen w-full text-white">
      <div>
        <h4>Register</h4>
        <div>
          <img src={RegisterImg} alt="" />
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
                <div className="mb-[30px] relative"></div>
              </div>
              <div className="flex justify-center items-center mb-[41px]">
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
