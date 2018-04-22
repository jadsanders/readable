import {
  RECEIVE_CATEGORIES,
  SELECT_CATEGORY,
} from '../actions/categories'

const initialState = {
  byName: [],
  selectedCategory: []
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

    case SELECT_CATEGORY:

      const { category } = action

      return {
        ...state,
          selectedCategory: category
      }


    default:
      return state
  }
}
