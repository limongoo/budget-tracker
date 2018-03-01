import { CATEGORY_ADD, CATEGORY_REMOVE } from '../budget/reducer';

export const COMMENT_ADD = 'COMMENT_ADD';
export const COMMENT_REMOVE = 'COMMENT_REMOVE';

export function commentsByCategory(state = {}, { type, payload }) {
  switch(type) {

    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };

    case CATEGORY_REMOVE: {
      const nextState = { ...state };
      delete nextState[payload];
      return nextState;
    }
    
    case COMMENT_ADD: {
      const { categoryId } = payload;
      const categoryComments = state[categoryId];
      return {
        ...state,
        [categoryId]: [
          ...categoryComments,
          payload
        ]
      };
    }

    case COMMENT_REMOVE: {
      const { id, categoryId } = payload;
      const categoryComments = state[categoryId];

      return {
        ...state,
        [categoryId]: categoryComments.filter(c => c.id !== id)
      };
    }
    default:
      return state;
  }
}