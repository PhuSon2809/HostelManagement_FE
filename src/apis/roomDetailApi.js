import axiosClient from "./axiosClient";

const RoomDetailAPI = {
  async getRoomDetailById(id) {
    const data = await axiosClient.getWithId("/Rooms", id);
    return data;
  },
};

export default RoomDetailAPI;
