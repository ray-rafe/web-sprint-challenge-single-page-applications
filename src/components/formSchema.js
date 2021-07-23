import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  sizeDropDown: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  onions: yup.boolean(),
  specialInstructions: yup.string().min(3, "must be 3 characters long"),
});

export default schema;
