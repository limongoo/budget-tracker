import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducer';
import shortid from 'shortid';
import budgetApi from '../../services/budgetApi';

export function load() {
  return dispatch => {
    return budgetApi.load()
      .then(categories => {
        dispatch({
          type: CATEGORIES_LOAD,
          payload: categories
        });
      });
  };
}

export function addCategory(category) {
  return (dispatch) => {
    return bu
  }
    type: CATEGORY_ADD,
    payload: category
  };
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
}

export function removeCategory(id) {
  return {
    type: CATEGORY_REMOVE,
    payload: id
  };
}