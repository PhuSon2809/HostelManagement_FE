import React from "react";
import PropTypes from "prop-types";
import "./dashboard.scss";
import { Link } from "react-router-dom";

Dashboard.prototype = {};

function Dashboard() {
  // const toggleBanner = () => {
  //     document.querySelector('.sidebar').classList.toggle("hide");
  // }
  // const [visible, setVisible] = React.useState(false);
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav id="sidebar">
      <div class="custom-menu">
        <button type="button" id="sidebarCollapse" class="btn btn-primary">
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <Link to="/owner/profile">
        <div className="p-4 pt-5 bg-dark">
          <div className="header">
            <img
              class="avatar"
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
            />
            <p className="align-self-center pr-2">Full Name</p>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-4">
        <h2>
          <Link to="/owner" className="logo">
            Dashboard
          </Link>
        </h2>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Hostel
            </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <Link to="/owner/list_user">User</Link>
              </li>
              <li>
                <Link to="/owner/list_room ">Room</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/owner/bill">Bill</Link>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Create
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <Link to="/owner/create_hostel">Hostel</Link>
              </li>
              <li>
                <Link to="/owner/create_room">Room</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/owner/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  // return (
  //   <>
  //     <IconContext.Provider value={{ color: "red" }}>
  //       <div className="navbar">
  //         <Link to="#" className="menu-bars">
  //           <FaIcons.FaBars onClick={showSidebar} />
  //         </Link>
  //       </div>
  //       <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
  //         <ul className="nav-menu-item">
  //           <li className="navbar-toggle">
  //             <Link to="#" className="menu-bars">
  //               <AiIcons.AiOutlineCloseSquare />
  //             </Link>
  //           </li>
  //           {SideBarData.map((item, index) => {
  //             return (
  //               <li key={index} className={item.cName}>
  //                 <Link to={item.path}>
  //                   {item.icon}
  //                   <span>{item.title}</span>
  //                 </Link>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </nav>
  //     </IconContext.Provider>
  //   </>
  // );
}
export default Dashboard;
