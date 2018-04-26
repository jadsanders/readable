import React, { Component } from 'react';
import '../stylesheets/PostHeader.css';
import * as Utils from '../utils/helpers';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearSort, postUpVote, postDownVote } from '../actions/posts';

class PostHeader extends Component {
  render() {

    const { title, commentCount, author, voteScore, timestamp, category, id } = this.props.post
    const { clearSort, upVote, downVote } = this.props

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

          <i className="large material-icons vote-thumb" onClick={() => downVote(id)}>thumb_down</i>
          <i className="large material-icons vote-thumb" onClick={() => upVote(id)}>thumb_up</i>

        </div>

      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearSort: () => dispatch(clearSort()),
    upVote: (id) => dispatch(postUpVote(id)),
    downVote: (id) => dispatch(postDownVote(id)),
  }
}

export default connect(null,mapDispatchToProps)(PostHeader);
