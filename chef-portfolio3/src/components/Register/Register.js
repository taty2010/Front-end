import React from "react";
import styled from "styled-components";
import logo from "../img/cheftopia_logo.png";
import { withFormik, Form, Field } from "formik";

function Register() {
  const Wrap = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10% 0;
    margin-top: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Block = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    width: 60%;
    height: auto;
  `;

  return (
    <Wrap>
      <Block>
        <div>
          <img src={logo} alt="chef topia logo" width="100" height="100" />
          <h2>Registration Form</h2>
        </div>
        <Form>
          <Field type="text" name="firstname" placeholder="First Name" />
          <Field type="text" name="lastname" placeholder="Last Name" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="text" name="username" placeholder="Username" />
          <Field type="password" name="password" placeholder="Password" />
          <button className="registerSubmit">Submit</button>
        </Form>
      </Block>
    </Wrap>
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
  
  handleSubmit(values) {
    console.log(values);
  }
})(Register);

export default RegistrationForm;
