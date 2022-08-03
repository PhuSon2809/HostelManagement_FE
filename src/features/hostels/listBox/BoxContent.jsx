import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PropTypes from "prop-types";
import React from "react";
import Box from "../box/Box";
import "./boxContent.scss";

ListBox.propTypes = {
  hostels: PropTypes.array,
};

function ListBox({ hostels }) {
  console.log("list hostel page: ", hostels);
  return (
    <div >
      {hostels?.length <= 0 ? (
        <h2 className="Opps">
          <span>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70 }} />
            Opps
          </span>{" "}
          - No have another hostel in here
        </h2>
      ) : (
        <div className="box-content justify-content-center">
          {hostels?.map((hostel) => (
            <Box hostel={hostel} key={hostel.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListBox;
