import React from "react";
import { NavLink } from "react-router-dom";

export const Menu: React.SFC<{}> = () => {
  return (
    <div className="menu">
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favourite">Favourites</NavLink>
    </div>
  );
};
