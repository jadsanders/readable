import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import PostDetailScreen from './PostDetailScreen';

import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import { fetchCategories } from '../actions/categories';

import '../stylesheets/App.css';
import '../stylesheets/Headlines.css';
import '../stylesheets/HomeScreen.css';
import '../stylesheets/PostDetailScreen.css';
import '../stylesheets/Modal.css';

import { connect } from 'react-redux';

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts()
    this.props.fetchCategories()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="navbar"></div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/:category" component={HomeScreen} />
          <Route exact path="/:category/:id" component={PostDetailScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(null,mapDispatchToProps)(App)
