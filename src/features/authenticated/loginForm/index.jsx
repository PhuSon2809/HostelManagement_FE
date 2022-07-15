import { Button, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
// import { yupResolver } from '@hookform/resolvers/yup';
import {
  IconButton, InputAdornment, OutlinedInput
} from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const submitForm = async (data) => {
    const { onSubmit } = props;
    if (onSubmit) {
        await onSubmit(data);
    }
    // form.reset();
}

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div className="form__Login">
      {/* {isSubmitting && <LinearProgress />} */}
      
      <Typography variant="h4" component="h4">WELCOME HOM</Typography>
      <form onSubmit={handleSubmit(submitForm)}>
        <TextField
          {...register("phone")}
          autoComplete="off"
          fullWidth
          label="Phone"
          variant="outlined"
          margin="normal"
        />
        <OutlinedInput
          {...register("password")}
          id="password"
          type={showPassword ? "text" : "password"}
          label="password"
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
        <Button
          type="submit"
          className="btn-login"
          variant="contained"
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
