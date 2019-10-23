import { all, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_FAVOURITE_TRIGGER,
  REMOVE_FAVOURITE_TRIGGER,
  addFavourite,
  removeFavourite,
} from './actions';

export function* addFavouriteTrigger(action) {
  const { comicId, date, img, title, transcript } = action;
  yield put(addFavourite(comicId, date, img, title, transcript));
}

export function* removeFavouriteTrigger(action) {
  const { comicId } = action;
  yield put(removeFavourite(comicId));
}

export function* main() {
  yield all([
    takeEvery(ADD_FAVOURITE_TRIGGER, addFavouriteTrigger),
    takeEvery(REMOVE_FAVOURITE_TRIGGER, removeFavouriteTrigger)
  ]);
}
