import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomTypeAPI from "../../../../apis/roomTypeApi";
import "./listOption.scss";

function ListOption({ onChange }) {
  const { hostelId } = useParams();
  const [roomTypes, setRoomTypes] = useState([]);

  const fetchData = async () => {
    const responseRoomType = await RoomTypeAPI.getRoomType(hostelId);
    setRoomTypes(responseRoomType);
    console.log("roomTypes: ", roomTypes);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get Room type");
    }
  }, [hostelId]);

  const handleRoomTypeClick = (roomType) => {
    onChange(roomType?.name);
  };

  return (
    <div className="listOption">
      <div className="sidebar p-3 mt-md-5 mt-4">
        <h3>Room Type</h3>
        {roomTypes?.length <= 0 ? (
          <h3>No Option</h3>
        ) : (
          <div className="filter">
            {roomTypes.map((roomType) => (
              <a
                className="btn"
                key={roomType.id}
                onClick={() => handleRoomTypeClick(roomType)}
              >
                <p>{roomType.name}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListOption;
