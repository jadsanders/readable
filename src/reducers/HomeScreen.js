import {
  RECEIVE_POSTS,
} from '../actions/posts'

const initialState = {
  posts: [],
}

export default function posts (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:

      const { posts } = action
      return {
        ...state,
          [posts]: posts
      }

    default:
      return state
  }
}
