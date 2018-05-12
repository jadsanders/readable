import {
  RECEIVE_CATEGORIES,
  CLEAR_CATEGORIES
} from '../actions/categories'

const initialState = {
  byName: {}
}

export default function categories (state = initialState, action) {

  const { categories } = action

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
          byName: categories.categories.reduce((name, category) => {
             name[category.name] = category
             return name
          }, {})
      }

      case CLEAR_CATEGORIES:
        return {
          ...state,
            byName: {}
        }

    default:
      return state
  }
}
