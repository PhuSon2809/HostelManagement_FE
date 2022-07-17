import axiosClient from "./axiosClient";

const BillAPI = {
  async getBillById(id) {
    console.log("Id api :", id);
    const data = await axiosClient.getWithId("/Bills", id);
    return data;
  },
};

export default BillAPI;