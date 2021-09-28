import * as yup from "yup";

export const eventSchema = yup.object().shape({
  firstName: yup.string().required,
  lastName: yup.string().required,
  email: yup.string().email().required,
  eventDate: yup.string(),
});
