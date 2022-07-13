import React, { useState } from "react";
import PropTypes from "prop-types";
import Topbar from "./Topbar/Topbar";
import SidebarAdmin from "./Layout/sidebar";
import '../admin/Layout/css/admin.css'
import { Outlet } from "react-router-dom";

Admin.propTypes = {};

function Admin({children}) {
  const [reload, setReload] = useState(false);

  return (
    <div>
      <Topbar reload={() => setReload(!reload)} />
      <div className="container_1">
        <SidebarAdmin reload={() => setReload(!reload)} />
        <div className="main-content">
          <main>
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
