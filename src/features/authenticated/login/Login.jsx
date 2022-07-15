import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../loginForm";

import { login } from "../../../redux/actions/login";

Login.propTypes = {};

function Login({reload}) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      dispatch(login(values))
      reload();
    } catch (error) {
      console.log("Failed to login: ", error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
