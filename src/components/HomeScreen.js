import React, { Component } from 'react';
import PostList from './PostList';
import LargeButton from './LargeButton';
import CategorySelect from './CategorySelect';

class HomeScreen extends Component {


  render() {
    return (
      <div>
        <div className="categoryselect-container">
          <CategorySelect path={this.props.match.params.category} />
          <div className="button-container">
            <LargeButton />
          </div>
        </div>
        <div className="postlist-container">
          <PostList path={this.props.match.params.category}/>
        </div>

      </div>
    )
  }
}

export default HomeScreen
