import * as APIUtil from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SORT_POSTS_DATE = 'SORT_POSTS_DATE';
export const SORT_POSTS_VOTE = 'SORT_POSTS_VOTE';
export const SORT_POSTS_COMMENTS = 'SORT_POSTS_COMMENTS';
export const CLEAR_SORT = 'CLEAR_SORT';
export const POST_UP_VOTE = 'POST_UP_VOTE';
export const POST_DOWN_VOTE = 'POST_DOWN_VOTE';

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

export function clearSort () {
  return {
    type: CLEAR_SORT
  }
};

export function postUpVote (id) {
  return {
    type: POST_UP_VOTE,
    id
  }
}

export function postDownVote (id) {
  return {
    type: POST_DOWN_VOTE,
    id
  }
}
