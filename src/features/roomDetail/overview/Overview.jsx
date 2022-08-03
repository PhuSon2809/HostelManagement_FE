import PropTypes from "prop-types";
import React from "react";
import currencyFormat from "../../../utils/formatPrize";
import "./overview.scss";

Overview.propTypes = {
  roomDetail: PropTypes.object,
};

function Overview({ roomDetail }) {
  return (
    <div className="overview" id="overview" key={roomDetail.roomType?.id}>
      <div className="address">
        <div className="pb-2 price">
          <i className="fa fa-money" aria-hidden="true"></i>
          {currencyFormat(roomDetail.roomType?.price)} / month
        </div>
        <div className="pb-2">
          <i className="fa fa-building-o" aria-hidden="true"></i> Apartment ·
          {roomDetail.roomType?.acreage} m2
        </div>
        {roomDetail.roomType?.furniture ? (
          <p>
            <i className="fa fa-check" aria-hidden="true"></i> Whole house · 1
            bathroom · 2 bed · 2 bedroom · 1 kitchen
          </p>
        ) : (
          <p>
            <i className="fa fa-check" aria-hidden="true"></i> Whole house · 1
            bathroom · 1 mezzanine · 1 kitchen
          </p>
        )}
      </div>
      <div className="over">
        <p>
          <i className="fa fa-star" />
          {roomDetail.roomType?.description}
        </p>
      </div>
    </div>
  );
}

export default Overview;
