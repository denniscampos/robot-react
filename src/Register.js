import React from "react";
import Form from "./Form";

const Register = () => {
  return (
    <div className="register-page">
      <Form
        label1="Full Name"
        label2="Email"
        type="email"
        password="a name"
        button1="Register"
        button2="Back to Login"
      />
    </div>
  );
};

export default Register;
