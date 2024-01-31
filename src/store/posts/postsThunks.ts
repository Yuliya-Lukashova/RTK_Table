import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../api';
import { Post } from '../types';

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async () => {
    try {
      const { data } = await api.get<Post[]>('posts');
      return 'posts' in data ? data.posts : [];
    } catch (err: unknown) {
      if (err instanceof AxiosError) console.log(err.message);
    }
  }
);