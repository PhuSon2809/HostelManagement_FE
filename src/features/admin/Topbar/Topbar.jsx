import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Box,
  Typography,
} from "@mui/material/";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAccount } from "../../../redux/actions/login";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Chat from "@mui/icons-material/Chat";

import "./Topbar.css";
// import notiApi from './../../../api/notiApi';
// import formatDate from './../../../utils/formatDate';

Topbar.propTypes = {};

function Topbar({ reload }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.login.infoUser);

  // ANCHOR NOTIFICATION
  const [anchorElNoti, setAnchorElNoti] = React.useState(null);

  const isNotiOpen = Boolean(anchorElNoti);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  // const [reload, setReload] = useState(false);
  const [notiCount, setNotiCount] = useState("");
  const [notiList, setNotiList] = useState([]);
  // useEffect(async () => {
  //     const reponse = await notiApi.getAllByAccountId(currentUser.accountId);
  //     setNotiList(reponse.data)
  //     setNotiCount(reponse.count)
  // }, [3000, reload])

  // const handleReaded = async (noti) => {
  //     if (noti.postId) {
  //         navigate(`/post/${noti?.postId}`)
  //     } else if (noti.tradingPostId) {
  //         navigate(`/tradingPost/${noti?.tradingPostId}`)
  //     } else if (noti.contestId) {
  //         navigate(`/contest/${noti?.contestId}`)
  //     }
  //     try {
  //         const itemId = {
  //             id: noti.id
  //         }
  //         const reponse = await notiApi.changeReaded(noti.id);
  //         // setReload(!reload)
  //         reload();
  //     } catch (error) {
  //         console.log("fail noti: ", error);
  //     }
  // }

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorElNoti(null);
    handleMobileMenuClose();
  };
  const handleMessage = () => {
    navigate(`/message`);
  };
  // Onclick redirect to Profile
  const handleOpenProfile = () => {
    navigate(`/account/${currentUser.accountId}`);
  };
  const handleOpenMemberPage = () => {
    navigate("/home");
  };
  const handleLogoutClick = () => {
    dispatch(logoutAccount(true));
    navigate("/");
  };
  const handleNotifiMenuOpen = (event) => {
    setAnchorElNoti(event.currentTarget);
  };

  const handleOpenSetting = () => {
    // if(!AccountId) return;
    navigate(`/setting/account/${currentUser.accountId}`);
    // <Redirect to="/setting/account/edit" />
  };

  // HANDLE OPEN PROPOSAL PAGE
  const handleOpenProposal = () => {
    // if(!AccountId) return;
    navigate("/proposalToOpenContest");
    // <Redirect to="/setting/account/edit" />
  };

  // Menu in avatar
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
    </Menu>
  );
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {currentUser.roleId === 1 ? (
            <span className="logo">HOM Admin</span>
          ) : currentUser.roleId === 3 ? (
            <span className="logo">HOM Owner</span>
          ) : (
            <span className="logo">HOM Owner</span>
          )}
        </div>
        <div className="topRight">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <Avatar src={currentUser.avatar}></Avatar>
          </IconButton>
          {/* <img src="" alt="" className="topAvatar" /> */}
        </div>
      </div>
      {renderMenu}
      {/* {renderNotifi} */}
    </div>
  );
}

export default Topbar;
