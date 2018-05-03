import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../../components/forms/post_form/PostForm';

class EditPostScreen extends Component {

  state = this.props.currentPost

  render() {
    console.log(this.state)
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
