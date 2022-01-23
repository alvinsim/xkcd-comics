import { Button, Result, Spin } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addFavouriteTrigger, removeFavouriteTrigger } from './actions';
import NaviBar from './NaviBar';
import { getFavouriteComicIds } from './selectors';

export const Render = (props) => {
  const {
    favouriteComics,
    metadata,
  } = props;

  const {
    alt,
    comicId,
    date,
    error,
    img,
    latestComic,
    loading,
    title,
    transcript,
  } = metadata;

  let comicImage;

  if (loading) {
    comicImage = <Spin />
  } else if (error) {
    comicImage = <Result status="warning" title="Oops. Comic lost in transit!" />
  } else {
    comicImage = <img alt={alt} src={img} title={alt} />
  }

  const getFirstComic = () => {
    const { getComic } = props;
    getComic(1);
  };

  const getLatestComic = () => {
    const { getComic } = props;
    getComic();
  }

  const getNextComic = () => {
    const { getComic } = props;
    getComic(comicId + 1);
  }

  const getPreviousComic = () => {
    const { getComic } = props;
    getComic(comicId - 1);
  };

  const getRandomComic = () => {
    const { getComic } = props;
    const max = latestComic;
    const min = 1;
    const randomComic = Math.floor(Math.random() * (max - min + 1)) + min;
    getComic(randomComic);
  };

  const isFavourite = favouriteComics.find(id => id === comicId);

  const onClickFavourite = () => {
    const { addFavourite, removeFavourite } = props;

    if (isFavourite) {
      removeFavourite(comicId);
    } else {
      addFavourite(comicId, date, img, title, transcript);
    }
  };

  const naviBar = (
    <NaviBar
      current={comicId}
      latest={latestComic}
      onClickFirst={getFirstComic}
      onClickLatest={getLatestComic}
      onClickNext={getNextComic}
      onClickPrevious={getPreviousComic}
      onClickRandom={getRandomComic}
    />
  );

  const iconIsNotFavourite = <HeartOutlined />;
  const iconIsFavourite = <HeartTwoTone twoToneColor="#eb2f96" />;
  let iconFavourite;

  if (isFavourite) {
    iconFavourite = iconIsFavourite;
  } else {
    iconFavourite = iconIsNotFavourite;
  }

  return (
    <React.Fragment>
      <div className="title">
        <h2>{title}</h2>
        <Button onClick={onClickFavourite}>
          {iconFavourite}
        </Button>
      </div>
      <div className="comic-container">
        <div className="date">{date}</div>
        {naviBar}
        <div className="comic">
          {comicImage}
        </div>
        {naviBar}
        <div className="transcript">{transcript}</div>
      </div>
    </React.Fragment>
  );
};

Render.propTypes = {
  addFavourite: PropTypes.func.isRequired,
  favouriteComics: PropTypes.instanceOf(Array),
  getComic: PropTypes.func.isRequired,
  metadata: PropTypes.shape({
    alt: PropTypes.string,
    comicId: PropTypes.number,
    date: PropTypes.string,
    error: PropTypes.string,
    img: PropTypes.string,
    latestComic: PropTypes.number,
    loading: PropTypes.bool,
    title: PropTypes.string,
    transcript: PropTypes.string,
  }),
  removeFavourite: PropTypes.func.isRequired,
};

Render.defaultProps = {
  favouriteComics: [],
  metadata: {
    alt: '',
    comicId: 0,
    date: '',
    error: '',
    img: '',
    latestComic: 0,
    loading: false,
    title: '',
    transcript: '',
  },
};

const mapStateToProps = state => ({
  favouriteComics: getFavouriteComicIds(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: (comicId, date, img, title, transcript) =>
    dispatch(addFavouriteTrigger(comicId, date, img, title, transcript)),
  removeFavourite: comicId => dispatch(removeFavouriteTrigger(comicId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Render);
