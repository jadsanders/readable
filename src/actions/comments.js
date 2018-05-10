import * as APIUtil from '../utils/api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const SORT_COMMENTS_DATE = 'SORT_COMMENTS_DATE';
export const COMMENT_UPDATE_VOTE = 'COMMENT_UPDATE_VOTE';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';


// get comments of a single posts
export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = (id) => dispatch => (
  APIUtil
    .fetchComments(id)
    .then(comments => dispatch(receiveComments(comments)))
);


// clear comments
export function clearComments () {
  return {
    type: CLEAR_COMMENTS
  }
};


// create a new comment
export function createComment (comment) {
  return {
    type: CREATE_COMMENT,
    comment
  }
};

export const addComment = (comment) => dispatch => (
  APIUtil
    .createComment(comment)
    .then(dispatch(createComment(comment)))
);


// sort commentlist by date
export function sortCommentsDate () {
  return {
    type: SORT_COMMENTS_DATE
  }
};


// update voteScore of comment
export function commentUpdateVote (id, direction) {
  return {
    type: COMMENT_UPDATE_VOTE,
    id,
    direction
  }
};

export const updateCommentVote = (id, direction, entity) => dispatch => (
  APIUtil
    .updateVote(id, direction, entity)
    .then(dispatch(commentUpdateVote(id, direction)))
);


// delete a comment
export function deleteComment (id) {
  return {
    type: DELETE_COMMENT,
    id
  }
};

export const removeComment = (id) => dispatch => (
  APIUtil
    .deleteComment(id)
    .then(dispatch(deleteComment(id)))
);


//update an existing comment
export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export const editComment = (comment) => dispatch => (
  APIUtil
    .updateComment(comment)
    .then(dispatch(updateComment(comment)))
);
