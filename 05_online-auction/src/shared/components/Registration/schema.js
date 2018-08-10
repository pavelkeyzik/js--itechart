import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-z]{1,}$/)
    .required(),
  surname: Yup.string()
    .matches(/^[A-z]{1,}$/)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  phone: Yup.string()
    .matches(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/)
    .required()
});

export default BasicFormSchema;