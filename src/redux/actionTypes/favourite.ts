export const FAVOURITE_REQUEST = 'favourite/FAVOURITE_REQUEST';
export const FAVOURITE_SUCCESS = 'favourite/FAVOURITE_SUCCESS';
export const FAVOURITE_ERROR = 'favourite/FAVOURITE_ERROR';

export interface FAVOURITE_TYPE {
  id: string;
  url: string;
  slug: string;
}

export interface FavouriteRequestAction {
  type: typeof FAVOURITE_REQUEST;
  data: FAVOURITE_TYPE;
}

export interface FavouriteSuccessAction {
  type: typeof FAVOURITE_SUCCESS;
  data: object;
}

export interface FavouriteErrorAction {
  type: typeof FAVOURITE_ERROR;
  data: string;
}

export type FavouriteAction =
  | FavouriteRequestAction
  | FavouriteSuccessAction
  | FavouriteErrorAction;
