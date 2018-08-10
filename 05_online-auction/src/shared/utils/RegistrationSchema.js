import * as Yup from "yup";
import Validator from './Validator';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(Validator.text)
    .required(),
  surname: Yup.string()
    .matches(Validator.text)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.string()
    .matches(Validator.phone)
    .required()
});

export default RegistrationSchema;