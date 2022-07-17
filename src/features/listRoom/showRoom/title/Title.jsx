import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./title.scss";
import HostelAPI from "../../../../apis/hostelApi";

Title.propTypes = {
  hostelId: PropTypes.string,
  count: PropTypes.number,
};

function Title({ hostelId, count }) {
  const [hostelInfor, setHostelInfor] = useState({});

  const fetchData = async () => {
    const hostelByIdApi = await HostelAPI.getHostelById(hostelId);
    setHostelInfor(hostelByIdApi);
  };
  console.log("hostelInfor: ", hostelInfor);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get hostel");
    }
  }, [hostelId]);

  return (
    <div className="name">
      <h3>Hostel: {hostelInfor.name}</h3>
      <p>
        <i className="fa fa-check"></i> {count} rooms
      </p>
      <div > 
        <p>
          <i className="fa fa-user"></i> Host: {hostelInfor.account?.name}
        </p>
        <p>
          <i className="fa fa-phone-square"></i> {hostelInfor.account?.phone}
        </p>
      </div>
      <p>
        <i className="fa fa-map-marker"></i> {hostelInfor.address}
      </p>
    </div>
  );
}

export default Title;
