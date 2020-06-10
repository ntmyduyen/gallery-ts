import {put, takeEvery, all, select} from 'redux-saga/effects';
import {
  FAVOURITE_REQUEST,
  FavouriteRequestAction,
} from '../actionTypes/favourite';
import {favouriteSuccess} from '../actions/favourtite';
import omit from 'lodash/omit';
import {addNotification} from '../actions/notification';

function* favouriteImage({data}: FavouriteRequestAction) {
  const favourite = yield select((state) => state.favourite.favourite);
  if (favourite[data.id]) {
    yield put(favouriteSuccess(omit(favourite, data.id)));
    yield put(addNotification({type: 'success', text: 'Remove successful'}));
  } else {
    yield put(favouriteSuccess({...favourite, [data.id]: data}));
    yield put(addNotification({type: 'success', text: 'Add successful'}));
  }
}

function* watchFavourite() {
  yield takeEvery(FAVOURITE_REQUEST, favouriteImage);
}

export default function* favouriteSaga() {
  yield all([watchFavourite()]);
}
