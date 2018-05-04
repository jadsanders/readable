import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NothingFound from '../../components/errors/nothing_found/NothingFound';

import './PostDetailScreen.css';

import { fetchPostDetails, fetchComments } from '../../actions/posts';

class PostDetailScreen extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
    this.props.fetchPostDetails(this.props.match.params.id);
  }

  // make component home button out of link to='/'

  render() {
    return (
      <div>

        <Link to='/'>
          <div className='home-button'>
            <i className="material-icons home-icon">home</i>Home
          </div>
        </Link>

        <div className='post-detail-container'>

          {this.props.postDetails.hasOwnProperty("error") === true
            ? <NothingFound />

            // put a component here for post details
            : <div>{this.props.postDetails.title}</div>
          }

        </div>

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    postDetails: state.posts.postDetails,
    postComments: state.posts.postComments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPostDetails: (id) => dispatch(fetchPostDetails(id)),
    fetchComments: (id) => dispatch(fetchComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailScreen)
