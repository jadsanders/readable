import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostsList from '../../components/posts_list/PostsList';
import LargeButton from '../../components/buttons/large_button/LargeButton';
import PostsCategoryFilter from '../../components/posts_category_filter/PostsCategoryFilter';

import './HomeScreen.css';

import { fetchPosts, clearPostDetails } from '../../actions/posts';
import { clearComments } from '../../actions/comments';
import { fetchCategories } from '../../actions/categories';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
    this.props.clearPostDetails();
    this.props.clearComments();
  }



  render() {
    return (
      <div>



        <div className="sidebar-right not-selectable">
          <div className="category-filter-container">
            <PostsCategoryFilter path={this.props.match.params.category} />
          </div>

          <div className="new-post-button-container not-selectable">
            <Link to="/posts/new">
              <LargeButton
                buttonText="New Post"
                color="green"
              />
            </Link>
          </div>
        </div>

        <div className="main-screen not-selectable">
          <PostsList path={this.props.match.params.category}/>
        </div>

      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchCategories: () => dispatch(fetchCategories()),
    clearPostDetails: () => dispatch(clearPostDetails()),
    clearComments: () => dispatch(clearComments())
  }
}

export default connect(null,mapDispatchToProps)(HomeScreen)
