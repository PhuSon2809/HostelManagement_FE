import axiosClient from "./axiosClient";

const HostelAPI = {
  async getHostels(filter) {
    const data = await axiosClient.getWithFilter(
      `/Hostels?pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}`
    );
    return data;
  },

  async getHostelById(id) {
    const data = await axiosClient.getWithId("/Hostels", id);
    return data;
  },
};

export default HostelAPI;
