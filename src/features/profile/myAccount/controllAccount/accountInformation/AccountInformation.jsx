import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Form, FormGroup, FormFeedback, Label } from "reactstrap";
import "./accountInformation.scss";
import { event } from "jquery";

AccountInformation.propTypes = {};

function AccountInformation(props) {
  const [avatar, setAvatar] = useState();
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState('');

  const [error, setError] = useState({});

  // const validate = (name, value) => {
  //   switch (name) {
  //     case ""
  //   }
  // }


  return (
    <div className="accountInformation">
      <Form>
        <div className="upload">
          <img src="./images/avatar.jpg" alt="avatar" className="mr-4" />
          <button type="button" className="btn">
            <i className="fa fa-upload"></i> Upload File
            <input type="file" />
          </button>
        </div>
        <div className="information">
          <FormGroup>
            <Label for="fullName">Full Name:</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="fullName"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              valid={error === ""}
              invalid={error !== ""}
              // onBlur={this.handleInputBlur}
            />
            <FormFeedback></FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input
              type="number"
              id="phone"
              name="phone"
              placeholder="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              valid={error === ""}
              invalid={error !== ""}
              // onBlur={this.handleInputBlur}
            />
            <FormFeedback></FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="gender" className="mr-5">Gender:</Label>
            <span className="first">
              <Input
                type="radio"
                id="gender"
                name="gender"
                placeholder="gender"
                // value={this.state.fullName}
                // valid={this.state.error.fullName === ""}
                // invalid={this.state.error.fullName !== ""}
                // onChange={this.handleInputChange}
                // onBlur={this.handleInputBlur}
              />
              Male
            </span>
            <span>
              <Input
                type="radio"
                id="gender"
                name="gender"
                placeholder="gender"
                // value={this.state.fullName}
                // valid={this.state.error.fullName === ""}
                // invalid={this.state.error.fullName !== ""}
                // onChange={this.handleInputChange}
                // onBlur={this.handleInputBlur}
              />
              Female
            </span>
            <span>
              <Input
                type="radio"
                id="gender"
                name="gender"
                placeholder="gender"
                // value={this.state.fullName}
                // valid={this.state.error.fullName === ""}
                // invalid={this.state.error.fullName !== ""}
                // onChange={this.handleInputChange}
                // onBlur={this.handleInputBlur}
              />
              Orther
            </span>
            <FormFeedback></FormFeedback>
          </FormGroup>
          <input type="submit" value="Update" className="btn text-white" />
        </div>
      </Form>
    </div>
  );
}

export default AccountInformation;
