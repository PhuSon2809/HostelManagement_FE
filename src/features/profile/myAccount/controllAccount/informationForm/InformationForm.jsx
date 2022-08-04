import React, { useState } from "react";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./informationForm.scss";

InformationForm.propTypes = {};

function InformationForm({
  inputValue,
  handleChangeGender,
  image,
  onImageChange,
  handleOnChange,
  handleSubmit,
  handleValidate,
  fullNameError,
  phoneError,
}) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  const hanldeChange = (e) => {
    handleChangeGender(e.target.value);
    console.log("e: ", e.target.value);
  };
  return (
    <div className="informationForm">
      <Form onSubmit={handleOnSubmit}>
        <div className="upload">
          {!image ? (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Avatar%2Fimages.png?alt=media&token=9db5a385-f427-471e-a78f-8dc776fb03a3"
              alt="avatar"
              className="img-fluid"
            />
          ) : (
            <img src={image} alt="avatar" className="mr-4" />
          )}
          <button type="button" className="btn">
            <i className="fa fa-upload"></i> Upload File
            <input type="file" onChange={onImageChange} />
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
              value={inputValue.fullName}
              onChange={handleOnChange}
              valid={fullNameError === ""}
              invalid={fullNameError !== ""}
              onBlur={handleValidate}
            />
            <FormFeedback>{fullNameError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input
              type="number"
              id="phone"
              name="phone"
              placeholder="phone"
              value={inputValue.phone}
              onChange={handleOnChange}
              valid={phoneError === ""}
              invalid={phoneError !== ""}
              onBlur={handleValidate}
            />
            <FormFeedback>{phoneError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="gender" className="mr-2">
              Gender:
            </Label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={hanldeChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Orther">Orther</option>
            </select>
            <FormFeedback></FormFeedback>
          </FormGroup>
        </div>
        <input type="submit" value="Update" className="btn text-white" />
      </Form>
    </div>
  );
}

export default InformationForm;
