import axiosClient from "./axiosClient";
const entity = "/Hostels";

const RoomAPI = {
  async getRooms() {
    const { data } = await axiosClient.get(entity);
    return data;
  },
};

export default RoomAPI;
