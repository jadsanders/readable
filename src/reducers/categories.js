import {
  RECEIVE_CATEGORIES
} from '../actions/categories'

const initialState = {
  byName: []
}

export default function categories (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:

      const { categories } = action

      return {
        ...state,
          byName: categories.categories.reduce((name, category) => {
             name[category.name] = category
             return name
          }, {})
      }




    default:
      return state
  }
}
