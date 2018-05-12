import * as APIUtil from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';


// receive categories from API
export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  APIUtil
    .fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);

// clear all categories
export function clearCategories () {
  return {
    type: CLEAR_CATEGORIES
  }
};
