import React, {useEffect, useCallback} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import queryString from 'query-string';
import {DebounceInput} from 'react-debounce-input';
import SearchIcon from '@material-ui/icons/Search';
import {searchRequest, resetPage, fetchMore} from '../../redux/actions/search';
import ListImage from '../../components/ListImage';
import usePrevious from '../../hooks/usePrevious';
import {FAVOURITE_TYPE} from '../../redux/actionTypes/favourite';
import {favouriteRequest} from '../../redux/actions/favourtite';

interface RootState {
  search: {
    images: object[];
    keyWord: string | string[];
    isLoading: boolean;
    isError: boolean;
    page: number;
  };
  favourite: {
    favourite: object;
    isAdding: boolean;
  };
}

export const Search: React.SFC<{}> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [prevKeyWord, setPrevKeyWord] = usePrevious();
  const [prevPage, setPrevPage] = usePrevious();

  const {q: word, page: offset} = queryString.parse(location.search);

  const images = useSelector((state: RootState) => {
    return state.search.images;
  });

  const isLoading = useSelector((state: RootState) => {
    return state.search.isLoading;
  });

  const page = useSelector((state: RootState) => {
    return state.search.page;
  });

  const keyWord = useSelector((state: RootState) => {
    return state.search.keyWord;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    history.push(`?q=${e.target.value}`);
    dispatch(resetPage());
  };

  const handleLoadMore = useCallback(() => {
    history.push(`?q=${keyWord}&page=${page + 1}`);
    dispatch(fetchMore(page + 1));
  }, [keyWord, page]);

  const handleSelect = useCallback((item: FAVOURITE_TYPE) => {
    dispatch(favouriteRequest(item));
  }, []);

  useEffect(() => {
    if (!word) return;

    if (word === prevKeyWord && offset === prevPage) {
      return;
    }

    setPrevPage(offset);
    setPrevKeyWord(word);
    console.log('offset', typeof offset)
    if (['string', 'undefined', 'null'].includes(typeof offset)) {
      dispatch(searchRequest(word, offset ? +offset : 0));
    }
  }, [word, offset, dispatch]);

  return (
    <>
      <div className="search">
        <SearchIcon
          className="search__icon"
          htmlColor="#51B1C2"
          fontSize="large"
        />
        <DebounceInput
          debounceTimeout={1000}
          onChange={handleChange}
          type="search"
          placeholder="Start searching for images!"
          className="search__input"
        />
      </div>
      <div className="main">
        {images.length > 0 ? (
          <ListImage
            images={images}
            isLoading={isLoading}
            loadFunc={handleLoadMore}
            onSelect={handleSelect}
          />
        ) : (
          'No data'
        )}
      </div>
    </>
  );
};
