import PropTypes from "prop-types";
import React, { useState } from "react";
import "./listType.scss";

ListType.propTypes = {
  count: PropTypes.number,
};

function ListType({ districtParams, count, onChange }) {
  const [districtList, setDistrictList] = useState([
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 9",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Quận Bình Thạnh",
    "Quận Thủ Đức",
    "Quận Gò Vấp",
    "Quận Phú Nhuận",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Bình Tân",
    "Huyện Nhà Bè",
    "Huyện Hóc Môn",
    "Huyện Bình Chánh",
    "Huyện Củ Chi",
    "Huyện Cần Giờ",
  ]);
  const handleClickDistrict = (district) => {
    onChange(district);
  };
  // const handleClickDistrict = (hostel) => {
  //   const district = hostel.address.split(",")[1];
  //   onChange(district);
  // };
  return (
    <div className="listType mb-4">
      <div className="title">
        <h2>Select Location</h2>
      </div>
      <div className="sidebar p-3">
        <h3>District</h3>
        <ul>
          {/* {hostels?.map((hostel) => (
            <li
              className="filter"
              key={hostel.id}
              onClick={() => handleClickDistrict(hostel)}
            >
              <p>{hostel.address.split(",")[1]}</p>
            </li>
          ))} */}
          {districtList?.map((district, index) => (
            <li
              className="filter"
              key={index}
              onClick={() => handleClickDistrict(district)}
            >
              <p>{district}</p>
              {districtParams === district ? <span>({count})</span> : <span>()</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListType;
