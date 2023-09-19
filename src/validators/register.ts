import * as Yup from "yup";
import { IRegiser } from "../types/register.model";

export const initialValues: IRegiser = {
  teamsName: "",
  phone: "",
  email: "",
  projectTopic: "",
  category: "",
  groupSize: 0,
};

export const validationSchema = Yup.object().shape({
  teasmsName: Yup.string().required("Teams Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .required("Message is required")
    .email("Not type of email"),
  projectTopic: Yup.string().required("Project Topic is required"),
  category: Yup.string().required("Category is required"),
  groupSize: Yup.number().required("Group Size is required"),
});
