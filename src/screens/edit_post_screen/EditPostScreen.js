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

  customStyle1 = {
    paddingLeft: '15px'
  }

  customStyle2 = {
    padding: '0px 15px 0px 15px',
  }

  detailsRow = {
    margin: '15px 0px 15px 0px'
  }

  render() {

    const { author, timestamp, category, voteScore, comments } = this.props.postDetails

    return(
      <div>

        {Object.keys(this.props.postDetails).length > 0 &&
          <div>

            <div className="sidebar-right">
              <div className='component-header-box'></div>
              <div style={this.customStyle2}>
                <div style={this.detailsRow}>
                  <h5>Written by {author} on {dateConvert(timestamp)}</h5>
                </div>
                <div style={this.detailsRow}>
                  <CategoryBadge color='blue' active={true} buttonText={capitalize(category)}/>
                </div>
                <div style={this.detailsRow}>
                  <h3>{voteScore}</h3>
                  <h5>Votes</h5>
                </div>
                <div style={this.detailsRow}>
                  <h3>{comments === undefined ? '0' : comments}</h3>
                  <h5>Comments</h5>
                </div>
              </div>
            </div>

            <div className="main-screen">
              <div className='component-header-box' style={this.customStyle1}>
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
