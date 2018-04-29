import React, { Component } from 'react';
import '../stylesheets/PostHeader.css';
import * as Utils from '../utils/helpers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateVote, sortPostsDate, removePost } from '../actions/posts';

class PostHeader extends Component {
  render() {

    const { title, commentCount, author, voteScore, timestamp, category, id } = this.props.post
    const { clearSort, upVote, downVote, removePost } = this.props

    return (
      <div>
        <div className='postHeader'>
          <Link
            className='postheader-link'
            to={`/${category}/${id}`}
            key={id}
            onClick={clearSort}
          >
            <h3>{title}</h3>
          </Link>

          <h5>Comments: {commentCount} || Votes: {voteScore}</h5>
          <h6>Written by {author} at {Utils.timeConvert(timestamp)}</h6>

          <i className="large material-icons vote-thumb" onClick={() => downVote(id, 'downVote', 'posts')}>thumb_down</i>
          <i className="large material-icons vote-thumb" onClick={() => upVote(id, 'upVote', 'posts')}>thumb_up</i>

          <button onClick={() => removePost(id)}>Delete</button>
        </div>

      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearSort: () => dispatch(sortPostsDate()),
    upVote: (id, direction, entity) => dispatch(updateVote(id, direction, entity)),
    downVote: (id, direction, entity) => dispatch(updateVote(id, direction, entity)),
    removePost: (id) => dispatch(removePost(id))
  }
}

export default connect(null,mapDispatchToProps)(PostHeader);
