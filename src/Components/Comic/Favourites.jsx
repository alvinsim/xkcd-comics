import { Button, Card, Empty, Icon, List } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeFavouriteTrigger } from './actions';
import { getFavouriteComics } from './selectors';

const Favourites = (props) => {
  const { favourites } = props;

  const renderedComic = (comic) => {
    const onClickDelete = () => {
      const { removeFavourite } = props;
      removeFavourite(comic.comicId);
    };

    const buttonDelete = (
      <Button onClick={onClickDelete}>
        <Icon type="delete" />
      </Button>
    );


    return (
      <List.Item>
        <Card
          extra={buttonDelete}
          title={`${comic.title} - ${comic.date}`}
        >
          <div className="comic">
            <img alt={comic.alt} src={comic.img} title={comic.alt} />
          </div>
          <div className="transcript">{comic.transcript}</div>
        </Card>
      </List.Item>
    )
  };

  const gridProps = {
    gutter: 16,
    column: 1,
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 2,
    xxl: 2,
  };

  const comicsList = (
    <List
      className="favourites"
      dataSource={favourites}
      grid={gridProps}
      renderItem={renderedComic}
    />
  );
  const emptyList = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

  const renderedList = favourites.length > 0 ? comicsList : emptyList;

  return (
    <React.Fragment>
      <h2>Favourites</h2>
      {renderedList}
    </React.Fragment>
  );
};

Favourites.propTypes = {
  favourites: PropTypes.instanceOf(Array),
  removeFavourite: PropTypes.func.isRequired,
};

Favourites.defaultProps = {
  favourites: [],
};

const mapStateToProps = state => ({
  favourites: getFavouriteComics(state),
});

const mapDispatchToProps = dispatch => ({
  removeFavourite: comicId => dispatch(removeFavouriteTrigger(comicId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
