import * as Yup from "yup";
import { IContact } from "../types/contact.model";

export const initialValues: IContact = {
  first_name: "",
  email: "",
  message: "",
};

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
