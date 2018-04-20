import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import PostDetailScreen from './PostDetailScreen';
import { Route } from 'react-router-dom';

import * as Actions from '../actions/posts';
import { connect } from 'react-redux';

class App extends Component {

componentWillMount() {
  
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
    fetch: () => dispatch(Actions.fetchPosts())
  }
}

export default connect(mapDispatchToProps)(App)
