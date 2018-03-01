import { createStore, combineReducers } from 'redux';
import { categories } from './components/budget/reducer';
import { commentsByCategory } from './components/comments/reducer';

const reducer = combineReducers({
  categories,
  commentsByCategory
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;