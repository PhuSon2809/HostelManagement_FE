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
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getWithId(`/Accounts/${id}`);
      return data;
    }
  },

  async changePassword(params) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      return axiosClient.put("/Accounts/ChangePassword", params);
    }
  },

  async editAccount(id, params) {
    console.log("params: ", id, params);
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      return axiosClient.putWithId(`/Accounts/${id}`, params);
    }
  },
};

export default accountApi;
