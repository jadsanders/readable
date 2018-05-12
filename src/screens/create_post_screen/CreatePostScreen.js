import React, { Component } from 'react';
import PostForm from '../../components/forms/post_form/PostForm';
import uuidv4 from 'uuid';

import './CreatePostScreen.css';

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
      <div className="standard-container">
        <div className='component-header-box'>
          <h3>New Post</h3>
        </div>

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
