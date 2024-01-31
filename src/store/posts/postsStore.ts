import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import type { Post } from '../types';
import { fetchAllPosts } from './postsThunks';


interface PostsState {
  allPosts: Post[];
  postsError: string;
  isLoading: boolean;
}

const postsInitialState: PostsState = {
  allPosts: [],
  postsError: '',
  isLoading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    setAllPosts(state, action: PayloadAction<Post[]>) {
      state.allPosts = action.payload;
    },
    setPostsError(state, action: PayloadAction<string>) {
      state.postsError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchAllPosts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      if(Array.isArray(action.payload)) {
        state.allPosts = action.payload;
      }
      state.postsError = '';
    });
  },
});

export const { setAllPosts, setPostsError } = postsSlice.actions;

export default postsSlice;
