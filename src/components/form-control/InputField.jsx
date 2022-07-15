import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

InputField.propTypes = {};

function InputField(props) {
  const { form, name, label, disabled, value } = props;
//   const { errors } = form;

  // const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          autoComplete="off"
          fullWidth
          label={label}
          disabled={disabled}
          variant="outlined"
          margin="normal"
          value={value}
        />
      )}

      // error={!!hasError}
      // helperText={errors[name]?.message}
    />
  );
}

export default InputField;
