import {put, call, takeEvery, all} from 'redux-saga/effects';
import {SearchRequestAction, SEARCH_REQUEST} from '../actionTypes/search';
import {getImage} from '../../utils/api';
import {searchSuccess, searchError} from '../actions/search';

function* getImages({keyWord, page}: SearchRequestAction) {
  try {
    const res = yield call(getImage, {
      name: keyWord,
      limit: (page + 1) * 10,
      offset: 0,
    });
    yield put(searchSuccess(res));
  } catch (error) {
    yield put(searchError(error));
  }
}

function* watchSearch() {
  yield takeEvery(SEARCH_REQUEST, getImages);
}

export default function* searchSaga() {
  yield all([watchSearch()]);
}
