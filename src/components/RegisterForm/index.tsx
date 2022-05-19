import { Field, Form, Formik } from "formik";
import React from "react";

interface Values {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  // Formik
  const initialValues: Values = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values: Values, { resetForm }: any) => {
    // await register({ variables: { ...values } });
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field id="name" name="name" placeholder="Name" />
          <Field id="email" name="email" placeholder="Email" />
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
