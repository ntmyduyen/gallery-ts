import {
  SearchAction,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  RESET_PAGE,
  FETCH_MORE,
} from '../actionTypes/search';

export interface SearchState {
  keyWord: string | string[];
  images: object[];
  isLoading: boolean;
  isError: boolean;
  page: number;
}

export default function searchReducer(
  state: SearchState = {
    keyWord: '',
    images: [],
    isLoading: false,
    isError: false,
    page: 0
  },
  action: SearchAction,
): SearchState {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        keyWord: action.keyWord,
        isLoading: true,
        page: action.page
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.data,
      };
    case RESET_PAGE:
      return {
        ...state,
        page: 0,
        images: []
      }
    case FETCH_MORE:
      return {
        ...state,
        page: action.data
      }
    default:
      return state;
  }
}
