import { getMonthName, getWeekdayName } from '@Utilities/dateUtils';
import PropTypes from 'prop-types';
import React from 'react';

class Comic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: '',
      comicId: 0,
      date: '',
      img: '',
      title: '',
      transcript: '',
    };

    this.getComic = this.getComic.bind(this);
  }

  componentDidMount() {
    this.getComic();
  }

  getComic = async () => {
    try {
      const response = await fetch('https://xkcd.com/info.0.json', {
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

        this.setState({
          alt,
          comicId: num,
          date: formattedDate,
          img,
          title,
          transcript,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { alt, comicId, date, img, title, transcript } = this.state;

    return (
      <React.Fragment>
        <h1>XKCD Comic</h1>
        <h2>{title}</h2>
        <div className="comic-container">
          <div>{date}</div>
          <div className="comic">
            <img alt={alt} src={img} />
          </div>
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
