import React, { Component } from 'react';
import './PostHeader.css';
import { dateConvert } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateVote, sortPostsDate, removePost } from '../../actions/posts';

class PostHeader extends Component {

  state = {
    deleteVisible: false
  }

  toggleDelete = () => {
    this.setState({ deleteVisible: !this.state.deleteVisible })
  }

  render() {

    const { title, body, commentCount, author, voteScore, timestamp, category, id } = this.props.post
    const { clearSort, updateVote, removePost } = this.props

    return (
      <div className='post-header'>

        <div>
          <Link
            className='postheader-link'
            to={`/${category}/${id}`}
            key={id}
            onClick={clearSort}
          >
            <div className="post-header-title-container">
              <h3>{title}</h3>
            </div>
          </Link>




          <div className="post-header-action-buttons-container not-selectable">

            {this.state.deleteVisible === false &&
              <div>
                <div className="post-action-box">
                  <Link to={`/posts/${id}/edit`}>
                    <i className="material-icons edit-post-link">edit</i>
                  </Link>
                </div>

                <div className="post-action-box">
                  <div>
                    <i onClick={() => this.toggleDelete()} className="material-icons delete-post-link">delete</i>
                  </div>
                </div>
              </div>
            }

            {this.state.deleteVisible === true &&
              <div className="not-selectable">

                <div className="post-action-box confirmation-text">
                  Are your sure?
                </div>

                <div className="post-action-box">
                  <i onClick={() => removePost(id)} className="material-icons confirm-abort-delete-link confirm-btn">done</i>
                </div>

                <div className="post-action-box">
                  <i onClick={() => this.toggleDelete()} className="material-icons confirm-abort-delete-link abort-btn">close</i>
                </div>

              </div>
            }

          </div>
        </div>

        <div className="post-header-body-container">
          {body.replace(/(([^\s]+\s\s*){10})(.*)/,"$1…")}
        </div>

        <div className="post-header-engagement-box not-selectable">
          <h5>
            {commentCount === null ? '0' : commentCount} comments&nbsp;&nbsp;&nbsp;&nbsp;{voteScore} votes
            &nbsp;&nbsp;&nbsp;
            <i className="material-icons vote-thumb" onClick={() => updateVote(id, 'downVote', 'posts')}>thumb_down</i>
            <i className="material-icons vote-thumb" onClick={() => updateVote(id, 'upVote', 'posts')}>thumb_up</i>
          </h5>
        </div>

        <div className="post-header-bottom-box">
          <h6>{author} at {dateConvert(timestamp)}</h6>
        </div>

      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearSort: () => dispatch(sortPostsDate()),
    updateVote: (id, direction, entity) => dispatch(updateVote(id, direction, entity)),
    removePost: (id) => dispatch(removePost(id)),
  }
}

export default connect(null,mapDispatchToProps)(PostHeader);
