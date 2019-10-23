import { ADD_FAVOURITE, GET_FAVOURITES, REMOVE_FAVOURITE } from '@Components/Comic/actions';
import reducer from '@Components/Comic/reducer';

describe('reducer', () => {
  const initialState = {
    favourites: []
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FAVOURITE', () => {
    expect(
      reducer(initialState, {
        comicId: 2,
        date: '10 October, 2012',
        img: 'https://xkcd.com/image.png',
        title: 'Some Title',
        transcript: 'Some Transcript',
        type: ADD_FAVOURITE
      })
    ).toEqual({
      favourites: [
        {
          comicId: 2,
          date: '10 October, 2012',
          img: 'https://xkcd.com/image.png',
          title: 'Some Title',
          transcript: 'Some Transcript'
        }
      ]
    });

    expect(
      reducer({
        favourites: [
          {
            comicId: 2,
            date: '10 October, 2012',
            img: 'https://xkcd.com/image.png',
            title: 'Some Title',
            transcript: 'Some Transcript'
          }
        ]
      }, {
        comicId: 10,
        date: '10 December, 2013',
        img: 'https://xkcd.com/image-2.png',
        title: 'Some Title 2',
        transcript: 'Some Transcript 2',
        type: ADD_FAVOURITE
      })
    ).toEqual({
      favourites: [
        {
          comicId: 2,
          date: '10 October, 2012',
          img: 'https://xkcd.com/image.png',
          title: 'Some Title',
          transcript: 'Some Transcript'
        },
        {
          comicId: 10,
          date: '10 December, 2013',
          img: 'https://xkcd.com/image-2.png',
          title: 'Some Title 2',
          transcript: 'Some Transcript 2'
        }
      ]
    });
  });

  it('should handle GET_FAVOURITES', () => {
    expect(reducer(initialState, { type: GET_FAVOURITES })).toEqual([]);
  });

  it('should handle REMOVE_FAVOURITE', () => {
    expect(
      reducer({
        favourites: [
          {
            comicId: 2,
            date: '10 October, 2012',
            img: 'https://xkcd.com/image.png',
            title: 'Some Title',
            transcript: 'Some Transcript'
          }
        ]
      }, {
        comicId: 2,
        type: REMOVE_FAVOURITE
      })
    ).toEqual({ favourites: [] });

    expect(
      reducer({
        favourites: [
          {
            comicId: 2,
            date: '10 October, 2012',
            img: 'https://xkcd.com/image.png',
            title: 'Some Title',
            transcript: 'Some Transcript'
          },
          {
            comicId: 10,
            date: '10 December, 2013',
            img: 'https://xkcd.com/image-2.png',
            title: 'Some Title 2',
            transcript: 'Some Transcript 2'
          }
        ]
      }, {
        comicId: 2,
        type: REMOVE_FAVOURITE
      })
    ).toEqual({
      favourites: [
        {
          comicId: 10,
          date: '10 December, 2013',
          img: 'https://xkcd.com/image-2.png',
          title: 'Some Title 2',
          transcript: 'Some Transcript 2'
        }
      ]
    });
  })
});
