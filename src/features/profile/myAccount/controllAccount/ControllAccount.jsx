import React from "react";
import PropTypes from "prop-types";
import "./controllAccount.scss";
import { Tab } from "react-bootstrap";
import AccountInformation from "./accountInformation/AccountInformation";
import ChangePassword from "./changePassword/ChangePassword";

ControllAccount.propTypes = {};

function ControllAccount(props) {
  return (
    <div className="controllAccount">
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <AccountInformation/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <ChangePassword/>
        </Tab.Pane>
      </Tab.Content>
    </div>
  );
}

export default ControllAccount;
