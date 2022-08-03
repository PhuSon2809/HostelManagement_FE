import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";

RegisterForm.propTypes = {};

function RegisterForm(props) {
  // =======================================
  const [passwordError, setpasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChangePassword = (e) => {
    setPasswordInput((prevPassword) => ({
      ...prevPassword,
      password: e.target.value,
    }));
  };
  const handleChangeRetypePassword = (e) => {
    setPasswordInput((prevPassword) => ({
      ...prevPassword,
      confirmPassword: e.target.value,
    }));
  };

  console.log("confirmPasswordError: ", confirmPasswordError);

  const handleValidationPassword = (e) => {
    const uppercasePattern = /(?=.*?[A-Z])/;
    const lowercasePattern = /(?=.*?[a-z])/;
    const digitsPattern = /(?=.*?[0-9])/;
    const minLengthPattern = /.{6,}/;
    const specialCharRegPattern = /(?=.*?[#?!@$%^&*-])/;

    const passwordLength = e.target.value.length;
    const uppercasePassword = uppercasePattern.test(e.target.value);
    const lowercasePassword = lowercasePattern.test(e.target.value);
    const digitsPassword = digitsPattern.test(e.target.value);
    const minLengthPassword = minLengthPattern.test(e.target.value);
    const specialCharReg = specialCharRegPattern.test(e.target.value);

    let errorMessage = "";
    if (passwordLength === 0) {
      errorMessage = "Please field password.";
    } else if (!uppercasePassword) {
      errorMessage = "At least one Uppercase.";
    } else if (!lowercasePassword) {
      errorMessage = "At least one Lowercase.";
    } else if (!digitsPassword) {
      errorMessage = "At least one digit.";
    } else if (!minLengthPassword) {
      errorMessage = "At least minumum 6 characters.";
    } else if (!specialCharReg) {
      errorMessage = "At least At least one Special Characters.";
    } else {
      errorMessage = "";
    }
    setpasswordError(errorMessage);
  };
  const handleValidationRetypePassword = (e) => {

    console.log("e:", e.target.value);
    
    const passwordLength = e.target.value.length;
    let errorMessage = "";
    if (passwordLength === 0) {
      setConfirmPasswordError("Please field confirm password.");
    } else if (passwordInput.confirmPassword !== passwordInput.password) {
      setConfirmPasswordError("Confirm password is not matched.");
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPasswordError(errorMessage);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      retypePassword: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  const toggleShowRetypePassword = () => {
    setShowRetypePassword((x) => !x);
  };

  const submitForm = async (values) => {
    const newUser = {
      name: values.fullName,
      phone: values.phone,
      password: passwordInput.password,
    };
    console.log(newUser);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(newUser);
    }
  };

  return (
    <div>
      {/* <Avatar
        sx={{ height: "50px", width: "50px" }}
        className={classes.avatar}
        src="/1.png"
      ></Avatar> */}
      <Typography variant="h2" component="h3">
        SIGN UP
      </Typography>

      <form onSubmit={handleSubmit(submitForm)}>
        <TextField
          // {...register("fullName")}
          {...register("fullName", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 3,
              message: "Too less Characters",
            },
            maxLength: {
              value: 50,
              message: "Too Many Characters",
            },
          })}
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
        />
        {errors.fullName?.message && <p>{errors.fullName?.message}</p>}

        <TextField
          {...register("phone", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 9,
              message: "Too less Characters",
            },
            maxLength: {
              value: 13,
              message: "Too Many Characters",
            },
          })}
          type="number"
          fullWidth
          label="Phone number"
          variant="outlined"
          margin="normal"
        />
        {errors.phone?.message && <p>{errors.phone?.message}</p>}

        <OutlinedInput
          {...register("password")}
          id="password"
          type={showPassword ? "text" : "password"}
          InputLabel="password"
          fullWidth
          onChange={handleChangePassword}
          onBlur={handleValidationPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        <p>{passwordError}</p>

        <OutlinedInput
          {...register("retypePassword")}
          id="password"
          type={showRetypePassword ? "text" : "password"}
          label="Retype password"
          fullWidth
          onChange={handleChangeRetypePassword}
          onBlur={handleValidationRetypePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowRetypePassword}
                edge="end"
              >
                {showRetypePassword ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <p>{confirmPasswordError}</p>

        <Button type="submit" variant="contained" fullWidth>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
