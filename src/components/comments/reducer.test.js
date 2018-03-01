import { commentsByCategory } from './reducer';
import { CATEGORY_ADD, CATEGORY_REMOVE } from '../budget/reducer';
import { COMMENT_ADD, COMMENT_REMOVE } from './reducer';

it('has default state of {}', () => {
  const state = commentsByCategory(undefined, {});
  expect(state).toEqual({});
});

const addCategory = () => commentsByCategory({}, {
  type: NOTE_ADD, 
  payload: { id: 123 } 
});

