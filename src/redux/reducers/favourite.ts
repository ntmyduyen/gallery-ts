import {
  FavouriteAction,
  FAVOURITE_REQUEST,
  FAVOURITE_SUCCESS,
} from '../actionTypes/favourite';

export interface FavouriteState {
  favourite: object;
}

export default function favouriteReducer(
  state: FavouriteState = {
    favourite: {}
  },
  action: FavouriteAction,
): FavouriteState {
  switch (action.type) {
    case FAVOURITE_REQUEST:
      return {
        ...state
      };
    case FAVOURITE_SUCCESS:
      return {
        ...state,
        favourite: action.data
      }
    default:
      return state;
  }
}
