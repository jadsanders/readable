import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import PostDetailScreen from './PostDetailScreen';
import { Route } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import { fetchCategories } from '../actions/categories';

import { connect } from 'react-redux';

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts()
    //this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/:category" component={HomeScreen} />
        <Route exact path="/:category/:id" component={PostDetailScreen} />
      </div>
    );
  }
}



function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(null, mapDispatchToProps)(App)
