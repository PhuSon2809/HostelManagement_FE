import React, {useState, useEffect} from "react";
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
  const { register, handleSubmit } = useForm({
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
    console.log(values);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
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
          {...register("fullName")}
        //   autoComplete="on"
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          {...register("phone")}
        //   autoComplete="on"
          fullWidth
          label="Phone number"
          variant="outlined"
          margin="normal"
        />

        <OutlinedInput
          {...register("password")}
          id="password"
          type={showPassword ? "text" : "password"}
          InputLabel="password"
          fullWidth
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
        <OutlinedInput
          {...register("retypePassword")}
          id="password"
          type={showRetypePassword ? "text" : "password"}
          label="Retype password"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowRetypePassword}
                edge="end"
              >
                {showRetypePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
