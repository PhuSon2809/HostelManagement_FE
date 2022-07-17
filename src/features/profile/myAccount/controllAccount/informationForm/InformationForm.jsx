import React from "react";
import PropTypes from "prop-types";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

InformationForm.propTypes = {};

function InformationForm({
  inputValue,
  image,
  onImageChange,
  handleOnChange,
  handleSubmit,
  handleValidate,
  fullNameError,
  phoneError,
  genderError,
}) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="upload">
          <img src={image} alt="avatar" className="mr-4" />
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
            <Label for="gender" className="mr-5">
              Gender:
            </Label>
            <span className="first">
              <Input
                type="radio"
                id="gender"
                name="gender"
                placeholder="gender"
                value={inputValue.gender.male}
                valid={genderError === ""}
                invalid={genderError !== ""}
                onChange={handleOnChange}
                onBlur={handleValidate}
              />
              Male
            </span>
            <span>
              <Input
                type="radio"
                id="gender"
                name="gender"
                placeholder="gender"
                value={inputValue.gender.femal}
                valid={genderError === ""}
                invalid={genderError !== ""}
                onChange={handleOnChange}
                onBlur={handleValidate}
              />
              Female
            </span>
            <span>
              <Input
                type="radio"
                id="gender"
                name="gender"
                placeholder="gender"
                value={inputValue.gender.other}
                valid={genderError === ""}
                invalid={genderError !== ""}
                onChange={handleOnChange}
                onBlur={handleValidate}
              />
              Orther
            </span>
            <FormFeedback></FormFeedback>
          </FormGroup>
        </div>
        <input type="submit" value="Update" className="btn text-white" />
      </Form>
    </div>
  );
}

export default InformationForm;
