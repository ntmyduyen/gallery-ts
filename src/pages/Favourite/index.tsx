import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ListImage from '../../components/ListImage';
import { FAVOURITE_TYPE } from '../../redux/actionTypes/favourite';
import { favouriteRequest } from '../../redux/actions/favourtite';

export interface RootFavouriteState {
  favourite: {
    favourite: object;
  };
}

export const Favourite: React.SFC<{}> = () => {
  const dispatch = useDispatch();

  const favourites = useSelector((state: RootFavouriteState) => {
    return state.favourite.favourite;
  });
  const handleSelect = useCallback((item: FAVOURITE_TYPE) => {
    dispatch(favouriteRequest(item));
  }, []);
  return (
    <>
      {Object.keys(favourites).length > 0 ? (
        <ListImage
          images={Object.values(favourites)}
          isLoading={false}
          loadFunc={() => {}}
          onSelect={handleSelect}
        />
      ) : (
        'No data'
      )}
    </>
  );
};
