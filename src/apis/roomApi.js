import axiosClient from "./axiosClient";

const RoomAPI = {
  async getRoomByIdFilter(id, filter) {
    const data = await axiosClient.getWithIdFilter(
      `/Rooms?pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}&hostelId=${id}`
    );
    return data;
  },

  async getRoomById(id, hostelId) {
    console.log("Id api :", id, hostelId);
    const data = await axiosClient.getWith2Id("/Rooms", id, hostelId);
    return data;
  },
};

export default RoomAPI;
