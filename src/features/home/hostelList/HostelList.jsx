import React from "react";
import PropTypes from "prop-types";
import "./hostelList.scss";
import { Link } from "react-router-dom";
import Hostel from "../hostel/Hostel";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

HostelList.propTypes = {
  hostels: PropTypes.array,
};

function HostelList({ hostels }) {

  return (
    <div className="hostelList" id="hostelList">
      <div className="row row-content align-self-center head">
        <div className="col-12 col-md-3">
          <h3>Hostels</h3>
        </div>
        <div className="col col-md align-self-center">
          <p>
            Among going manor who did. Do ye is celebrated it sympathize
            considered. May ecstatic did surprise elegance the ignorant age. Own
            her miss cold last. It so numerous if he outlived disposal. How but
            sons mrs lady when. Her especially are unpleasant out.
          </p>
        </div>
      </div>

      <div className="box-content">
        {hostels.length <= 0 ? (
          <h2 className="Opps">
            <span>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70 }} />
              Opps
            </span>{" "}
            - hostel have no rooms here
          </h2>
        ) : (
          <>
            {hostels?.map((hostel) => (
              <Hostel hostel={hostel} key={hostel.id} />
            ))}
          </>
        )}
      </div>

      <div className="col-12 text-center list_more">
        <Link to="/hostel" className="btn">
          View more
        </Link>
      </div>
    </div>
  );
}

export default HostelList;
