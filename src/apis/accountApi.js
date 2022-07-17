import axiosClient from "./axiosClient";

const accountApi = {
  register(data) {
    //set duong` dan~
    const url = "/Accounts/SignUp";
    return axiosClient.post(url, data);
  },

  login(data) {
    //set duong` dan~
    console.log("data: ", data);
    const url = "/Accounts/SignIn";
    return axiosClient.post(url, data);
  },

  async getAccountById(id) {
    console.log("Id api :", id);
    const data = await axiosClient.getWithId("/Accounts", id);
    return data;
  },
};

export default accountApi;
