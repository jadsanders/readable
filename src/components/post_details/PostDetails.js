import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid';
import { Link } from 'react-router-dom';

import CategoryBadge from '../../components/buttons/small_button/SmallButton';
import CommentForm from '../../components/forms/comment_form/CommentForm';
import CommentHeader from '../../components/comment_header/CommentHeader';

import { updateDetailVote, removePostDetails } from '../../actions/posts';

import { capitalize, dateConvert } from '../../utils/helpers';



import './PostDetails.css';

class PostDetails extends Component {

  commentFormState = {
    id: uuidv4(),
    timestamp: new Date().getTime(),
    parentId: this.props.location.match.params.id,
    body: [],
    author: [],
    voteScore: 1,
    deleted: false,
    parentDeleted: false,
  }

  state = {
    deleteVisible: false
  }

  toggleDelete = () => {
    this.setState({ deleteVisible: !this.state.deleteVisible })
  }

  handleDelete = (id) => {
    this.props.deletePostDetails(id)
    this.props.history.push('/')
  }

  render() {

    const { author, title, body, timestamp, category, voteScore, commentCount, id } = this.props.postDetails
    const { commentList, updateDetailVote } = this.props

    return(
      <div>
        <div className="sidebar-right">
          <div className='component-header-box'></div>
          <div className="post-detail-box">
            <div className="post-details-row">
              <h5>Written by {author} on {dateConvert(timestamp)}</h5>
            </div>
            <div className="post-details-row not-selectable">
              <CategoryBadge
                color='blue'
                active={true}
                buttonText={category === undefined ? null : capitalize(category)}/>
            </div>
            <div className="post-details-row not-selectable">
              <h3>{voteScore}</h3>
              <h5>votes</h5>
            </div>
            <div className="post-details-row not-selectable">
              <i className="material-icons post-detail-vote-thumb" onClick={() => updateDetailVote(id, 'downVote', 'posts')}>thumb_down</i>
              <i className="material-icons post-detail-vote-thumb" onClick={() => updateDetailVote(id, 'upVote', 'posts')}>thumb_up</i>
            </div>
            <div className="post-detail-action-box">
              {this.state.deleteVisible === false &&
                <div>
                  <div className="post-action-box">
                    <Link to={`/posts/${id}/edit`}>
                      <i className="material-icons edit-post-link">edit</i>
                    </Link>
                  </div>

                  <div className="post-action-box">
                    <div>
                      <i onClick={() => this.toggleDelete()} className="material-icons delete-post-link">delete</i>
                    </div>
                  </div>
                </div>
              }

              {this.state.deleteVisible === true &&
                <div className="not-selectable">

                  <div className="post-action-box confirmation-text">
                    Are your sure?
                  </div>

                  <div className="post-action-box">
                    <i onClick={() => this.handleDelete(id)} className="material-icons confirm-abort-delete-link confirm-btn">done</i>
                  </div>

                  <div className="post-action-box">
                    <i onClick={() => this.toggleDelete()} className="material-icons confirm-abort-delete-link abort-btn">close</i>
                  </div>

                </div>
              }
            </div>
          </div>
        </div>



        <div className="main-screen">

          <div className='component-header-box post-detail-header'>
            <h3>{title}</h3>
          </div>

          <div className="post-detail-box post-detail-body">
            {body}
          </div>


          <div className="post-detail-box">

            <h4>{commentCount === undefined ? '0' : commentCount} comments</h4>

            {commentList.length > 0
              ? commentList.map((comment) =>
                  <div key={comment.id}>
                    <CommentHeader comment={comment}/>
                  </div>
                )
              : null
            }

            <div className="comment-form">
              <CommentForm
                state={this.commentFormState}
                location={this.props.location}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {

  const commentOrder = state.comments.allIds
  const allComments = state.comments.byId

  return {
    postDetails: state.posts.postDetails,
    commentList: commentOrder.map((id) => (

      Object.keys(allComments[id]).reduce((comments, comment) => {
        comments[comment] = allComments[id][comment]
          ? allComments[id][comment]
          : null

        return comments
      }, {})
    )).filter((comment) => {
      return comment.deleted === null || comment.deleted === false
    })
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateDetailVote: (id, direction, entity) => dispatch(updateDetailVote(id, direction, entity)),
    deletePostDetails: (id) => dispatch(removePostDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
