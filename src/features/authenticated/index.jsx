import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Register from "./register";
import { Typography, Button } from "@mui/material";
import Login from "./login/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

Authenticated.propTypes = {};

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

function Authenticated(props) {
  const [mode, setMode] = useState(MODE.LOGIN);
  const current = useSelector((state) => state.login.infoUser);

  const [reload, setReload] = useState(false);

  console.log("current authen: ", current);

  const handleClose = () => {
    setMode(MODE.LOGIN);
  };

  return current && current?.roleId == 2 ? (
    <Navigate to="/home" />
  ) : current && current?.roleId == 3 ? <Navigate to="/owner" /> :
  current && current?.roleId == 1 ? <Navigate to="/admin" /> :
  (
    <>
      <div className="authenticated"></div>
      <div className="container form__login__register">
        {mode === MODE.REGISTER && (
          <>
            <Register closeDialog={handleClose} />
            <div className="SignUpText">
              <Typography>Already have an account?</Typography>
              <Button color="inherit" onClick={() => setMode(MODE.LOGIN)}>
                login here
              </Button>
            </div>
          </>
        )}

        {mode === MODE.LOGIN && (
          <>
            <Login closeDialog={handleClose} reload={() => setReload(!reload)}/>
            <Typography>Or</Typography>
            <div className="SignUpText">
              <Typography>Don't have an account?</Typography>
              <Button color="inherit" onClick={() => setMode(MODE.REGISTER)}>
                Sign up here
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Authenticated;
