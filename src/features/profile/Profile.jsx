import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import MyAccount from "./myAccount/MyAccount";
import MyBill from "./myBill/MyBill";
import MyBooking from "./myBooking/MyBooking";
import "./profile.scss";

Profile.propTypes = {};

function Profile(props) {
  const [key, setKey] = useState();

  return (
    <div className="containers pb-5">
      <div className="controllTabs">
        <h1 className="mt-4 mb-4">Your Information</h1>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
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
