import React, { useState } from "react";
import "./accountInformation.scss";
import { useSelector } from "react-redux";
import InformationForm from "../informationForm/InformationForm";

function AccountInformation(props) {
  const current = useSelector((state) => state.login.infoUser);

  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [inputValue, setInputValue] = useState({
    fullName: "",
    phone: "",
    gender: {
      male: "Male",
      femal: "Female",
      other: "Orther",
    },
  });

  const [image, setImage] = useState(current.avatar);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const inputNew = {
      ...inputValue,
      [name]: value,
    };
    setInputValue(inputNew);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleValidate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const phonePattern = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

    const phoneTest = phonePattern.test(value);

    if (name === "fullName" && value.length === 0) {
      setFullNameError("Please field your name.");
    } else {
      setFullNameError("");
    }

    if (name === "phone") {
      if (value.length === 0) {
        setPhoneError("Please field your phone.");
      } else if (!phoneTest) {
        setPhoneError(
          "Phone must start with 03, 05, 07, 08, 09 and have 10 number"
        );
      } else {
        setPhoneError("");
      }
    }

    if(name === "gender"){
      if(value.ch)
    }
  };

  return (
    <div className="accountInformation">
      
      <InformationForm
        current={current}
        inputValue={inputValue}
        image={image}
        onImageChange={onImageChange}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        handleValidate={handleValidate}
        fullNameError={fullNameError}
        phoneError={phoneError}
        genderError={genderError}
      />
    </div>
  );
}

export default AccountInformation;
