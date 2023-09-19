import * as Yup from "yup";
import { IContact } from "../types/contact.model";

export const initialValues: IContact = {
  firstName: "",
  mail: "",
  message: "",
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  mail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
