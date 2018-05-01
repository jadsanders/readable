import {
  RECEIVE_POSTS,
  SORT_POSTS_DATE,
  SORT_POSTS_VOTE,
  SORT_POSTS_COMMENTS,
  POST_UPDATE_VOTE,
  CREATE_POST,
  DELETE_POST,
} from '../actions/posts'

const initialState = {
  byId: {},
  allIds: [],
  sortType: 'timestamp'
}

export default function posts (state = initialState, action) {

  const { posts, id, direction, post } = action

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
        allIds: Object.values(state.byId).filter((post) => post.deleted === false).sort((a, b) => a.timestamp < b.timestamp).map((post) => post.id),
        sortType: 'timestamp'
      }

    case SORT_POSTS_VOTE:
      return {
        ...state,

        //Sorts highest -> lowest
        allIds: Object.values(state.byId).filter((post) => post.deleted === false).sort((a, b) => a.voteScore < b.voteScore).map((post) => post.id),
        sortType: 'voteScore'
      }

    case SORT_POSTS_COMMENTS:
      return {
        ...state,

        //Sorts highest -> lowest
        allIds: Object.values(state.byId).filter((post) => post.deleted === false).sort((a, b) => a.commentCount < b.commentCount).map((post) => post.id),
        sortType: 'comments'
      }

    case POST_UPDATE_VOTE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            voteScore: direction === 'upVote' ? state.byId[id].voteScore + 1 : state.byId[id].voteScore - 1
          }
        }
      }

    case CREATE_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [post.id]: post
        },
        allIds: [...state.allIds, post.id]
      }

    case DELETE_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            deleted: true
          }
        },

        allIds: state.allIds.filter(item => item !== id)
      }


    default:
      return state
  }
}
