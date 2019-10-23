export function getFavouriteComicIds(state) {
  const { favourites = [] } = state;
  const favouriteComicIds = favourites
    .map(comic => comic.comicId);

  return favouriteComicIds;
}

export function getFavouriteComics(state) {
  const { favourites } = state;
  console.log('[selectors] state: ', state);
  return favourites;
}
