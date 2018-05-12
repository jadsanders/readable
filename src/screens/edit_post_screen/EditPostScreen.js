import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../../components/forms/post_form/PostForm';
import NothingFound from '../../components/errors/nothing_found/NothingFound';

import { capitalize, dateConvert } from '../../utils/helpers';

import { fetchPostDetails } from '../../actions/posts';

import './EditPostScreen.css';

class EditPostScreen extends Component {

  componentDidMount() {
    this.props.fetchPostDetails(this.props.match.params.id);
  }

  render() {

    const { author, timestamp, category, voteScore, commentCount } = this.props.postDetails

    return(
      <div>

        {Object.keys(this.props.postDetails).length > 0 &&
          <div className="standard-container">
            <div>
              <div className='component-header-box'>
                <h3>Edit Post</h3>
              </div>
              <PostForm
                state={this.props.postDetails}
                history={this.props.history}
              />
            </div>

            <div className="edit-post-meta-info-box not-selectable">
              <div className="edit-post-meta-info-item">
                {author} on {dateConvert(timestamp)}
              </div>
              <div className="edit-post-meta-info-item">
                {capitalize(category)}
              </div>
              <div className="edit-post-meta-info-item">
                {voteScore} votes
              </div>
              <div className="edit-post-meta-info-item">
                {commentCount === null ? '0' : commentCount} comment{commentCount === 1 ? null : "s"}
              </div>

            </div>


          </div>

        }

        {this.props.postDetails.hasOwnProperty("error") === true &&
          <NothingFound />
        }

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    postDetails: state.posts.postDetails
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPostDetails: (id) => dispatch(fetchPostDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostScreen)
