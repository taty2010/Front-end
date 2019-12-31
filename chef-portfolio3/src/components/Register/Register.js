import React, {useState, useEffect} from "react";
import styled from "styled-components";
import logo from "../img/cheftopia_logo.png";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import registerbg from "../img/registerbg.jpg"

function Register({values, errors, touched, status}) {

  console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);


  const [user, newUser] = useState([])

  useEffect(() =>{
    console.log("status has changed", status);

    status && newUser(user => [...user, status]);
  }, [status])

  return (
    <div className="wrap">
        <Form>
        <div>
          <img src={logo} alt="chef topia logo" width="100" height="100" />
          <h2>Registration Form</h2>
        </div>
          <Field type="text" name="firstname" placeholder="First Name" />
          <Field type="text" name="lastname" placeholder="Last Name" />
          <div>
            {touched.email && errors.email && (<p>{errors.email}</p>)}
              <Field type="email" name="email" placeholder="Email" />

          </div>
          <Field type="text" name="username" placeholder="Username" />
          <div>
          {touched.password && errors.password && (<p>{errors.password}</p>)}
          <Field type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" disabled="isSubmitting" className="registerSubmit">Submit</button>
        </Form>
    </div>
  );
}

const RegistrationForm = withFormik({
  toValues({firstname, lastname, email,username,password}) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },

  // Validation
  validationSchema: Yup.object().shape(
    {
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be 6 characters or longer")
        .required("Password is required")
    }
  ),
  
  handleSubmit(values) {
    console.log(values);
  }
})(Register);

export default RegistrationForm;
