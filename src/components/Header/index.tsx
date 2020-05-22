import React from "react";
import { Menu } from "../Menu";

export const Header: React.SFC<{}> = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <span>Galler</span>
        <span>easy</span>
      </div>
      <Menu />
    </div>
  );
};
