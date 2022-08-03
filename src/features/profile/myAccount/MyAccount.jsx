import React, { useState } from "react";
import PropTypes from "prop-types";
import "./myAccount.scss";
import { Tab, Row, Col } from "react-bootstrap";
import Category from "./category/Category";
import ControllAccount from "./controllAccount/ControllAccount";
import { useSelector } from "react-redux";
import accountApi from "../../../apis/accountApi";
import { useEffect } from "react";

MyAccount.propTypes = {};

function MyAccount(props) {
  const current = useSelector((state) => state.login.infoUser);
  const [account, setAccount] = useState({});
  const [reload, setReload] = useState(false);

  const fetchData = async () => {
    const accountDetailApi = await accountApi.getAccountById(current.id);
    setAccount(accountDetailApi);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Fail to get account detail!");
    }
  }, [current.id, reload]);

  return (
    <div className="myaccount">
      <div className="row">
        <div className="col-12 aboutus mb-4">
          <img src={account.avatar} alt="avatar" className="mr-4" />
          <div>
            <span>{account.name}</span>
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
            <ControllAccount reload={() => setReload(!reload)}/>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default MyAccount;
