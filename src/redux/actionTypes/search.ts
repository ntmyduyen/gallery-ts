export const SEARCH_REQUEST = "search/SEARCH_REQUEST";
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS";
export const SEARCH_ERROR = "search/SEARCH_ERROR";

export const RESET_PAGE = "search/RESET_PAGE";

export const FETCH_MORE = "search/FETCH_MORE";


export interface SearchRequestAction {
  type: typeof SEARCH_REQUEST;
  keyWord: string | string[];
  page: number
}

export interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS;
  data: object[];
}

export interface SearchErrorAction {
  type: typeof SEARCH_ERROR;
  data: string;
}

export interface ResetPageAction {
  type: typeof RESET_PAGE
}

export interface FetchMoreAction {
  type: typeof FETCH_MORE,
  data: number
}

export type SearchAction =
  | SearchRequestAction
  | SearchSuccessAction
  | SearchErrorAction
  | ResetPageAction
  | FetchMoreAction;
