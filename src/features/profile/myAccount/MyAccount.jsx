import React, { useEffect, useState } from "react";
import { Col, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import accountApi from "../../../apis/accountApi";
import Category from "./category/Category";
import ControllAccount from "./controllAccount/ControllAccount";
import "./myAccount.scss";

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
  }, [reload]);

  return (
    <div className="myaccount">
      <div className="row">
        <div className="col-12 aboutus mb-4">
          {!account?.avatar ? (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Avatar%2Fimages.png?alt=media&token=9db5a385-f427-471e-a78f-8dc776fb03a3"
              alt="avatar"
              className="mr-4"
            />
          ) : (
            <img src={account.avatar} alt="avatar" className="mr-4" />
          )}
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
            <ControllAccount
              account={account}
              reload={() => setReload(!reload)}
            />
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default MyAccount;
