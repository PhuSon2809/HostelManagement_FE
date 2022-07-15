import React from "react";
import PropTypes from "prop-types";
import "./listTitle.scss";

ListTitle.propTypes = {};

function ListTitle(props) {
  return (
    <div className="text-center listTitle">
      <h3>Our Hostel</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio qui,
        magni iure aperiam explicabo quo hic corporis. Debitis excepturi hic
        iure aspernatur repellendus quos recusandae est similique. Unde,
        expedita distinctio?
      </p>
    </div>
  );
}

export default ListTitle;
