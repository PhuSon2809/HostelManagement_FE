import axiosClient from "./axiosClient";

const RoomAPI = {
  async getRoomByIdFilter(id, filter) {
    const data = await axiosClient.getWithIdFilterMiddleParams(
      `/Rooms?hostelId=${id}&pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}`
    );
    return data;
  },

  async getRoomById(id, hostelId) {
    const data = await axiosClient.getWith2Id("/Rooms", id, hostelId);
    return data;
  },
};

export default RoomAPI;
