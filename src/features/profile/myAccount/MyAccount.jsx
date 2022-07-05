import React from "react";
import PropTypes from "prop-types";
import "./myAccount.scss";
import { Tab, Row, Col } from "react-bootstrap";
import Category from "./category/Category";
import ControllAccount from "./controllAccount/ControllAccount";

MyAccount.propTypes = {};

function MyAccount(props) {
  return (
    <div className="myaccount">
      <div className="row">
      <div className="col-12 aboutus mb-4">
        <img src="./images/avatar.jpg" alt="avatar" className="mr-4" />
        <div>
          <span>Tran Phu Son</span>
          <i>Personalize your account by updating your information</i>
        </div>
      </div>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Category />
          </Col>
          <Col sm={9}>
            <ControllAccount />
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default MyAccount;
