import {
  RECEIVE_POSTS,
} from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:

      const { posts } = action

      return {
        ...state,
        byId: posts.reduce((obj, post) => {
           obj[post.id] = post
           return obj
         }, {}),

        allIds: posts.map((post) => post.id)
      }

    default:
      return state
  }
}
