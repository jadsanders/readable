import React, { Component } from 'react';
import * as APIUtil from '../../utils/api';
import PostForm from '../../components/forms/post_form/PostForm';
import NothingFound from '../../components/errors/nothing_found/NothingFound';

class EditPostScreen extends Component {

  state = {
    currentPost: []
  }

  componentDidMount() {
    APIUtil
    .fetchPostDetails(this.props.match.params.id)
    .then((currentPost) => this.setState({currentPost}))
  }

  render() {

    //console.log(this.state.currentPost)
    //console.log(this.state.currentPost.length === 0 ? true : false)

    return(
      <div>
        {this.state.currentPost.length !== 0
          ? <PostForm
            history={this.props.history}
            state={this.state.currentPost}
            type="edit"
          />
          : <NothingFound />
        }
      </div>
    )
  }
}

export default EditPostScreen;
