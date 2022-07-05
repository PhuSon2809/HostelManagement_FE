import axiosClient from "./axiosClient";
const entity = "/Hostels";

const HostelAPI = {
  async getHostels() {
    const { data } = await axiosClient.get(entity);
    return data;
  },
};

export default HostelAPI;
