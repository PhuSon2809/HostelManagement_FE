import PropTypes from "prop-types";
import React from "react";
import { Tab } from "react-bootstrap";
import AccountInformation from "./accountInformation/AccountInformation";
import ChangePassword from "./changePassword/ChangePassword";
import "./controllAccount.scss";

ControllAccount.propTypes = {
  reload: PropTypes.bool,
};

function ControllAccount({ reload }) {
  return (
    <div className="controllAccount">
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <AccountInformation reload={reload} />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <ChangePassword />
        </Tab.Pane>
      </Tab.Content>
    </div>
  );
}

export default ControllAccount;
