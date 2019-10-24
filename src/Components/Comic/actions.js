export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const ADD_FAVOURITE_TRIGGER = 'ADD_FAVOURITE_TRIGGER';
export const GET_FAVOURITES = 'GET_FAVOURITES';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const REMOVE_FAVOURITE_TRIGGER = 'REMOVE_FAVOURITE_TRIGGER';

export function addFavourite(comicId, date, img, title, transcript) {
  return {
    comicId,
    date,
    img,
    title,
    transcript,
    type: ADD_FAVOURITE,
  };
}

export function addFavouriteTrigger(comicId, date, img, title, transcript) {
  return {
    comicId,
    date,
    img,
    title,
    transcript,
    type: ADD_FAVOURITE_TRIGGER,
  };
}

export function getFavourites() {
  return {
    type: GET_FAVOURITES,
  }
}

export function removeFavourite(comicId) {
  return {
    comicId,
    type: REMOVE_FAVOURITE,
  }
}

export function removeFavouriteTrigger(comicId) {
  return {
    comicId,
    type: REMOVE_FAVOURITE_TRIGGER,
  };
}
