import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import postsSlice  from '../store/posts/postsStore';
import usersSlice  from '../store/users/usersStore';

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  posts: postsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;