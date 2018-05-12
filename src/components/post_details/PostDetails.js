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

        <div className="post-detail-top-row not-selectable">


          <div className="post-detail-meta-info">
            {author} on {dateConvert(timestamp)}
          </div>

          <div className="post-detail-meta-info">
            {capitalize(category)}
          </div>

          <div className="post-detail-meta-info">
            {voteScore === null ? '0' : voteScore} vote{voteScore === 1 || voteScore === -1 ? null : "s"}
            <i className="material-icons post-detail-vote-thumb" onClick={() => updateDetailVote(id, 'downVote', 'posts')}>thumb_down</i>
            <i className="material-icons post-detail-vote-thumb" onClick={() => updateDetailVote(id, 'upVote', 'posts')}>thumb_up</i>
          </div>

          <div className="post-detail-meta-info">
            <Link to={`/posts/${id}/edit`}>
              <i className="material-icons">edit</i>
            </Link>
          </div>

          {this.state.deleteVisible === false &&
            <div className="post-detail-meta-info">
              <i onClick={() => this.toggleDelete()} className="material-icons">delete</i>
            </div>
          }

          {this.state.deleteVisible === true &&
            <div className="post-detail-delete-box not-selectable">
              <div className="post-detail-delete-box-inner-1">Are you sure?</div>
              <div className="post-detail-delete-box-inner-2">
                <i onClick={() => this.handleDelete(id)} className="material-icons post-detail-delete-confirm">done</i>
              </div>
              <div className="post-detail-delete-box-inner-2">
                <i onClick={() => this.toggleDelete()} className="material-icons post-detail-delete-abort">close</i>
              </div>
            </div>
          }



        </div>





        <div className='post-detail-header'>
          <h1>{title}</h1>
        </div>

        <div className="post-detail-body white-space-pre-wrap">
          {body}
        </div>


        <div>

          <h4>{commentCount === undefined ? '0' : commentCount} comment{commentCount === 1 ? null : "s"}</h4>


          {commentList.length > 0
            ? commentList.map((comment) =>
                <div key={comment.id}>
                  <CommentHeader comment={comment}/>
                </div>
              )
            : null
          }

          <div className="comment-form-container">
            <CommentForm
              state={this.commentFormState}
              location={this.props.location}
            />
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
