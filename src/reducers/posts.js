import {
  RECEIVE_POSTS,
} from '../actions/posts'

const initialState = {
  byId: {},
  allIds: []
}


export default function posts (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:

      const { posts } = action

      return {
        ...state,
        byId: posts.reduce((id, post) => {
           id[post.id] = post
           return id
         }, {}),

        allIds: posts.map((post) => post.id)
      }

    default:
      return state
  }
}
