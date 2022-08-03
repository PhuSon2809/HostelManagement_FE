import axiosClient from "./axiosClient";

const RoomAPI = {
  async getRoomByIdFilter(id, filter) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getWithIdFilterMiddleParams(
        `/Rooms?hostelId=${id}&pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}`
      );
      return data;
    }
  },

  async getRoomById(id, hostelId) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getWith2Id("/Rooms", id, hostelId);
      return data;
    }
  },

  async getDistrict(params) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.post("/Filter", params);
      return data;
    }
  },

  async getRoomByTypeRoom(hostelId, typeRoomName) {
    console.log("getRoomByTypeRoom: ", hostelId, typeRoomName);
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getType(
        `/Rooms?hostelId=${hostelId}&roomTypeName=${typeRoomName}`
      );
      return data;
    }
  },
};

export default RoomAPI;
