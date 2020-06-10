import {
  FavouriteRequestAction,
  FavouriteSuccessAction,
  FAVOURITE_REQUEST,
  FAVOURITE_SUCCESS,
  FAVOURITE_TYPE,
} from '../actionTypes/favourite';

export function favouriteRequest(data: FAVOURITE_TYPE): FavouriteRequestAction {
  return {
    type: FAVOURITE_REQUEST,
    data,
  };
}

export function favouriteSuccess(data: object): FavouriteSuccessAction {
  return {
    type: FAVOURITE_SUCCESS,
    data,
  };
}
