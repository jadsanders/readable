import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import HomeScreen from '../../screens/home_screen/HomeScreen';
import PostDetailScreen from '../../screens/post_detail_screen/PostDetailScreen';
import CreatePostScreen from '../../screens/create_post_screen/CreatePostScreen';
import EditPostScreen from '../../screens/edit_post_screen/EditPostScreen';

import './App.css';
import '../../shared.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <div className="navbar">
            <Link to="/">
              <div className="brand" />
            </Link>
          </div>

          <div className="content-container">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/posts/new" component={CreatePostScreen} />
              <Route exact path="/posts/:id/edit" component={EditPostScreen} />
              <Route exact path="/:category" component={HomeScreen} />
              <Route exact path="/:category/:id" component={PostDetailScreen} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App
