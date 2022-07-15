import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import MyAccount from "./myAccount/MyAccount";
import MyBill from "./myBill/MyBill";
import MyBooking from "./myBooking/MyBooking";
import "./profile.scss";
import { useLocation, useNavigate, useParams } from "react-router";

Profile.propTypes = {};

function Profile(props) {
  const [key, setKey] = useState("account");
  // const { navKey } = useParams();
  const search = useLocation();
  const navigate = useNavigate();

  console.log("search: ", search.pathname.split("/")[2]);
  let navKey = search.pathname.split("/")[2];

  useEffect(() => {
    if (navKey === "bill") {
      setKey("bill");
    }
    if (navKey === "booking") {
      setKey("booking");
    }
    if (navKey === "account") {
      setKey("account");
    } else {
      console.log(2);
    }
  }, [navKey]);

  const hanldeSelect = (e) => {
    console.log(e);
    navigate("/profile");
    setKey(e);
  };

  return (
    <div className="containers pb-5">
      <div className="controllTabs">
        <h1 className="mt-4 mb-4">Your Information</h1>
        <Tabs
          activeKey={key}
          onSelect={hanldeSelect}
          id="controlled-tab-example"
          className="mb-4"
        >
          <Tab eventKey="account" title="Account">
            <MyAccount />
          </Tab>
          <Tab eventKey="bill" title="Bill">
            <MyBill />
          </Tab>
          <Tab eventKey="booking" title="Booking">
            <MyBooking />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
