import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../registerForm";
import accountApi from "../../../apis/accountApi";

Register.propTypes = {};

function Register(props) {

    const handleSubmit = async (values) => {

        try {
            console.log("register values: ", values);

            const data = accountApi.register(values);


            // // autoset ussername = email
            // values.username = values.email;

            // const action = register(values);
            // const resultAction = await dispatch(action);
            // const account = unwrapResult(resultAction);

        } catch (error) {
            console.log('Failed to register: ', error);
        }
    }

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
