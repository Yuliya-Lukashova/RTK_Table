import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import postsReducer  from './posts/posts-store';
import usersReducer  from './users/users-store';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
