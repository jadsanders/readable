import * as APIUtil from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  APIUtil
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);
