import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NaviBar from '../NaviBar';

const ReactTestRenderer = require('react-test-renderer');

test('Next and Latest buttons are disabled when current comic is the latest', () => {
  const component = ReactTestRenderer.create(
    <BrowserRouter>
      <NaviBar
        current={5}
        latest={5}
        onClickFirst={jest.fn()}
        onClickPrevious={jest.fn()}
        onClickNext={jest.fn()}
        onClickLatest={jest.fn()}
        onClickRandom={jest.fn()}
      />
    </BrowserRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Last and Previous buttons are disabled when current is the first comic', () => {
  const component = ReactTestRenderer.create(
    <BrowserRouter>
      <NaviBar
        current={1}
        latest={5}
        onClickFirst={jest.fn()}
        onClickPrevious={jest.fn()}
        onClickNext={jest.fn()}
        onClickLatest={jest.fn()}
        onClickRandom={jest.fn()}
      />
    </BrowserRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
