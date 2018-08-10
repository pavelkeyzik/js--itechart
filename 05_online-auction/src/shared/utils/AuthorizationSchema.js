import * as Yup from "yup";
import Validator from './Validator';

const AuthorizationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(Validator.phone)
    .required()
});

export default AuthorizationSchema;