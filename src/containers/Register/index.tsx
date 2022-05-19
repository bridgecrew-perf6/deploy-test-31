import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { withApolloClient } from "../../utils/createApolloClient";

const Register = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
