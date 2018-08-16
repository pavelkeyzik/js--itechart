import * as Yup from "yup";

const NewLoteSchema = Yup.object().shape({
  description: Yup.string()
    .required(),
  startPrice: Yup.number()
    .min(0)
    .required(),
  category: Yup.string()
    .required(),
  file: Yup.string()
    .required(),
});

export default NewLoteSchema;