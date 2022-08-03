import React, { useState } from "react";
import Swal from "sweetalert2";
import accountApi from "../../../../../apis/accountApi";
import axiosClient from "../../../../../apis/axiosClient";
import PasswordForm from "../passwordForm/PasswordForm";
import "./changePassword.scss";

function ChangePassword(props) {
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [tokene, setTokene] = useState(axiosClient.getToken);

  const [passwordInput, setPasswordInput] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    const input = {
      ...passwordInput,
      [name]: value,
    };
    setPasswordInput(input);
  };

  const handleValidation = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    if (name === "newPassword") {
      const uppercasePattern = /(?=.*?[A-Z])/;
      const lowercasePattern = /(?=.*?[a-z])/;
      const digitsPattern = /(?=.*?[0-9])/;
      const minLengthPattern = /.{6,}/;
      const specialCharRegPattern = /(?=.*?[#?!@$%^&*-])/;

      const passwordLength = value.length;
      const uppercasePassword = uppercasePattern.test(value);
      const lowercasePassword = lowercasePattern.test(value);
      const digitsPassword = digitsPattern.test(value);
      const minLengthPassword = minLengthPattern.test(value);
      const specialCharReg = specialCharRegPattern.test(value);

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
      } else if (passwordInput.newPassword === passwordInput.oldPassword) {
        errorMessage = "New password same with old password.";
      } else {
        errorMessage = "";
      }
      setNewPasswordError(errorMessage);
    }

    if (name === "oldPassword" && value.length === 0) {
      setOldPasswordError("Please field old password");
    } else {
      setOldPasswordError("");
    }

    if (name === "confirmPassword" && value.length === 0) {
      setConfirmPasswordError("Please field confirm password.");
    } else if (passwordInput.confirmPassword !== passwordInput.newPassword) {
      setConfirmPasswordError("Confirm password is not matched.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmitChange = async () => {
    console.log("tess    t", axiosClient.getToken().split("/"));

    try {
      const newChangePass = {
        token: tokene,
        currentPassword: passwordInput.oldPassword,
        newPassword: passwordInput.newPassword,
      };
      console.log("newChangePass: ", newChangePass);
      const reponse = await accountApi.changePassword(newChangePass);
      console.log("reponse: ", reponse);
      await Swal.fire(
        "Change password successfully",
        "Click button to continute!",
        "success"
      );
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="changePassword">
      <PasswordForm
        handleOnChange={handleOnChange}
        handleValidation={handleValidation}
        handleSubmitChange={handleSubmitChange}
        passwordInput={passwordInput}
        oldPasswordError={oldPasswordError}
        newPasswordError={newPasswordError}
        confirmPasswordError={confirmPasswordError}
      />
    </div>
  );
}

export default ChangePassword;
