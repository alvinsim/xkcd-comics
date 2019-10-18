import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const NaviBar = (props) => {
  const isDisableFirstButton = () => {
    const { first, current } = props;

    return first === current;
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
  latest: 0,
};

export default NaviBar;
