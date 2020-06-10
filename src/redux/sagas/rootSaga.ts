import { all } from "redux-saga/effects";
import searchSaga from "./search";
import favouriteSaga from "./favourite";

export default function* rootSaga() {
  yield all([searchSaga(), favouriteSaga()]);
}
