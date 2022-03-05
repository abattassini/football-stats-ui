import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import { IconContext } from "react-icons/lib";

import "./Sidebar.css";

export const Sidebar = ({ callback }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    callback(!sidebar);
    setSidebar(!sidebar);
  };

  return (
    <div className="sidebar">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="top-bar">
          <Link className="open-close-button" to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={`scroll-invisible ${sidebar ? "opened" : "closed"}`}
          sidebar={sidebar}
        >
          <div className="wrap">
            <Link className="open-close-button" to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {SidebarData.map((item, index) => {
              return (
                <>
                  <SubMenu
                    item={item}
                    key={index}
                    closeSidebarFunction={showSidebar}
                  />
                </>
              );
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
};
