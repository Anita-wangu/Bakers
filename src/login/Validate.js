export default function validate(values, login = false) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Username is required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Enter a valid name";
  }

  if (!login) {
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!login) {
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (values.phone.length < 9) {
      errors.phone = "Phone Number needs to be 9 characters or more";
    }
  }

  return errors;
}
