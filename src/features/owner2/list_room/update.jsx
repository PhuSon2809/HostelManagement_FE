import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import { showPrize } from '../../../redux/actions/prize';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import RoomAPI from "../../../apis/roomApi";
import FormUpdateRoom from "./formUpdate";

export default function UpdateRoom() {
  // const state = useSelector(state => state.prize);
  // const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const roomId = params.id;
  console.log("roomId: ", roomId);

  const [room, setRoom] = useState({});

  console.log("room: ", room);

  const fetchData = async () => {
    const result = await RoomAPI.getRoomById(roomId);
    setRoom(result);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get room");
    }
  }, [roomId]);

  return (
    <>
      <div className="title-page">
        <ManageAccountsIcon />
        <span>Update Room</span>
      </div>

      <div className="card-box-custom">
        <FormUpdateRoom room={room} />
      </div>
    </>
  );
}
