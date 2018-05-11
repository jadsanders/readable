import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid';

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
      id: uuidv4(),
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

    console.log(this.canBeSubmitted())

    return(
      <div>
        <form>
          <input
            type="text"
            name="author"
            placeholder="Your Name"
            onChange={(event) => this.updateAuthor(event.target.value)}
            value={this.state.author}
            className="comment-form-author"
          />

          <textarea
            name="body"
            placeholder="Your comment"
            onChange={(event) => this.updateBody(event.target.value)}
            value={this.state.body}
            className="comment-form-body"
          />

          <MediumButton
            color="green"
            buttonText="Add Comment"
            onClick={this.handleCreate}
          />

        </form>
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
