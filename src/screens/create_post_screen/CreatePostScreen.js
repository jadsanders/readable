import React, { Component } from 'react';
import PostForm from '../../components/forms/post_form/PostForm';
import uuidv4 from 'uuid';

class CreatePostScreen extends Component {

  state = {
    id: uuidv4(),
    timestamp: new Date().getTime(),
    title: [],
    body: [],
    author: [],
    category: [],
  }

  render() {
    return(
      <div>
        <PostForm
          history={this.props.history}
          state={this.state}
          type="create"
        />
      </div>
    )
  }
}

export default CreatePostScreen;
