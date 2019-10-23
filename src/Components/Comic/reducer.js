import { ADD_FAVOURITE, GET_FAVOURITES, REMOVE_FAVOURITE } from './actions';

const initialState = {
  favourites: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return Object.assign({}, state, {
        favourites: [
          ...state.favourites,
          {
            comicId: action.comicId,
            date: action.date,
            img: action.img,
            title: action.title,
            transcript: action.transcript,
          }
        ]
      });
    case GET_FAVOURITES:
      return state.favourites;
    case REMOVE_FAVOURITE:
      return Object.assign({}, state, {
        favourites: [
          ...state.favourites.filter(comic => comic.comicId !== action.comicId)
        ]
      });
    default:
      return state;
  }
};

export default reducer;
