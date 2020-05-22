import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SearchRequestAction,
  SearchSuccessAction,
  SearchErrorAction,
  ResetPageAction,
  RESET_PAGE,
  FetchMoreAction,
  FETCH_MORE,
} from "../actionTypes/search";


export function searchRequest(keyWord: string | string[], page: number): SearchRequestAction {
  return {
    type: SEARCH_REQUEST,
    keyWord,
    page
  };
}

export function searchSuccess(data: object[]): SearchSuccessAction {
  return {
    type: SEARCH_SUCCESS,
    data
  };
}

export function searchError(data: string): SearchErrorAction {
  return {
    type: SEARCH_ERROR,
    data
  };
}

export function resetPage(): ResetPageAction {
  return {
    type: RESET_PAGE
  };
}

export function fetchMore(data: number): FetchMoreAction {
  return {
    type: FETCH_MORE,
    data
  };
}
