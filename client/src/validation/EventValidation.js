import * as yup from "yup";

export const eventSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  eventDate: yup.mixed().required("Event date is required"),
});
