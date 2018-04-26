import {
  RECEIVE_POSTS,
  SORT_POSTS_DATE,
  SORT_POSTS_VOTE,
  SORT_POSTS_COMMENTS,
  CLEAR_SORT,
  POST_UP_VOTE,
  POST_DOWN_VOTE
} from '../actions/posts'

const initialState = {
  byId: {},
  allIds: [],
  sortType: 'timestamp'
}

export default function posts (state = initialState, action) {

  const { posts, id } = action

  switch (action.type) {

    case RECEIVE_POSTS:
      return {
        ...state,
        byId: posts.reduce((id, post) => {
           id[post.id] = post
           return id
         }, {}),

        allIds: posts.sort((a, b) => a.timestamp < b.timestamp).map((post) => post.id)
      }


    case SORT_POSTS_DATE:
      return {
        ...state,

        //Sorts newest -> oldest
        allIds: Object.values(state.byId).sort((a, b) => a.timestamp < b.timestamp).map((post) => post.id),
        sortType: 'timestamp'
      }


    case SORT_POSTS_VOTE:
      return {
        ...state,

        //Sorts highest -> lowest
        allIds: Object.values(state.byId).sort((a, b) => a.voteScore < b.voteScore).map((post) => post.id),
        sortType: 'voteScore'
      }

    case SORT_POSTS_COMMENTS:
      return {
        ...state,

        //Sorts highest -> lowest
        allIds: Object.values(state.byId).sort((a, b) => a.commentCount < b.commentCount).map((post) => post.id),
        sortType: 'comments'
      }


    case CLEAR_SORT:
      return {
        ...state,
        sortType: 'timestamp',
        allIds: Object.values(state.byId).sort((a, b) => a.timestamp < b.timestamp).map((post) => post.id)
      }

    case POST_UP_VOTE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            voteScore: state.byId[id].voteScore + 1
          }
        }
      }

    case POST_DOWN_VOTE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            voteScore: state.byId[id].voteScore - 1
          }
        }
      }

    default:
      return state
  }
}
