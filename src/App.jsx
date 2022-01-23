import Comic from '@Components/Comic';
import Favourites from '@Components/Comic/Favourites';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.less';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <h1>
          <Link to="/">XKCD Comic</Link>
        </h1>
      </div>
      <Routes>
        <Route exact path="/" component={Comic} />
        <Route path="/favourites" component={Favourites} />
      </Routes>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default App;
