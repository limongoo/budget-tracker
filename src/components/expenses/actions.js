import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducer';
import shortid from 'shortid';
import budgetApi from '../../services/budgetApi';

export function addExpense(categoryId, expense) {
  return dispatch => {
    return budgetApi.addExpense(categoryId, expense)
      .then(expense => {
        dispatch({
          type: EXPENSE_ADD,
          payload: {
            categoryId,
            expense
          }
        });
      });
  };
}


export function updateExpense(expense) {
  return {
    type: EXPENSE_UPDATE,
    payload: expense
  };
}

export function removeExpense(id, categoryId) {
  return {
    type: EXPENSE_REMOVE,
    payload: { id, categoryId }
  };
}