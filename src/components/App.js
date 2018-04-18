import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import PostDetailScreen from './PostDetailScreen';
import { Route } from 'react-router-dom';

import * as Actions from '../actions/HomeScreen';


class App extends Component {

  componentWillMount() {
    Actions.fetchPosts();
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



export default App;
