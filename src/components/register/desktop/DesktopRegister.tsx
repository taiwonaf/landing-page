/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, Formik, FormikHelpers } from "formik";
import RegisterImg from "../../../assets/images/register-desktop.png";
import { initialValues, validationSchema } from "../../../validators/register";
import { IRegiser } from "../../../types/register.model";
import RegisterInput from "../../input/RegisterInput";
import FemaleImg from "../FemaleImg";
import Male from "../Male";
import Nav from "../../nav/Nav";
import { useRegisterMutation } from "../../../app/services/apiServices";
import { toast } from "react-toastify";
import RegisterModal from "../../modal/RegisterModal";
import { useState } from "react";
import {
  GreyStar,
  PinkStar,
  PurpleStar,
  WhiteStar,
} from "../../../assets/icons/Stars";
import PurpleLens from "../../../assets/icons/PurpleLens";

const DesktopRegister = () => {
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [register, { isLoading }] = useRegisterMutation();
  const onSubmit = async (
    values: IRegiser,
    { resetForm }: FormikHelpers<IRegiser>
  ) => {
    try {
      const registerResponse = await register(values).unwrap();
      if (registerResponse) {
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
        setSuccessModal(true);
      }
      console.log(registerResponse);
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
  return (
    <>
      <Nav />
      <div className="min-h-screen pt-[145px] bg-secondary flex justify-center items-center relative font-monteserat ">
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
        <div className="relative w-full h-full flex justify-center items-center max-w-[1255px]">
          <div className="absolute left-[-150px] flex inset-0 justify-start items-center">
            <div className="h-[717px] w-[717px] ">
              <div className="max-w-[21px] h-[25px] absolute top-[50px] left-[10%]">
                <PinkStar />
              </div>
              <div className="max-w-[23px] h-[28px] absolute bottom-[20px] right-[20px]">
                <PurpleStar />
              </div>
              <div className="max-w-[26px] h-[32px] absolute bottom-[50px] left-[10%]">
                <GreyStar />
              </div>
              <img
                src={RegisterImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex relative justify-end items-center max-w-[1255px] w-full mx-auto">
            <div className="relative max-w-[740px] bg-white/[3%] rounded-[12px] w-full py-[65px] backdrop-blur-md shadow-register">
              <div className="max-w-[26px] h-[32px] absolute top-[20px] right-[20%]">
                <GreyStar />
              </div>
              <div className="max-w-[10px] h-[12px] absolute bottom-[-7px] right-[20%]">
                <WhiteStar />
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
                  // isValid,
                }) => (
                  <div className="max-w-[558px] w-full mx-auto relative">
                    <h4 className="mb-[33px] text-[32px] font-[600] text-tertiary font-clashDisplay">
                      Register
                    </h4>
                    <div className="flex justify-start items-end gap-[7px] mb-[7px]">
                      <p className="text-[12px] text-white ">
                        Be part of this movement
                      </p>
                      <div className="flex flex-1 border-b-[1px] border-break justify-center items-center pb-[2px] border-dashed border-tertiary max-w-[100px]">
                        <FemaleImg />
                        <Male />
                      </div>
                    </div>
                    <h4 className=" text-[24px] font-[400] text-white mb-[23px] uppercase">
                      create your account
                    </h4>
                    <div className="grid grid-cols-2 gap-[32px] mb-[25px]">
                      <RegisterInput
                        label="Team's Name"
                        name={"team_name"}
                        placeholder={"Enter the name of your team"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.team_name}
                        error={errors.team_name}
                        touched={touched.team_name}
                      />
                      <RegisterInput
                        placeholder={"Wnter your phone number"}
                        name={"phone_number"}
                        label={"phone_number"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone_number}
                        error={errors.phone_number}
                        touched={touched.phone_number}
                      />
                      <RegisterInput
                        placeholder={"Wnter your Email address"}
                        name={"email"}
                        label={"Email"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                      />
                      <RegisterInput
                        placeholder={"Wnter your Email address"}
                        name={"project_topic"}
                        label={"Project topic"}
                        type={"text"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.project_topic}
                        error={errors.project_topic}
                        touched={touched.project_topic}
                      />
                      <div className="w-full relative">
                        <label
                          htmlFor="Category"
                          className="text-[13px] text-white mb-[5px]"
                        >
                          Category
                        </label>
                        <Field
                          as="select"
                          name="category"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.category}
                          error={errors.category}
                          placeholder="Select your category"
                          className="border-[1px] bg-white/[0.03] mt-[5px] border-white placeholder:text-white/[0.25] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
                        >
                          <option value={0} className="bg-black/70">
                            Select a category
                          </option>
                          <option value={1} className=" bg-black/70">
                            Frontend Developer
                          </option>
                          <option value={2} className=" bg-black/70">
                            Backend Developer
                          </option>
                        </Field>
                        {touched && errors.category && (
                          <p className="text-red-500 text-[12px] absolute bottom-[-25px]">
                            {errors.category}
                          </p>
                        )}
                      </div>
                      <div className="w-full relative">
                        <label
                          htmlFor="group_size"
                          className="text-[13px] text-white "
                        >
                          Group Size
                        </label>
                        <Field
                          as="select"
                          onChange={handleChange}
                          name="group_size"
                          onBlur={handleBlur}
                          value={values.group_size}
                          error={errors.group_size}
                          placeholder="Select"
                          className="border-[1px] bg-white/[0.03] mt-[5px] border-white placeholder:text-white/[0.25] rounded-[4px] w-full py-[12px] px-[20px] text-white placeholder:text-white outline-none text-[16px] placeholder:text-[16px]"
                        >
                          <option value="" className=" bg-black/70">
                            Select
                          </option>
                          <option value={1} className=" bg-black/70">
                            1
                          </option>
                          <option value={2} className=" bg-black/70">
                            2
                          </option>
                          <option value={5} className=" bg-black/70">
                            5
                          </option>
                          <option value={10} className=" bg-black/70">
                            10
                          </option>
                          <option value={20} className=" bg-black/70">
                            20
                          </option>
                        </Field>
                        {touched && errors.group_size && (
                          <p className="text-red-500 text-[12px] absolute bottom-[-25px]">
                            {errors.group_size}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-[9px] text-pink italic mb-[12px]">
                      Please review your registration details before submitting
                    </p>
                    <div className="relative mb-[10px]">
                      <label className="flex justify-start items-start gap-[10px]">
                        <Field
                          type="checkbox"
                          name="privacy_poclicy_accepted"
                          className="h-[14px] w-[14px] rounded border-white text-tertiary focus:tertiary bg-transparent"
                        />

                        <p className="text-[10px] text-white">
                          I agreed with the event terms and conditions and
                          privacy policy
                        </p>
                      </label>
                      {touched && errors.privacy_poclicy_accepted && (
                        <p className="text-red-500 text-[12px] absolute bottom-[-20px]">
                          {errors.privacy_poclicy_accepted}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-center items-center pt-[14px] w-full">
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
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal open={successModal} setOpen={setSuccessModal} />
    </>
  );
};

export default DesktopRegister;
