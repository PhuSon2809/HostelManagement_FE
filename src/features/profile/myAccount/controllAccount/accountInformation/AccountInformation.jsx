import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import accountApi from "../../../../../apis/accountApi";
import StorageKeys from "../../../../../constants/storage-keys";
import { storage } from "../../../../../Firebase/firebase";
import { setAccount } from "../../../../../redux/actions/login";
import InformationForm from "../informationForm/InformationForm";
import "./accountInformation.scss";
import PropTypes from "prop-types";

AccountInformation.propTypes = {
  reload: PropTypes.bool,
};

function AccountInformation({ reload }) {
  const current = useSelector((state) => state.login.infoUser);
  const dispatch = useDispatch();

  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [inputValue, setInputValue] = useState({
    fullName: "",
    phone: "",
  });
  const [selected, setSelected] = useState("Male");
  const [image, setImage] = useState(current.avatar);
  const [stringImg, setStringImg] = useState([]);

  const handleChangeGender = (name) => {
    setSelected(name);
  };

  const onImageChange = (event) => {
    let storageImage = [];
    console.log("event.target.files: ", event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      storageImage.push(event.target.files[0]);
    }
    console.log("storageImage: ", storageImage);
    setStringImg(storageImage);
  };

  console.log("stringImg: ", stringImg);
  let imagesLink = [];
  const uploadAndGetLinkImg = async () => {
    for (let i = 0; i < stringImg.length; i++) {
      const storageRef = ref(storage, `/Avatar/${stringImg[i].name}`);
      console.log(stringImg[i].name);
      await uploadBytes(storageRef, stringImg[i]);
      // get link from database to download
      await getDownloadURL(storageRef)
        .then((url) => {
          imagesLink.push(url);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
    console.log("imgLink: ", imagesLink);
  };

  const handleSubmit = async () => {
    await uploadAndGetLinkImg();
    console.log("await uploadAndGetLinkImg();: ", await uploadAndGetLinkImg());
    try {
      const newEdit = {
        id: current.id,
        name: inputValue.fullName,
        phone: inputValue.phone,
        gender: selected ? selected : current.gender,
        roleId: current.roleId,
        avatar: imagesLink[0] ? imagesLink[0] : current.avatar,
        status: true,
      };
      console.log("newEdit: ", newEdit);
      const reponse = await accountApi.editAccount(current.id, newEdit);
      const pushNewEdited = {
        ...current,
        id: current.id,
        name: inputValue.fullName,
        phone: inputValue.phone,
        gender: selected ? selected : current.gender,
        roleId: current.roleId,
        avatar: imagesLink[0] ? imagesLink[0] : current.avatar,
        status: true,
      };
      console.log("pushNewEdited: ", pushNewEdited);
      localStorage.setItem(StorageKeys.ACCOUNT, JSON.stringify(pushNewEdited));
      dispatch(setAccount(pushNewEdited));
      reload();
      await Swal.fire(
        "Edit account successfully",
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

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const inputNew = {
      ...inputValue,
      [name]: value,
    };
    setInputValue(inputNew);
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
  };

  return (
    <div className="accountInformation">
      <InformationForm
        current={current}
        inputValue={inputValue}
        handleChangeGender={handleChangeGender}
        image={image}
        onImageChange={onImageChange}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        handleValidate={handleValidate}
        fullNameError={fullNameError}
        phoneError={phoneError}
      />
    </div>
  );
}

export default AccountInformation;
