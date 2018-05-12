import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NothingFound from '../../components/errors/nothing_found/NothingFound';
import PostDetails from '../../components/post_details/PostDetails';

import './PostDetailScreen.css';

import { fetchPostDetails, clearPosts } from '../../actions/posts';
import { fetchComments } from '../../actions/comments';
import { clearCategories } from '../../actions/categories';

class PostDetailScreen extends Component {

  componentDidMount() {
    this.props.fetchPostDetails(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
    this.props.clearCategories();
    this.props.clearPosts();
  }

  urlIsValid() {
    return (
      this.props.match.params.category === this.props.postDetails.category &&
      this.props.match.params.id === this.props.postDetails.id
    )
  }


  render() {
    return (
      <div>

        <Link to='/'>
          <div className="home-button not-selectable">
            <i className="material-icons home-icon">home</i>Home
          </div>
        </Link>

        <div className="standard-container">
          {Object.keys(this.props.postDetails).length === 0
            ? null
            : this.props.postDetails.hasOwnProperty("error") === true || !this.urlIsValid()
              ? <NothingFound />
              : <PostDetails location={this.props} history={this.props.history}/>
          }
        </div>

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    postDetails: state.posts.postDetails,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPostDetails: (id) => dispatch(fetchPostDetails(id)),
    fetchComments: (id) => dispatch(fetchComments(id)),
    clearCategories: () => dispatch(clearCategories()),
    clearPosts: () => dispatch(clearPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailScreen)
