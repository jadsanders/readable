import React, { Component } from 'react';
import '../stylesheets/HomeScreen.css';
import PostList from './PostList';
import CategorySelect from './CategorySelect';

class HomeScreen2 extends Component {
  render() {
    return (
      <div>


        <h1>IT GOT ROUTES!</h1>

        <div className="categorySelect">
          <CategorySelect />
        </div>

        <div className="postListContainer">
          <PostList />
        </div>

      </div>
    )
  }
}

export default HomeScreen2
