import * as Yup from "yup";

const NewLoteSchema = Yup.object().shape({
  description: Yup.string()
    .required(),
  current_bid: Yup.number()
    .min(0)
    .required(),
  category: Yup.string()
    .required(),
  image: Yup.string()
    .required(),
});

export default NewLoteSchema;