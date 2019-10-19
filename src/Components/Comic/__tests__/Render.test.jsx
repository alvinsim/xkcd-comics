import Render from '@Components/Comic/Render';
import React from 'react';
import renderer from 'react-test-renderer';

test('Renders a latest comic', () => {
  const component = renderer.create(
    <Render
      alt="Well, there's one right here at the bottom, where it says '53.'"
      comicId={2217}
      date="18 October, 2019"
      error=""
      getComic={jest.fn()}
      img="https://imgs.xkcd.com/comics/53_cards.png"
      latestComic={2217}
      loading={false}
      title="53 Cards"
      transcript=""
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders a not latest comic', () => {
  const component = renderer.create(
    <Render
      alt="Our retina display features hundreds of pixels per inch in the central fovea region"
      comicId={2000}
      date="30 May, 2018"
      error=""
      getComic={jest.fn()}
      img="https://imgs.xkcd.com/comics/xkcd_phone_2000.png"
      latestComic={2217}
      loading={false}
      title="xkcd Phone 2000"
      transcript=""
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders the first comic', () => {
  const component = renderer.create(
    <Render
      alt="Don't we all."
      comicId={1}
      date="1 January, 2006"
      error=""
      getComic={jest.fn()}
      img="https://imgs.xkcd.com/comics/barrel_cropped_(1).png"
      latestComic={2217}
      loading={false}
      title="Barrel - Part 1"
      transcript=""
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders an error', () => {
  const component = renderer.create(
    <Render
      alt=""
      comicId={0}
      date=""
      error="Some error"
      getComic={jest.fn()}
      img=""
      latestComic={0}
      loading={false}
      title=""
      transcript=""
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
