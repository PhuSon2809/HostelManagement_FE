import axiosClient from "./axiosClient";

const HostelAPI = {
  async getHostels(filter) {
    console.log("params", filter);
    const data = await axiosClient.getWithFilter(
      `/Hostels?pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}`
    );
    return data;
  },
};

export default HostelAPI;
