import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./title.scss";
import HostelAPI from "../../../../apis/hostelApi";

Title.propTypes = {};

function Title({ hostelId, rooms }) {
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
      <h3>{hostelInfor.name}</h3>
      <p>
        <i className="fa fa-check"></i> 36 rooms
      </p>
      <p>
        <i className="fa fa-phone-square"></i> 0914 360 736
      </p>
      <p>
        <i className="fa fa-envelope"></i> greenhostel@gmail.com
      </p>
      <p>
        <i className="fa fa-map-marker"></i> {hostelInfor.address}
      </p>
    </div>
  );
}

export default Title;
