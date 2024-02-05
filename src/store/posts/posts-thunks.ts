import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../api';
import { DEFAULT_ERROR_MESSAGE } from '../constants'
import { Post } from '../types';

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get<Post[]>('posts');
      return 'posts' in data ? data.posts : [];
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.message);
      }
      return DEFAULT_ERROR_MESSAGE;
    }
  }
);
