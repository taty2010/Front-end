import React, {useState, useEffect} from "react";
import styled from "styled-components";
import logo from "../img/cheftopia_logo.png";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"
import registerbg from "../img/registerbg.jpg"

function Register({values, errors, touched, status, isSubmitting}) {

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
          <Field type="text" name="location" placeholder="Location" />
          <Field type="text" name="username" placeholder="Username" />
         
          <Field type="password" name="password" placeholder="Password" />
         
          <button type="submit" className="registerSubmit">Submit</button>
        </Form>
    </div>
  );
}

const RegistrationForm = withFormik({
  mapPropsToValues({city, name, password}) {
    return {
      username: name || "",
      location: city || "",
      password: password || ""
    };
  },
  
  handleSubmit(values, {setStatus, resetForm}) {
    console.log("Submitting",values);
    axios.post("https://chef-portfolio-done-right.herokuapp.com/api/auth/register", values)
      .then(res => {
          console.log("success", res)
          setStatus(res.data);
          resetForm();
      })
      .catch(err => {
        console.log(err.response)
      })
  }
})(Register);

export default RegistrationForm;
