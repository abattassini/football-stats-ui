import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SubMenu = ({ item, closeSidebarFunction }) => {
  const [subNav, setSubNav] = useState(false);

  const closeSidebar = () => {
    if (
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ) <= 1024
    ) {
      closeSidebarFunction();
    }
  };

  const showSubNav = () => setSubNav(!subNav);
  return (
    <div>
      <Link
        className="menu-item"
        to={item.path}
        onClick={item.subNav && showSubNav}
      >
        <div>
          {item.icon}
          <span className="menu-label">{item.title}</span>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subNav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              className="submenu-item"
              to={item.path}
              key={index}
              onClick={closeSidebar}
            >
              {item.icon}
              <span className="submenu-label">{item.title}</span>
            </Link>
          );
        })}
    </div>
  );
};
