import React, { Component } from 'react';
import '../stylesheets/PostHeader.css';

class PostHeader extends Component {
  render() {
    return (

      <div className='postHeader'>
        <h3>{this.props.post.title}</h3>
        <h6>Comments: {this.props.post.commentCount} || Votes: {this.props.post.voteScore}</h6>
        <p>{this.props.post.body}</p>
      </div>

    )
  }
}

export default PostHeader;
