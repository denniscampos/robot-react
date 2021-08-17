// import axios from "axios";
import React from "react";
import Form from "./Form";

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const URL = "https://mondo-robot-art-api.herokuapp.com/auth/register";
  // const API_KEY = process.env.REACT_APP_API_KEY;

  // useEffect(() => {

  // }, []);

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
