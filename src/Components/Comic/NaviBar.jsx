import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

const NaviBar = (props) => {
  const isDisableFirstButton = () => {
    const { first, current } = props;

    return first >= current;
  };

  const isDisablePreviousButton = () => {
    return isDisableFirstButton();
  }

  const isDisableNextButton = () => {
    const { current, latest } = props;

    return current === latest;
  }

  const isDisableLatestButton = () => {
    return isDisableNextButton();
  }

  const onClickFavourites = () => {
    const { history } = props;
    history.push('/favourites');
  }

  const {
    onClickFirst,
    onClickLatest,
    onClickNext,
    onClickPrevious,
    onClickRandom
  } = props;

  return (
    <div className="navi-bar">
      <Button.Group>
        <Button
          disabled={isDisableFirstButton()}
          onClick={onClickFirst}
          title="first"
        >
          <Icon type="double-left" />
        </Button>
        <Button
          disabled={isDisablePreviousButton()}
          onClick={onClickPrevious}
          title="previous"
        >
          <Icon type="left" />
        </Button>
        <Button title="random" onClick={onClickRandom}>
          <Icon type="question" />
        </Button>
        <Button onClick={onClickFavourites} title="favourites">
          <Icon theme="twoTone" type="heart" />
        </Button>
        <Button
          disabled={isDisableNextButton()}
          onClick={onClickNext}
          title="next"
        >
          <Icon type="right" />
        </Button>
        <Button
          disabled={isDisableLatestButton()}
          onClick={onClickLatest}
          title="latest"
        >
          <Icon type="double-right" />
        </Button>
      </Button.Group>
    </div>
  );
};

NaviBar.propTypes = {
  current: PropTypes.number,
  first: PropTypes.number,
  history: PropTypes.instanceOf(Object),
  latest: PropTypes.number,
  onClickFirst: PropTypes.func.isRequired,
  onClickPrevious: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickLatest: PropTypes.func.isRequired,
  onClickRandom: PropTypes.func.isRequired,
};

NaviBar.defaultProps = {
  current: 0,
  first: 1,
  history: {},
  latest: 0,
};

export default withRouter(NaviBar);
