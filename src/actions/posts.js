import * as APIUtil from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_DETAILS = 'RECEIVE_POST_DETAILS';
export const CLEAR_POST_DETAILS = 'CLEAR_POST_DETAILS';
export const SORT_POSTS_DATE = 'SORT_POSTS_DATE';
export const SORT_POSTS_VOTE = 'SORT_POSTS_VOTE';
export const SORT_POSTS_COMMENTS = 'SORT_POSTS_COMMENTS';
export const POST_UPDATE_VOTE = 'POST_UPDATE_VOTE';
export const POST_DETAIL_UPDATE_VOTE = 'POST_DETAIL_UPDATE_VOTE';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';



// get all posts
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  APIUtil
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);



// get a single post
export const receivePostDetails = postDetails => ({
  type: RECEIVE_POST_DETAILS,
  postDetails
});

export const fetchPostDetails = (id) => dispatch => (
  APIUtil
    .fetchPostDetails(id)
    .then(postDetails => dispatch(receivePostDetails(postDetails)))
);



// clear post details
export function clearPostDetails () {
  return {
    type: CLEAR_POST_DETAILS
  }
};


// sort postlist by date
export function sortPostsDate () {
  return {
    type: SORT_POSTS_DATE
  }
};


// sort postlist by voteScore
export function sortPostsVote () {
  return {
    type: SORT_POSTS_VOTE
  }
};


// sort postlist by number of comments
export function sortPostsComments () {
  return {
    type: SORT_POSTS_COMMENTS
  }
};


// update voteScore of post
export function postUpdateVote (id, direction) {
  return {
    type: POST_UPDATE_VOTE,
    id,
    direction
  }
};

export const updateVote = (id, direction, entity) => dispatch => (
  APIUtil
    .updateVote(id, direction, entity)
    .then(dispatch(postUpdateVote(id, direction)))
);


// update voteScore of post detail
export function postDetailUpdateVote (id, direction) {
  return {
    type: POST_DETAIL_UPDATE_VOTE,
    id,
    direction
  }
};

export const updateDetailVote = (id, direction, entity) => dispatch => (
  APIUtil
    .updateVote(id, direction, entity)
    .then(dispatch(postDetailUpdateVote(id, direction)))
);


// create a new post
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


//update an existing post
export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export const editPost = (post) => dispatch => (
  APIUtil
    .updatePost(post)
    .then(dispatch(updatePost(post)))
);

// delete a post
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

// delete postDetails
export const removePostDetails = (id) => dispatch => (
  APIUtil
    .deletePost(id)
)

// clear all posts
export function clearPosts () {
  return {
    type: CLEAR_POSTS
  }
};
