import React, { useState } from "react";
import RoomImage from "./roomImage/RoomImage";
import Menu from "./menu/Menu";
import Overview from "./overview/Overview";
import Host from "./host/Host";
import AnotherRoom from "./anotherRoom/AnotherRoom";
import Utilities from "./utilities/Utilities";
import { useParams } from "react-router";
import RoomAPI from "../../apis/roomApi";
import { useEffect } from "react";

function RoomDetail(props) {
  const { roomId, hostelId } = useParams();
  const [roomDetail, setRoomDetail] = useState({});

  const fetchData = async () => {
    const roomDetailByIdApi = await RoomAPI.getRoomById(roomId);
    setRoomDetail(roomDetailByIdApi);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get room detail!");
    }
  }, [roomId]);

  return (
    <div className="containers" key={roomDetail.id}>
      <div className="row">
        <RoomImage roomDetail={roomDetail}/>
      </div>
      <div className="row">
        <Menu />
      </div>
      <div className="row">
        <div className="col-12 col-md-9 p-0 order-last order-md-first">
          <Overview roomDetail={roomDetail}/>
          <Utilities roomDetail={roomDetail}/>
        </div>
        <div className="col-12 col-md-3 p-0 order-first">
          <Host />
        </div>
      </div>
      <div className="row">
        <AnotherRoom hostelId={hostelId} />
      </div>
    </div>
  );
}

export default RoomDetail;
