import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./passwordForm.scss";

PasswordForm.propTypes = {
  handleOnChange: PropTypes.func,
  handleValidation: PropTypes.func,
  handleSubmitChange: PropTypes.func,
};

function PasswordForm({
  handleOnChange,
  handleValidation,
  handleSubmitChange,
  passwordInput,
  oldPasswordError,
  newPasswordError,
  confirmPasswordError,
}) {
  const [showOldPassword, setshowOldPassword] = useState(false);
  const [showNewPassword, setshowNewPassword] = useState(false);
  const [showConPassword, setshowConPassword] = useState(false);

  const handleShowOldPassword = () => {
    setshowOldPassword(!showOldPassword);
  };
  const handleShowNewPassword = () => {
    setshowNewPassword(!showNewPassword);
  };
  const handleShowConPassword = () => {
    setshowConPassword(!showConPassword);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmitChange();
  };

  return (
    <div className="passwordForm">
      <form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="oldPassword">Old password:</Label>
          <InputGroup>
            <Input
              type={showOldPassword ? "text" : "password"}
              id="oldPassword"
              name="oldPassword"
              placeholder="Old password"
              value={passwordInput.oldPassword}
              onChange={handleOnChange}
              valid={oldPasswordError === ""}
              invalid={oldPasswordError !== ""}
              onBlur={handleValidation}
            />
            <InputGroupText>
              <Button
                className="eye"
                aria-label="toggle password visibility"
                onClick={handleShowOldPassword}
              >
                {showOldPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </InputGroupText>
            <FormFeedback>{oldPasswordError}</FormFeedback>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="newPassword">New password:</Label>
          <InputGroup>
            <Input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              placeholder="New password"
              value={passwordInput.newPassword}
              onChange={handleOnChange}
              valid={newPasswordError === ""}
              invalid={newPasswordError !== ""}
              onBlur={handleValidation}
            />
            <InputGroupText>
              <Button
                className="eye"
                aria-label="toggle password visibility"
                onClick={handleShowNewPassword}
              >
                {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </InputGroupText>
            <FormFeedback>{newPasswordError}</FormFeedback>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm new password:</Label>
          <InputGroup>
            <Input
              type={showConPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm new password"
              value={passwordInput.confirmPassword}
              onChange={handleOnChange}
              valid={confirmPasswordError === ""}
              invalid={confirmPasswordError !== ""}
              onBlur={handleValidation}
            />
            <InputGroupText>
              <Button
                className="eye"
                aria-label="toggle password visibility"
                onClick={handleShowConPassword}
              >
                {showConPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </InputGroupText>
            <FormFeedback>{confirmPasswordError}</FormFeedback>
          </InputGroup>
        </FormGroup>
        <input type="submit" value="Update" className="btn text-white" />
      </form>
    </div>
  );
}

export default PasswordForm;
