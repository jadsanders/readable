import * as APIUtil from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_DETAILS = 'RECEIVE_POST_DETAILS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const SORT_POSTS_DATE = 'SORT_POSTS_DATE';
export const SORT_POSTS_VOTE = 'SORT_POSTS_VOTE';
export const SORT_POSTS_COMMENTS = 'SORT_POSTS_COMMENTS';
export const POST_UPDATE_VOTE = 'POST_UP_VOTE';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  APIUtil
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export function sortPostsDate () {
  return {
    type: SORT_POSTS_DATE
  }
};

export function sortPostsVote () {
  return {
    type: SORT_POSTS_VOTE
  }
};

export function sortPostsComments () {
  return {
    type: SORT_POSTS_COMMENTS
  }
};

export function postUpdateVote (id, direction) {
  return {
    type: POST_UPDATE_VOTE,
    id,
    direction
  }
};

//here needs to go some logic in 'then(dispatch)' for entity --> dispatch commentUpdateVote

export const updateVote = (id, direction, entity) => dispatch => (
  APIUtil
    .updateVote(id, direction, entity)
    .then(dispatch(postUpdateVote(id, direction)))
);


export function createPost (post) {
  return {
    type: CREATE_POST,
    post
  }
};

export const addPost = (post) => dispatch => (
  APIUtil
    .createPost(post)
    .then(dispatch(createPost(post)))
);


export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
};

export const removePost = (id) => dispatch => (
  APIUtil
    .deletePost(id)
    .then(dispatch(deletePost(id)))
);
