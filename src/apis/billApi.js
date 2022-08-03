import axiosClient from "./axiosClient";

const BillAPI = {

  async getHostelById(id) {
    const data = await axiosClient.getWithId("/Bills", id);
    return data;
  },
};

export default BillAPI;
