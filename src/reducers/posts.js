import {
  RECEIVE_POSTS,
  RECEIVE_POST_DETAILS,
  CLEAR_POST_DETAILS,
  SORT_POSTS_DATE,
  SORT_POSTS_VOTE,
  SORT_POSTS_COMMENTS,
  POST_UPDATE_VOTE,
  POST_DETAIL_UPDATE_VOTE,
  CREATE_POST,
  DELETE_POST,
  CLEAR_POSTS,
  SET_EDIT_ORIGIN,
  REMOVE_EDIT_ORIGIN,
} from '../actions/posts'

import {
  CREATE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments'

const initialState = {
  byId: {},
  allIds: [],
  sortType: {},
  postDetails: {},
  editOrigin: {}
}

export default function posts (state = initialState, action) {

  const { posts, id, direction, post, postDetails, origin } = action

  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        byId: posts.reduce((id, post) => {
           id[post.id] = post
           return id
         }, {}),

        allIds: posts.sort((a, b) => a.timestamp < b.timestamp).map((post) => post.id),
        sortType: 'timestamp'
      }

    case RECEIVE_POST_DETAILS:
      return {
        ...state,
        postDetails: Object.keys(postDetails).length === 0 ? {error: 'There was an error.'} : postDetails
      }

    case CLEAR_POST_DETAILS:
      return {
        ...state,
        postDetails: {}
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

    case POST_DETAIL_UPDATE_VOTE:
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          voteScore: direction === 'upVote' ? state.postDetails.voteScore + 1 : state.postDetails.voteScore - 1
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

    case CREATE_COMMENT:
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          commentCount: state.postDetails.commentCount + 1
        }
      }

    case DELETE_COMMENT:
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          commentCount: state.postDetails.commentCount - 1
        }
      }

    case CLEAR_POSTS:
      return {
        ...state,
        byId: {},
        allIds: [],
        sortType: {}
      }

    case SET_EDIT_ORIGIN:
      return {
        ...state,
        editOrigin: origin
      }

    case REMOVE_EDIT_ORIGIN:
      return {
        ...state,
        editOrigin: {}
      }

    default:
      return state
  }
}
