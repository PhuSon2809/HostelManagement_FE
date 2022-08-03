import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import BillList from "./BillList/BillList";
import BookingList from "./BookingList/BookingList";
import MyAccount from "./myAccount/MyAccount";
import "./profile.scss";

Profile.propTypes = {};

function Profile(props) {
  const [key, setKey] = useState("account");
  const search = useLocation();
  const navigate = useNavigate();

  console.log("search: ", search.pathname.split("/")[2]);
  console.log("search: ", search);
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
      console.log(3);
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
            <BillList />
          </Tab>
          <Tab eventKey="booking" title="Booking">
            <BookingList />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
