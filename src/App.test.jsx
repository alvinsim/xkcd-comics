import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockStore = configureMockStore();
  const store = mockStore({});
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
