import * as Yup from "yup";
import { IRegiser } from "../types/register.model";

export const initialValues: IRegiser = {
  team_name: "",
  phone_number: "",
  email: "",
  project_topic: "",
  category: 0,
  group_size: 0,
  privacy_poclicy_accepted: false,
};

export const validationSchema = Yup.object().shape({
  team_name: Yup.string().required("Teams Name is required"),
  phone_number: Yup.string().required("Phone is required"),
  email: Yup.string()
    .required("Message is required")
    .email("Not type of email"),
  project_topic: Yup.string().required("Project Topic is required"),
  category: Yup.number().required("Category is required"),
  group_size: Yup.number().required("Group Size is required"),
  privacy_poclicy_accepted: Yup.boolean()
    .required("You must agree to the privacy policy before you continue")
    .oneOf([true], "Terms and condition is Required"),
});
