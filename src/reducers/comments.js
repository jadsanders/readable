import {
  RECEIVE_COMMENTS,
  CLEAR_COMMENTS,
  CREATE_COMMENT,
  SORT_COMMENTS_DATE,
  COMMENT_UPDATE_VOTE,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments'

const initialState = {
  byId: {},
  allIds: [],
}

export default function comments (state = initialState, action) {

  const { comments, comment, id, direction } = action

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        byId: comments.reduce((id, comment) => {
           id[comment.id] = comment
           return id
         }, {}),

        allIds: comments.sort((a, b) => a.timestamp < b.timestamp).map((comment) => comment.id)
      }

    case CLEAR_COMMENTS:
      return {
        ...state,
        byId: {},
        allIds: []
      }

    case CREATE_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [comment.id]: comment
        },
        allIds: [...state.allIds, comment.id]
      }

    case SORT_COMMENTS_DATE:
      return {
        ...state,
        allIds: Object.values(state.byId).sort((a, b) => a.timestamp < b.timestamp).map((comment) => comment.id),
      }

    case COMMENT_UPDATE_VOTE:
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

    case DELETE_COMMENT:
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

    case UPDATE_COMMENT:
     return {
       ...state,
       byId: {
         ...state.byId,
         [comment.id]: {
           ...state.byId[comment.id],
           timestamp: comment.timestamp,
           body: comment.body
         }
       }
     }

    default:
      return state
  }
}
