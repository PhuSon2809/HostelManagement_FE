import React from "react";
import PropTypes from "prop-types";
import "./boxContent.scss";
import Box from "../box/Box";

ListBox.propTypes = {
  hostels: PropTypes.array,
};

function ListBox({ hostels }) {
  console.log("list hostel page: ", hostels);

  return (
    <div className="box-content justify-content-center">
      {hostels.map((hostel) => (
        <Box hostel={hostel} key={hostel.id} />
      ))}
    </div>
  );
}

export default ListBox;
