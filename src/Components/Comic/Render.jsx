import { Result, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import NaviBar from './NaviBar';

const Render = (props) => {
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
  } = props;

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

  return (
    <React.Fragment>
      <h1>XKCD Comic</h1>
      <h2>{title}</h2>
      <div className="comic-container">
        <div>{date}</div>
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
  alt: PropTypes.string,
  comicId: PropTypes.number,
  date: PropTypes.string,
  error: PropTypes.string,
  getComic: PropTypes.func.isRequired,
  img: PropTypes.string,
  latestComic: PropTypes.number,
  loading: PropTypes.bool,
  title: PropTypes.string,
  transcript: PropTypes.string,
};

Render.defaultProps = {
  alt: '',
  comicId: 0,
  date: '',
  error: '',
  img: '',
  latestComic: 0,
  loading: false,
  title: '',
  transcript: '',
};

export default Render;
