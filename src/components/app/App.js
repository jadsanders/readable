import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import HomeScreen from '../../screens/home_screen/HomeScreen';
import PostDetailScreen from '../../screens/post_detail_screen/PostDetailScreen';
import CreatePostScreen from '../../screens/create_post_screen/CreatePostScreen';
import EditPostScreen from '../../screens/edit_post_screen/EditPostScreen';

import { fetchPosts } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories';

import './App.css';
import '../../shared.css';


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
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/posts/new" component={CreatePostScreen} />
            <Route exact path="/posts/:id/edit" component={EditPostScreen} />
            <Route exact path="/:category" component={HomeScreen} />
            <Route exact path="/:category/:id" component={PostDetailScreen} />
          </Switch>
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
