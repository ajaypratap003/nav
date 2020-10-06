import React from 'react';
import { PageSidebar, Nav, NavList, NavItem, NavGroup } from '@patternfly/react-core';
import { NavLink, useLocation } from "react-router-dom";

const SidebarItem = ({ text, href, exact, apiName }) => (
  <NavItem>
    <NavLink
      to={href.replace('*', apiName)}
      activeClassName="pf-m-current"
      exact={exact}
    >
      {text}
    </NavLink>
  </NavItem>
);

const Sidebar = ({ routes }) => {
  const { pathname } = useLocation();
  const split = pathname.replace(/\/$/, '').split('/');
  const apiName = split.length > 1 ? split[split.length - 1] : null;
  
  const groupedRoutes = routes
    .filter(({ group }) => Boolean(group))
    .reduce((acc, cur) => {
      acc[cur.group] = acc[cur.group] || [];
      acc[cur.group].push(cur);

      return acc;
    }, {});

  return <PageSidebar nav={
    <Nav>
      <NavList>
        <SidebarItem href="/" text="Dashboard" exact />
        {Object.entries(groupedRoutes)
          .map(([group, items]) => (
            <NavGroup key={group} title={group}>
              {items.map(({ path, text }) => (
                <SidebarItem key={path + text} href={path} text={text} apiName={apiName} />
              ))}
            </NavGroup>
          ))}
      </NavList>
    </Nav>
  } />
}

export default Sidebar;
