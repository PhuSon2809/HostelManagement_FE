import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Form, FormGroup, FormFeedback, Label } from "reactstrap";
import "./changePassword.scss";

ChangePassword.propTypes = {};

function ChangePassword(props) {
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();


  return (
    <div className="changePassword">
      <Form>
        <FormGroup>
          <Label for="currentPassword">Current password:</Label>
          <Input
            type="text"
            id="currentPassword"
            name="currentPassword"
            placeholder="Current password"
            // value={fullName}
            // valid={this.state.error.fullName === ""}
            // invalid={this.state.error.fullName !== ""}
            // onChange={(event) => setFullName(event.target.value)}
            // onBlur={this.handleInputBlur}
          />
          <FormFeedback></FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="newPassword">New password:</Label>
          <Input
            type="text"
            id="newPassword"
            name="newPassword"
            placeholder="New password"
            // value={this.state.fullName}
            // valid={this.state.error.fullName === ""}
            // invalid={this.state.error.fullName !== ""}
            // onChange={this.handleInputChange}
            // onBlur={this.handleInputBlur}
          />
          <FormFeedback></FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="confirmNewPassword">Confirm new password:</Label>
          <Input
            type="text"
            id="confirmNewPassword"
            name="confirmNewPassword"
            placeholder="Confirm new password"
            // value={this.state.fullName}
            // valid={this.state.error.fullName === ""}
            // invalid={this.state.error.fullName !== ""}
            // onChange={this.handleInputChange}
            // onBlur={this.handleInputBlur}
          />
          <FormFeedback></FormFeedback>
        </FormGroup>
        <input type="submit" value="Update" className="btn text-white" />
      </Form>
    </div>
  );
}

export default ChangePassword;
