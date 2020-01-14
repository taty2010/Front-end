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

  const Error = styled.p`
  color: red;
  font-style: italic;
  font-size: 1vw;

  `;

  return (
    <div className="wrap">
        <Form>
        <div>
          <img src={logo} alt="chef topia logo" width="100" height="100" />
          <h2>Registration Form</h2>
        </div>
          <Field type="text" name="username" placeholder="Name" />
          {touched.username && errors.username && (
            <Error>{errors.username}</Error>
          )}
          <Field type="text" name="location" placeholder="Location" />
          {touched.location && errors.location && (
            <Error>{errors.location} </Error>
          )}
          <Field type="text" name="item_photo" placeholder="Add Image Link" />
         
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
          <button type="submit" className="registerSubmit">Submit</button>
        </Form>
    </div>
  );
}

const RegistrationForm = withFormik({
  mapPropsToValues({city, name, link, password}) {
    return {
      username: name || "",
      location: city || "",
      password: password || "",
      item_photo: link || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required("Password is required"),
    password: Yup.string().required("Location is required")
  }),
  
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
