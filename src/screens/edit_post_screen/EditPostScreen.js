import React, { Component } from 'react';
import * as APIUtil from '../../utils/api';
import PostForm from '../../components/forms/post_form/PostForm';

class EditPostScreen extends Component {

  state = {
    currentPost: {}
  }

  componentDidMount() {
    APIUtil
    .fetchPostDetails(this.props.match.params.id)
    .then((currentPost) => this.setState({currentPost}))
  }

  render() {

    console.log(this.state.currentPost)
    return(
      <div>
        <PostForm
          history={this.props.history}
          state={this.state.currentPost}
          type="edit"
        />
      </div>
    )
  }
}

export default EditPostScreen;
