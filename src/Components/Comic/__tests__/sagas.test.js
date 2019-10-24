import { addFavourite, removeFavourite } from '@Components/Comic/actions';
import { addFavouriteTrigger, removeFavouriteTrigger } from '@Components/Comic/sagas';
import { expectSaga } from 'redux-saga-test-plan';

const action = {
  comicId: 2,
  date: '18 October, 2019',
  img: 'https://xkcd.com/some-image.png',
  title: 'Some Title',
  transcript: 'Some Transcript',
};

it('addFavouriteTrigger', () => {
  return expectSaga(addFavouriteTrigger, action)
    .put(addFavourite(action.comicId, action.date, action.img, action.title, action.transcript))
    .run();
});

it('removeFavouriteTrigger', () => {
  return expectSaga(removeFavouriteTrigger, action)
    .put(removeFavourite(action.comicId, action.date, action.img,
      action.title, action.transcript))
    .run();
});
