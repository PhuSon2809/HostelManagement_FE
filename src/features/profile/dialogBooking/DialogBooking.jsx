import React from "react";
import PropTypes from "prop-types";

DialogBooking.propTypes = {
  booking: PropTypes.object,
  handleDeleteBooking: PropTypes.func,
};

function DialogBooking({ booking, handleDeleteBooking }) {
  console.log("props booking: ", booking);

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="exampleModalLongTitle">
              Booking
            </h6>
            <button
              type="button"
              className="close m-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row ml-1">
              <div className="col-12 col-md-6">
                <div className="row mb-1">
                  <div className="col-5">
                    <p>
                      <i className="fa fa-user" /> <span>Owner:</span>
                    </p>
                  </div>
                  <div className="col-7">
                    {booking?.room?.hostel.account.name}
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-5">
                    <p>
                      <i className="fa fa-phone" /> <span>Phone:</span>
                    </p>
                  </div>
                  <div className="col-7">
                    {booking?.room?.hostel.account.phone}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="row mb-1">
                  <div className="col-5">
                    <p>
                      <i className="fa fa-home" /> <span>Hostel:</span>
                    </p>
                  </div>
                  <div className="col-7">{booking?.room?.hostel?.name}</div>
                </div>
                <div className="row mb-1">
                  <div className="col-5">
                    <p>
                      <i className="fa fa-bed" /> <span>Room:</span>
                    </p>
                  </div>
                  <div className="col-7">{booking?.room?.name}</div>
                </div>
              </div>
            </div>
            <div className="row ml-1 mb-1">
              <div className="col-4">
                <p>
                  <i className="fa fa-calendar" /> <span>Booking Date:</span>
                </p>
              </div>
              <div className="col-7">{booking.bookingDate}</div>
            </div>
            <div className="row ml-1 mb-1">
              <div className="col-4">
                <p>
                  <i className="fa fa-calendar" />
                  <span>Meeting Date:</span>
                </p>
              </div>
              <div className="col-7">{booking.meetingDate}</div>
            </div>
          </div>
          <div className="modal-footer pt-0 pb-0">
            <p className="m-auto">Do you want delete booking?</p>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancle
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDeleteBooking}
              data-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogBooking;
