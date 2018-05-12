import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../../components/forms/post_form/PostForm';
import NothingFound from '../../components/errors/nothing_found/NothingFound';
import CategoryBadge from '../../components/buttons/small_button/SmallButton';

import { capitalize, dateConvert } from '../../utils/helpers';

import { fetchPostDetails } from '../../actions/posts';

class EditPostScreen extends Component {

  componentDidMount() {
    this.props.fetchPostDetails(this.props.match.params.id);
  }

  render() {

    const { author, timestamp, category, voteScore, comments } = this.props.postDetails

    return(
      <div>

        {Object.keys(this.props.postDetails).length > 0 &&
          <div className="standard-container">

            <div>
              <div className='component-header-box'>
                <h3>Edit Post</h3>
              </div>
              <PostForm
                state={this.props.postDetails}
                history={this.props.history}
              />
            </div>
          </div>

        }

        {this.props.postDetails.hasOwnProperty("error") === true &&
          <NothingFound />
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
