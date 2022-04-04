import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useSelector, useDispatch } from "react-redux";
import { updateSidebarState } from "../../actions";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

import "./Sidebar.css";

export const Sidebar = ({ callback }) => {
  const openCloseSidebar = useSelector((state) => state.openCloseSidebar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showSidebar = () => {
    dispatch(updateSidebarState(!openCloseSidebar));
  };

  return (
    <div className="sidebar">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="top-bar">
          <Link className="open-close-button" to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img
            className="app-logo"
            src={logo}
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
        <nav
          className={`scroll-invisible ${
            openCloseSidebar ? "opened" : "closed"
          }`}
          sidebar={openCloseSidebar}
        >
          <div className="wrap">
            <Link className="open-close-button" to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <SubMenu item={item} key={index} />
                </>
              );
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
};
