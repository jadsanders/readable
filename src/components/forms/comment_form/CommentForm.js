import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createId } from '../../../utils/helpers';

import { addComment, sortCommentsDate } from '../../../actions/comments';
import MediumButton from '../../buttons/medium_button/MediumButton';

import './CommentForm.css';


class CommentForm extends Component {

  state = this.props.state

  handleCreate = (e) => {
    e.preventDefault()
    if (!this.canBeSubmitted()) {
      return
    } else {
      this.props.createComment(this.state)
      this.props.sortCommentsDate()
      this.resetForm()
    }
  }

  resetForm = () => {
    this.setState({
      id: createId(),
      timestamp: new Date().getTime(),
      parentId: this.props.location.match.params.id,
      body: [],
      author: [],
      voteScore: 1,
      deleted: false,
      parentDeleted: false,
    })
  }

  updateBody = (text) => {this.setState({ body: text })}
  updateAuthor = (text) => {this.setState({ author: text })}

  canBeSubmitted() {
    const { body, author } = this.state;
    return (
      body.length > 0 &&
      author.length > 0
    );
  }


  render() {
    return(
      <div>

        <form>
          <input
            type="text"
            name="author"
            placeholder="Your name*"
            onChange={(event) => this.updateAuthor(event.target.value)}
            value={this.state.author}
            className={this.state.author.length > 0 ? "comment-form-author comment-form-has-value" : "comment-form-author"}
          />

          <textarea
            name="body"
            placeholder="Your comment*"
            onChange={(event) => this.updateBody(event.target.value)}
            value={this.state.body}
            className={this.state.body.length > 0 ? "comment-form-body comment-form-has-value" : "comment-form-body"}
          />

          <MediumButton
            color={this.canBeSubmitted() ? "green" : "grey"}
            buttonText="Add Comment"
            onClick={this.handleCreate}
          />

        </form>
        <div className="comment-form-required">*required</div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createComment: (comment) => dispatch(addComment(comment)),
    sortCommentsDate: () => dispatch(sortCommentsDate()),
  }
}

export default connect(null,mapDispatchToProps)(CommentForm)
