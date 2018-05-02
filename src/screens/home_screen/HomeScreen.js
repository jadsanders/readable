import React, { Component } from 'react';
import PostsList from '../../components/posts_list/PostsList';
import LargeButton from '../../components/buttons/large_button/LargeButton';
import PostsCategoryFilter from '../../components/posts_category_filter/PostsCategoryFilter';
import { Link } from 'react-router-dom';

import './HomeScreen.css';

class HomeScreen extends Component {
  render() {
    return (
      <div>

        <div className="sidebar-right">
          <div className="category-filter-container">
            <PostsCategoryFilter path={this.props.match.params.category} />
          </div>

          <div className="new-post-button-container">
            <Link to="/posts/new">
              <LargeButton
                buttonText="New Post"
                color="green"
              />
            </Link>
          </div>
        </div>

        <div className="main-screen">
          <PostsList path={this.props.match.params.category}/>
        </div>

      </div>
    )
  }
}

export default HomeScreen
