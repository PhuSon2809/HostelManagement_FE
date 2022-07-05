import axiosClient from "./axiosClient";
const entity = "/Hostels";

const RoomAPI = {
  async getHostels() {
    const { data } = await axiosClient.get(entity);
    return data;
  },
};

export default RoomAPI;
