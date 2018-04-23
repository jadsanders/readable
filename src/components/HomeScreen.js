import React, { Component } from 'react';
import '../stylesheets/HomeScreen.css';
import PostList from './PostList';
import CategorySelect from './CategorySelect';

class HomeScreen extends Component {
  render() {

    return (
      <div>
        <div className="categorySelect">
          <CategorySelect />
        </div>
        <div className="postListContainer">
          <PostList path={this.props.match.params.category}/>
        </div>
      </div>
    )
  }
}

export default HomeScreen
