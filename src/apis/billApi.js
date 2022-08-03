import axiosClient from "./axiosClient";

const BillAPI = {
  async getBillById(id) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getWithId(`/Bills?accountId=${id}`);
      return data;
    }
  },

  async getHostelById(id) {
    console.log("id ", id);
    const data = await axiosClient.getWithIdFixBug("/Bills", id);
    return data;
  },
};

export default BillAPI;
