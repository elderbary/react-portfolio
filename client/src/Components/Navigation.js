import React from "react";
import "../styles/navigation.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "portfolio", path: "/", exact: true },
  { name: "o mnie", path: "/o-mnie" },
  { name: "moje cv", path: "/cv" },
  { name: "kontakt", path: "/kontakt" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navigation">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;