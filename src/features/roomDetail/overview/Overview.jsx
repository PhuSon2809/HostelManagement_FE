import React from "react";
import PropTypes from "prop-types";
import "./overview.scss";

Overview.propTypes = {};

function Overview(props) {
  return (
    <div className="overview" id="overview">
      <div className="address">
        <div className="pb-2">
          <i className="fa fa-map-marker" aria-hidden="true"></i> District 1, Ho Chi
          Minh City, Viet Nam
        </div>
        <div className="pb-2">
          <i className="fa fa-building-o" aria-hidden="true"></i> Apartment · 35 m2
        </div>
        <p>
        <i className="fa fa-check" aria-hidden="true"></i> Whole house · 1 bathroom · 1 bed · 1 bedroom · 1 kitchen · 2 guests
        </p>
      </div>
      <div className="over">
        <p>
          <i className="fa fa-star" />5 minutes from Ben Thanh market & iconic
          Bitexco tower. This cozy and spacious apartment offers everything you
          need.
          <br /><i className="fa fa-star" />
          Studio Studio has a comfortable queen bed
          <br /><i className="fa fa-star" />A KITCHEN with everything you need to show
          how good you are at cooking.
          <br /><i className="fa fa-star" />
          SPACE to enjoy your romantic moment and delicious dinner.
          <br /><i className="fa fa-star" />
          Private BATHROOM to shower after a long day. Guests can use the entire
          apartment.
          <br /><i className="fa fa-star" />
          There is no car parking space. (No car parking lot)
          <br /><i className="fa fa-star" />
          Guests have access to the building (except after 10.30PM to 5AM -
          contact the Landlord first to discuss further) and can contact the
          host via Messages or other means of communication from 6 a.m. - 12
          a.m.
        </p>
      </div>
    </div>
  );
}

export default Overview;
