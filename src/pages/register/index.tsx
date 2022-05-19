import React from "react";
import Register from "../../containers/Register";
import { withApolloClient } from "../../utils/createApolloClient";

const RegisterPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default withApolloClient({ ssr: false })(RegisterPage);
