import axiosClient from "./axiosClient";

const RoomTypeAPI = {
  async getRoomType(id) {
    const token = axiosClient.getToken();
    if (token) {
      axiosClient.setHeaderAuth(token);
      const data = await axiosClient.getWithId(`/RoomTypes?hostelId=${id}`);
      return data;
    }
  },
};

export default RoomTypeAPI;
