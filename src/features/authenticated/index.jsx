import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Register from "./register";
import { Typography, Button } from "@mui/material";
import Login from "./login/Login";

Authenticated.propTypes = {};

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

function Authenticated(props) {
  const [mode, setMode] = useState(MODE.LOGIN);
  //   const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    // setOpen(false);
    setMode(MODE.LOGIN);
  };

  return (
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
            <Login closeDialog={handleClose} />
            <Typography>Or</Typography>
            {/* <LoginWithGoogle /> */}

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
