import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NaviBar from '../NaviBar';

test('Next and Latest buttons are disabled when current comic is the latest', () => {
  const component = renderer.create(
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
  const component = renderer.create(
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
