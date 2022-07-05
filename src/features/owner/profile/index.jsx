import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div class="card text-center">
        <img
          className="card-img-top"
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
        />
        <div className="card-body">
          <h5 class="card-title">Name</h5>
          <p className="card-text">Phone</p>
          <p className="card-text">Email</p>
          <p className="card-text">Address</p>
          <Link to="/owner/profile/edit" className="btn btn-primary">
            Edit profile
          </Link>
        </div>
      </div>
    </>
  );
}
export default Profile;
