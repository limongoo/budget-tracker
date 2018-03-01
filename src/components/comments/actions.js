import { COMMENT_ADD, COMMENT_REMOVE } from './reducer';
import shortid from 'shortid';

export function addComment(categoryId, comment) {
  comment.id = shortid();
  comment.categoryId = categoryId;

  return {
    type: COMMENT_ADD,
    payload: comment
  };
}

export function removeComment(id, categoryId) {
  return {
    type: COMMENT_REMOVE,
    payload: { id, categoryId }
  };
}