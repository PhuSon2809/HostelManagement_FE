import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../registerForm";
import accountApi from "../../../apis/accountApi";
import { register } from "../../../redux/actions/login";
import { useDispatch } from "react-redux";

Register.propTypes = {
  closeDialog: PropTypes.func,
};
function Register({ closeDialog }) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      console.log("register values: ", values);
      // const newUser = {
      //   name: values.fullName,
      //   phone: values.phone,
      //   password: values.password,
      // };
      dispatch(register(values, closeDialog));
    } catch (error) {
      console.log("Failed to register: ", error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
