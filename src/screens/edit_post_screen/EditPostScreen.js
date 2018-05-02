import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../../components/forms/post_form/PostForm';

class EditPostScreen extends Component {

  state = {
    id: this.props.currentPost.id,
    timestamp: this.props.currentPost.timestamp,
    title: this.props.currentPost.title,
    body: this.props.currentPost.body,
    author: this.props.currentPost.author,
    category: this.props.currentPost.category,
    voteScore: this.props.currentPost.voteScore,
    deleted: this.props.currentPost.deleted,
    commentCount: this.props.currentPost.commentCount,
  }

  render() {
    console.log(this.props.currentPost)
    return(
      <div>
        <PostForm
          history={this.props.history}
          state={this.state}
        />
      </div>
    )
  }
}

function mapStateToProps ({ posts }, ownProps) {
  return {
    currentPost: posts.byId[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,null)(EditPostScreen)
