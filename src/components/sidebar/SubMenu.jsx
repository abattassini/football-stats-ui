import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSidebarState } from "../../actions";
import { useWindowSize } from "../../hooks/useWindowSize";

export const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const dispatch = useDispatch();

  const windowSize = useWindowSize();

  const smallWindowWidth = useMemo(() => {
    return windowSize.width < 768;
  }, [windowSize]);

  const mediumWindowWidth = useMemo(() => {
    return windowSize.width < 992;
  }, [windowSize]);

  const closeSidebar = () => {
    if (mediumWindowWidth) {
      dispatch(updateSidebarState(false));
    }
  };

  const showSubNav = () => setSubNav(!subNav);
  return (
    <div>
      <Link className="menu-item" to={item.path} onClick={() => closeSidebar()}>
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
