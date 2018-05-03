import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostsList from '../../components/posts_list/PostsList';
import LargeButton from '../../components/buttons/large_button/LargeButton';
import PostsCategoryFilter from '../../components/posts_category_filter/PostsCategoryFilter';

import './HomeScreen.css';

import { fetchPosts } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchCategories()
  }

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

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(null,mapDispatchToProps)(HomeScreen)
