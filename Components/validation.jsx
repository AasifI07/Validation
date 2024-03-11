import React from "react";

const validation = (values) => {
  let errors = {};
let emailFormat="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  if (!values.email.match(emailFormat)) {
    ((errors.email = "E-mail with @ is required"));
  }

  if (!values.password) {
    ((errors.password = "Password is required"));
  }

  console.log(values.password.length)

  if (values.password.length <  8) {
    {
      ((errors.password = "Password must be minimum 8 characters"));
    }
  }
  return errors;
};

export default validation;
