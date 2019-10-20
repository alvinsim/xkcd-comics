import { getMonthName, getWeekdayName } from '@Utilities/dateUtils';
import 'antd/dist/antd.less';
import PropTypes from 'prop-types';
import React from 'react';
import Render from './Render';
import { fetchComic } from './services';

class Comic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.getComic = this.getComic.bind(this);
  }

  componentDidMount() {
    this.getComic();
  }

  getComic = async (id) => {
    this.setState({ loading: true });

    const data = await fetchComic(id);

    const { alt, day, error, img, month, num, title, transcript, year } = data;

    let formattedDate = '';
    if (day && month && year) {
      const parsedDate = new Date(`${month}/${day}/${year}`);
      const weekdayName = getWeekdayName(parsedDate.getDay());
      const monthName = getMonthName(month - 1);
      formattedDate = `${weekdayName} ${monthName} ${day}, ${year}`;
    }

    let { latestComic } = this.state;

    if (latestComic === 0) {
      latestComic = num;
    }

    this.setState({
      alt,
      comicId: num,
      date: formattedDate,
      error,
      img,
      latestComic,
      loading: false,
      title,
      transcript,
    });
  }

  render() {
    const {
      alt,
      comicId,
      date,
      error,
      img,
      latestComic,
      loading,
      title,
      transcript
    } = this.state;

    return (
      <Render
        alt={alt}
        comicId={comicId}
        date={date}
        error={error}
        getComic={this.getComic}
        img={img}
        latestComic={latestComic}
        loading={loading}
        title={title}
        transcript={transcript}
      />
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
