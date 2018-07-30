const validateText = (value) => {
  return /^[A-z]{1,}$/g.test(value);
}

const validatePhone = (value) => {
  return /^[0-9]{7}$/.test(value);
}

const validateEmail = (value) => {
  return /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(value);
}

export default {
  validateText,
  validatePhone,
  validateEmail,
}