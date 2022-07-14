import React, { useState } from "react";
import PropTypes from "prop-types";
import Topbar from "./Topbar/Topbar";
import "../admin/Layout/css/admin.css";
import { Outlet } from "react-router-dom";
import SidebarOwner from "./Layout/sidebar";

Owner.propTypes = {};

function Owner({ children }) {
  const [reload, setReload] = useState(false);

  return (
    <div className="owner">
      <Topbar reload={() => setReload(!reload)} />
      <div className="container_1">
        <SidebarOwner reload={() => setReload(!reload)} />
        <div className="main-content">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Owner;
