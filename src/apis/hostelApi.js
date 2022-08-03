import axiosClient from "./axiosClient";

const HostelAPI = {
  async getHostels(filter) {
    const token = axiosClient.getToken();
    if (token) {
      const data = await axiosClient.getWithFilter(
        `/Hostels?pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}`
      );
      return data;
    }
  },

  async getHostelById(id) {
    const token = axiosClient.getToken();
    if (token) {
      const data = await axiosClient.getWithId(`/Hostels/${id}`);
      return data;
    }
  },

  async getHostelByDistrict(district) {
    console.log("district: ", district);
    const token = axiosClient.getToken();
    if (token) {
      const data = await axiosClient.getNo(`/Hostels?district=${district}`);
      return data;
    }
  },
};

export default HostelAPI;
