import { getMonthName, getWeekdayName } from '@Utilities/dateUtils';
import 'antd/dist/antd.less';
import PropTypes from 'prop-types';
import React from 'react';
import NaviBar from './NaviBar';

class Comic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: '',
      comicId: 0,
      date: '',
      img: '',
      latestComic: 0,
      title: '',
      transcript: '',
    };

    this.getComic = this.getComic.bind(this);
    this.getFirstComic = this.getFirstComic.bind(this);
    this.getLatestComic = this.getLatestComic.bind(this);
    this.getNextComic = this.getNextComic.bind(this);
    this.getPreviousComic = this.getPreviousComic.bind(this);
    this.getRandomComic = this.getRandomComic.bind(this);
  }

  componentDidMount() {
    this.getComic();
  }

  getComic = async (comicId) => {
    const baseUrl = 'https://xkcd.com/';
    const postfixUrl = '/info.0.json';
    const comic = comicId ? comicId : '';
    const apiUrl = `${baseUrl}${comic}${postfixUrl}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET'
      });

      if (response.ok) {
        const data = await response.json();
        const {
          alt, day, img, month, num, title, transcript, year
        } = data;

        const parsedDate = new Date(`${month}/${day}/${year}`);
        const weekdayName = getWeekdayName(parsedDate.getDay());
        const monthName = getMonthName(month - 1);
        const formattedDate = `${weekdayName} ${monthName} ${day}, ${year}`;

        let { latestComic } = this.state;

        if (latestComic === 0) {
          latestComic = num;
        }

        this.setState({
          alt,
          comicId: num,
          date: formattedDate,
          img,
          latestComic,
          title,
          transcript,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  getFirstComic() {
    this.getComic(1);
  }

  getPreviousComic() {
    const { comicId } = this.state;

    this.getComic(comicId - 1);
  }

  getRandomComic() {
    const { latestComic: max } = this.state;
    const min = 1;
    const randomComic = Math.floor(Math.random() * (max - min + 1)) + min;

    this.getComic(randomComic);
  }

  getNextComic() {
    const { comicId } = this.state;

    this.getComic(comicId + 1);
  }

  getLatestComic() {
    this.getComic();
  }

  render() {
    const { alt, comicId, date, img, latestComic, title, transcript } = this.state;

    return (
      <React.Fragment>
        <h1>XKCD Comic</h1>
        <h2>{title}</h2>
        <div className="comic-container">
          <div>{date}</div>
          <NaviBar
            current={comicId}
            latest={latestComic}
            onClickFirst={this.getFirstComic}
            onClickLatest={this.getLatestComic}
            onClickNext={this.getNextComic}
            onClickPrevious={this.getPreviousComic}
            onClickRandom={this.getRandomComic}
          />
          <div className="comic">
            <img alt={alt} src={img} title={alt} />
          </div>
          <NaviBar
            current={comicId}
            latest={latestComic}
            onClickFirst={this.getFirstComic}
            onClickLatest={this.getLatestComic}
            onClickNext={this.getNextComic}
            onClickPrevious={this.getPreviousComic}
            onClickRandom={this.getRandomComic}
          />
          <div className="transcript">{transcript}</div>
        </div>
      </React.Fragment>
    );
  }
}

Comic.propTypes = {
  id: PropTypes.number,
};

Comic.defaultProps = {
  id: 0,
};

export default Comic;
