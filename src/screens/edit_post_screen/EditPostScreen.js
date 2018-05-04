import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../../components/forms/post_form/PostForm';
import NothingFound from '../../components/errors/nothing_found/NothingFound';

import { fetchPostDetails } from '../../actions/posts';


class EditPostScreen extends Component {


  componentDidMount() {
    this.props.fetchPostDetails(this.props.match.params.id);
  }

  render() {
    return(
      <div>

        {this.props.postDetails.hasOwnProperty("error") === true &&
          <NothingFound />
        }

        {Object.keys(this.props.postDetails).length > 0 &&
          <PostForm
            state={this.props.postDetails}
            history={this.props.history}
          />
        }

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    postDetails: state.posts.postDetails
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPostDetails: (id) => dispatch(fetchPostDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostScreen)
