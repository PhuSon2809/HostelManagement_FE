import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/admin.css"

export default function SidebarAdmin({ reload }) {
  const currentUser = useSelector((state) => state.login.infoUser);

  return (
    <div className="SidebarContainer">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <h3 className="sidebarTitle">Dashboard</h3>

            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link to="/admin" className="link">
                  <li className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon" />
                    Home
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Account Management</h3>
            <ul className="sidebarList">
              <Link to="/admin/user" className="link">
                <li className="sidebarListItem">
                  <PermIdentityIcon className="sidebarIcon" />
                  User
                </li>
              </Link>
              <Link to="/admin/owner" className="link">
                <li className="sidebarListItem">
                  <PermIdentityIcon className="sidebarIcon" />
                  Owner
                </li>
              </Link>
            </ul>
          </div>
{/* 
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Manager</h3>
            <ul className="sidebarList">
              <Link to="/manager/group" className="link">
                <li className="sidebarListItem">
                  <AttachMoneyIcon className="sidebarIcon" />
                  Group
                </li>
              </Link>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Manage Post</h3>
            <ul className="sidebarList">
              <Link to="/manager/post" className="link">
                <li className="sidebarListItem">
                  <DynamicFeedIcon className="sidebarIcon" />
                  Post
                </li>
              </Link>
              <Link to="/manager/tradingPost" className="link">
                <li className="sidebarListItem">
                  <DynamicFeedIcon className="sidebarIcon" />
                  Trading Post
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Manage Contest</h3>
            <ul className="sidebarList">
              <Link to="/manager/contest" className="link">
                <li className="sidebarListItem">
                  <EmojiEventsIcon className="sidebarIcon" />
                  Contest
                </li>
              </Link>
              <Link to="/manager/prize" className="link">
                <li className="sidebarListItem">
                  <WorkspacePremiumIcon className="sidebarIcon" />
                  Prize
                </li>
              </Link>
              <Link to="/manager/proposal" className="link">
                <li className="sidebarListItem">
                  <EmojiEventsIcon className="sidebarIcon" />
                  Proposal
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Orther</h3>
            <ul className="sidebarList">
              <Link to="/manager/bill" className="link">
                <li className="sidebarListItem">
                  <DescriptionIcon className="sidebarIcon" />
                  Bill
                </li>
              </Link>
              <Link to="/manager/feedback" className="link">
                <li className="sidebarListItem">
                  <ChatBubbleOutlineIcon className="sidebarIcon" />
                  Feedback
                </li>
              </Link>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
