import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { RootFavouriteState } from '../../pages/Favourite';

export const Menu: React.SFC<{}> = () => {
  const favourites = useSelector((state: RootFavouriteState) => {
    return state.favourite.favourite;
  });
  return (
    <div className="menu">
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favourite">
        {`Favourites ${
          Object.keys(favourites).length > 0
            ? `(${Object.keys(favourites).length})`
            : ''
        }`}
      </NavLink>
    </div>
  );
};
