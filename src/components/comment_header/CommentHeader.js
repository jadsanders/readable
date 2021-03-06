import React, { Component } from 'react';
import { dateConvert, timeConvert } from '../../utils/helpers';
import { connect } from 'react-redux';
import { updateCommentVote, removeComment, sortCommentsDate, editComment } from '../../actions/comments';

import SmallFormButton from '../buttons/small_form_button/SmallFormButton';


import './CommentHeader.css';

class CommentHeader extends Component {

  state = {
    deleteVisible: false,
    editFormVisible: false,
    id: this.props.comment.id,
    body: this.props.comment.body,
    timestamp: new Date().getTime(),
  }

  toggleDelete = () => {
    this.setState({ deleteVisible: !this.state.deleteVisible })
  }

  updateBody = (text) => {this.setState({ body: text })}
  toggleForm = () => {
    this.setState({
      editFormVisible: !this.state.editFormVisible,
      body: this.props.comment.body
    })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    if (!this.canBeUpdated()) {
      return
    } else {
      this.props.updateComment(this.state)
      this.props.sortCommentsDate()
      this.setState({ editFormVisible: false })
    }
  }

  canBeUpdated() {
    return (
      this.state.body.length > 0
    );
  }

  render() {

    const { author, body, timestamp, voteScore, id } = this.props.comment
    const { updateVote } = this.props

    return(
      <div className="comment-header">

        <div className="comment-info">
          {author}, {dateConvert(timestamp)}, {timeConvert(timestamp)}
        </div>

        {this.state.editFormVisible === true
          ? <div>
              <form>
                <textarea
                  name="body"
                  placeholder="Your comment"
                  onChange={(event) => this.updateBody(event.target.value)}
                  value={this.state.body}
                  className="edit-comment-body-input"
                  autoFocus={true}
                />

              </form>
              <SmallFormButton
                buttonText="Update"
                color={this.canBeUpdated() ? "green" : "grey"}
                onClick={this.handleUpdate}
              />
              <SmallFormButton
                buttonText="Discard"
                color="blue"
                onClick={this.toggleForm}
              />
            </div>
          : <div className="comment-body">{body}</div>
        }

        <div className="comment-vote-box not-selectable">
          {voteScore === null ? '0' : voteScore} vote{voteScore === 1 || voteScore === -1 ? null : "s"}
          <i className="material-icons" onClick={() => updateVote(id, 'downVote', 'comments')}>thumb_down</i>
          <i className="material-icons" onClick={() => updateVote(id, 'upVote', 'comments')}>thumb_up</i>
        </div>




        <div className="comment-actions-container">

          {this.state.deleteVisible === false &&
            <div className="not-selectable">


              <div className="comment-action-box">
                <i onClick={this.toggleForm} className="material-icons edit-comment-link">edit</i>
              </div>

              <div className="comment-action-box">
                <div>
                  <i onClick={() => this.toggleDelete()} className="material-icons delete-comment-link">delete</i>
                </div>
              </div>


            </div>
          }

          {this.state.deleteVisible === true &&
            <div className="not-selectable">

              <div className="comment-action-box comment-confirmation-text">
                Are you sure?
              </div>

              <div className="comment-action-box">
                <i onClick={() => this.props.removeComment(id)} className="material-icons confirm-abort-delete-link confirm-btn">done</i>
              </div>

              <div className="comment-action-box">
                <i onClick={() => this.toggleDelete()} className="material-icons confirm-abort-delete-link abort-btn">close</i>
              </div>

            </div>
          }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateVote: (id, direction, entity) => dispatch(updateCommentVote(id, direction, entity)),
    removeComment: (id) => dispatch(removeComment(id)),
    updateComment: (comment) => dispatch(editComment(comment)),
    sortCommentsDate: () => dispatch(sortCommentsDate()),
  }
}

export default connect(null,mapDispatchToProps)(CommentHeader);
